import Vue from 'vue';
import { Inject } from '../../util/injector';
import { Component, Watch } from 'vue-property-decorator';
import { WindowsService } from 'services/windows';
import { debounce } from 'lodash-decorators';
import { SourcesService } from 'services/sources';
import { WidgetsService, WidgetType } from 'services/widgets';
import { IWidgetData, WidgetSettingsService } from 'services/widget-settings/widget-settings';
import { Subscription } from 'rxjs/Subscription';
import { $t } from 'services/i18n';

@Component({})
export default class WidgetSettings<TData extends IWidgetData, TService extends WidgetSettingsService<TData>>
  extends Vue {

  @Inject() windowsService: WindowsService;
  @Inject() sourcesService: SourcesService;
  @Inject() widgetsService: WidgetsService;


  tabName: string = '';
  sourceId = this.windowsService.getChildWindowOptions().queryParams.sourceId;
  source = this.sourcesService.getSource(this.sourceId);
  wData: TData = null;
  metadata = this.service.getMetadata();
  loadingState: 'success' | 'pending' | 'fail' = 'pending';
  tabs = this.service.getTabs();

  private dataUpdatedSubscr: Subscription;

  get widgetType(): WidgetType {
    return this.source.getPropertiesManagerSettings().widgetType;
  }

  get service(): TService {
    return this.widgetsService.getWidgetSettingsService(this.widgetType) as TService;
  }

  protected skipNextDatachangeHandler: boolean;

  async created() {
    this.tabName = this.tabName || this.tabs[0].name;
    this.dataUpdatedSubscr = this.service.dataUpdated.subscribe(newData => {
      this.onDataUpdatedHandler(newData);
    });
    await this.refresh();
  }

  destroyed() {
    this.dataUpdatedSubscr.unsubscribe();
  }

  async refresh() {
    try {
      await this.service.fetchData();
      this.loadingState = 'success';
      this.skipNextDatachangeHandler = true;
      this.afterFetch();
    } catch (e) {
      this.loadingState = 'fail';
    }
  }

  @debounce(1000)
  @Watch('wData', { deep: true })
  async onDataChangeHandler() {
    const tab = this.service.getTab(this.tabName);
    if (!tab) return;

    const needToSave = tab.autosave && !this.skipNextDatachangeHandler;
    if (this.skipNextDatachangeHandler) this.skipNextDatachangeHandler = false;

    if (!needToSave) return;
    await this.save();
  }

  private onDataUpdatedHandler(newData: TData) {
    this.wData = newData;
    this.refreshPreview();
  }

  async save(dataToSave?: any) {
    if (this.loadingState === 'pending') return;

    const tab = this.service.getTab(this.tabName);
    if (!tab) return;

    this.loadingState = 'pending';

    try {
      await this.service.saveData(dataToSave || this.wData[tab.name], tab.name);
      this.loadingState = 'success';
      this.afterFetch();
      this.skipNextDatachangeHandler = true;
    } catch (e) {
      this.loadingState = 'fail';
      this.onFailHandler();
    }
  }

  async reset() {
    if (this.loadingState === 'pending') return;

    this.loadingState = 'pending';

    try {
      this.wData = await this.service.reset(this.tabName);
      this.loadingState = 'success';
      this.afterFetch();
      this.skipNextDatachangeHandler = true;
    } catch (e) {
      this.loadingState = 'fail';
      this.onFailHandler();
    }
  }

  refreshPreview() {

    // update obs-preview
    // little hack: update some property to trigger preview refreshing
    const shutdown = this.source.getSettings().shutdown;
    this.source.updateSettings({ shutdown: !shutdown });
    this.source.updateSettings({ shutdown });
  }

  afterFetch() {

  }

  onFailHandler() {
    this.$toasted.show(
      $t('Save failed, something went wrong.'),
      {
        position: 'bottom-center',
        className: 'toast-alert',
        duration: 1000,
        singleton: true
      }
    );
  }
}
