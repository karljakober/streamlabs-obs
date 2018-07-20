import fs from 'fs';
import { Inject } from '../../util/injector';
import { authorizedHeaders } from '../../util/requests';
import { Service } from 'services/service';
import { UserService } from 'services/user';
import { HostsService } from 'services/hosts';
import { WindowsService } from 'services/windows';
import uuid from 'uuid';
import { stockImages, stockSounds } from './stock-library';


export interface IMediaGalleryFile {
  href: string;
  fileName: string;
  size: number;
  type: string;
  isStock: boolean;
}

interface IMediaGalleryLimits {
  maxUsage: number;
  maxFileSize: number;
}

export interface IMediaGalleryInfo extends IMediaGalleryLimits {
  files: IMediaGalleryFile[];
  totalUsage: number;
}

const fileTypeMap = {
  mp3: 'audio',
  wav: 'audio',
  ogg: 'audio',
  jpg: 'image',
  png: 'image',
  gif: 'image',
  jpeg: 'image',
  webm: 'image',
  svg: 'image'
};

const DEFAULT_MAX_USAGE = 1024 * Math.pow(1024, 2);
const DEFAULT_MAX_FILE_SIZE = 25 * Math.pow(1024, 2);

const concatUint8Arrays = (a: Uint8Array, b: Uint8Array) => {
  const c = new Uint8Array(a.length + b.length);
  c.set(a, 0);
  c.set(b, a.length);
  return c;
};

export class MediaGalleryService extends Service {
  @Inject() private userService: UserService;
  @Inject() private hostsService: HostsService;
  @Inject() private windowsService: WindowsService;

  static initialState: IMediaGalleryInfo = {
    files: [],
    totalUsage: 0,
    maxUsage: null,
    maxFileSize: null
  };

  private promises: Dictionary<{
    resolve: (value?: IMediaGalleryFile) => void;
    reject: () => void;
  }> = {};

  private stockImages = stockImages.map(item => {
    return {
      ...item,
      type: 'image',
      isStock: true,
      size: 0
    };
  });

  private stockSounds = stockSounds.map(item => {
    return {
      ...item,
      type: 'audio',
      isStock: true,
      size: 0
    };
  });

  async fetchGalleryInfo(): Promise<IMediaGalleryInfo> {
    const [files, limits] = await Promise.all([this.fetchFiles(), this.fetchFileLimits()]);
    const totalUsage = files.reduce((size: number, file: IMediaGalleryFile) => size + file.size, 0);
    return { files, totalUsage, ...limits };
  }

  async pickFile(): Promise<IMediaGalleryFile> {
    const promiseId = uuid();
    const promise = new Promise<IMediaGalleryFile> ((resolve, reject) => {
      this.promises[promiseId] = { resolve, reject };
    });
    this.showMediaGallery(promiseId);
    return promise;
  }

  resolveFileSelect(promiseId: string, file: IMediaGalleryFile) {
    this.promises[promiseId].resolve(file);
    delete this.promises[promiseId];
    return file;
  }

  async upload(filePaths: string[]): Promise<IMediaGalleryInfo> {
    const formData = new FormData();
    filePaths.forEach((path: string) => {
      const contents = fs.readFileSync(path);
      const name = path.split('\\').pop();
      const ext = name
        .toLowerCase()
        .split('.')
        .pop();
      const file = new File([contents], name, { type: `${fileTypeMap[ext]}/${ext}` });
      formData.append('uploads[]', file);
    });

    const req = this.formRequest('api/v5/slobs/uploads', {
      body: formData,
      method: 'POST'
    });

    await fetch(req);
    return this.fetchGalleryInfo();
  }

  async downloadFile(filename: string, file: IMediaGalleryFile): Promise<void> {
    return fetch(file.href).then(({ body }: { body: ReadableStream }) => {
      const reader = body.getReader();
      let result = new Uint8Array(0);
      const readStream = ({
        done,
        value
      }: {
        done: boolean;
        value: Uint8Array;
      }) => {
        if (done) {
          fs.writeFileSync(filename, result);
        } else {
          result = concatUint8Arrays(result, value);
          reader.read().then(readStream);
        }
      };
      return reader.read().then(readStream);
    });
  }

  async deleteFile(file: IMediaGalleryFile): Promise<IMediaGalleryInfo> {
    const a = document.createElement('a');
    a.href = file.href;
    const path = a.pathname;

    const req = this.formRequest(`api/v5/slobs/uploads${path}`, { method: 'DELETE' });
    await fetch(req);
    return this.fetchGalleryInfo();
  }

  private showMediaGallery(promiseId: string) {
    this.windowsService.showWindow({
      componentName: 'MediaGallery',
      preservePrevWindow: true,
      queryParams: { promiseId },
      size: {
        width: 1100,
        height: 680
      }
    });
  }

  private formRequest(endpoint: string, options?: any) {
    const host = this.hostsService.streamlabs;
    const headers = authorizedHeaders(this.userService.apiToken);
    const url = `https://${host}/${endpoint}`;
    return new Request(url, { ...options, headers });
  }

  private async fetchFiles(): Promise<IMediaGalleryFile[]> {
    const req = this.formRequest('api/v5/slobs/uploads');
    const files: { href: string, size?: number }[] = await fetch(req)
      .then(resp => resp.json());

    const uploads = files.map(item => {
      const fileName = decodeURIComponent(item.href.split(/[\\/]/).pop());
      const ext = fileName
        .toLowerCase()
        .split('.')
        .pop();
      const type = fileTypeMap[ext];
      const size = item.size || 0;

      return { ...item, fileName, type, size, isStock: false };
    });

    return uploads.concat(this.stockImages, this.stockSounds);
  }

  private async fetchFileLimits(): Promise<IMediaGalleryLimits> {
    const req = this.formRequest('api/v5/slobs/user/filelimits');
    try {
      const fileSize = await fetch(req).then((rawRes: any) => {
        const resp = rawRes.json();
        return {
          maxUsage: resp.body.max_allowed_upload_usage,
          maxFileSize: resp.body.max_allowed_upload_fize_size
        };
      });
      return fileSize;
    } catch (e) {
      return {
        maxUsage: DEFAULT_MAX_USAGE,
        maxFileSize: DEFAULT_MAX_FILE_SIZE
      };
    }
  }
}
