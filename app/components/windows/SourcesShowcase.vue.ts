import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Inject } from 'util/injector';
import ModalLayout from 'components/ModalLayout.vue';
import { WindowsService } from 'services/windows';
import windowMixin from 'components/mixins/window';
import AddSourceInfo from './AddSourceInfo.vue';
import { SourcesService, TSourceType, TPropertiesManager } from 'services/sources';
import { ScenesService } from 'services/scenes';
import { UserService } from 'services/user';
import { WidgetsService, WidgetType } from 'services/widgets';


type TInspectableSource = TSourceType | WidgetType | 'streamlabel';

interface ISelectSourceOptions {
  propertiesManager?: TPropertiesManager;
  widgetType?: WidgetType;
}

@Component({
  components: {
    ModalLayout,
    AddSourceInfo
  },
  mixins: [windowMixin],
})
export default class SourcesShowcase extends Vue {
  @Inject() sourcesService: SourcesService;
  @Inject() userService: UserService;
  @Inject() widgetsService: WidgetsService;
  @Inject() scenesService: ScenesService;
  @Inject() windowsService: WindowsService;

  widgetTypes = WidgetType;
  essentialWidgetTypes = new Set([this.widgetTypes.AlertBox, this.widgetTypes.EventList, this.widgetTypes.TheJar]);

  iterableWidgetTypes = Object.keys(this.widgetTypes)
    .filter((type: string) => isNaN(Number(type)))
    .sort((a: string, b: string) => {
      return this.essentialWidgetTypes.has(this.widgetTypes[a]) ? -1 : 1;
    });


  selectSource(sourceType: TSourceType, options: ISelectSourceOptions = {}) {
    const managerType = options.propertiesManager || 'default';

    const sameTypeCount = this.sourcesService.getSources()
      .filter((source) => {
        return source.isSameType({
          type: sourceType,
          propertiesManager: managerType,
          widgetType: options.widgetType
        });
      })
      .length;

    if (sameTypeCount > 0) {
      this.sourcesService.showAddSource(sourceType, managerType, options.widgetType);
    } else {
      if (managerType === 'widget') {
        this.sourcesService.showNameWidget(options.widgetType);
      } else {
        this.sourcesService.showNameSource(sourceType, managerType);
      }
    }
  }

  selectWidget(type: WidgetType) {
    this.selectSource('browser_source', {
      propertiesManager: 'widget',
      widgetType: type
    });
  }

  widgetName(type: WidgetType) {
    return this.widgetsService.getWidgetName(type);
  }

  widgetPlatform(type: WidgetType) {
    return this.widgetsService.getWidgetPlatform(type);
  }

  inspectedSource: TInspectableSource = null;

  inspectSource(inspectedSource: TInspectableSource) {
    this.inspectedSource = inspectedSource;
  }

  get loggedIn() {
    return this.userService.isLoggedIn();
  }

  get platform() {
    return this.userService.platform.type;
  }

  selectInspectedSource() {
    if (this.sourcesService.getAvailableSourcesTypes().includes(this.inspectedSource as TSourceType)) {
      this.selectSource(this.inspectedSource as TSourceType);
    } else if (this.inspectedSource === 'streamlabel') {
      this.selectSource('text_gdiplus', { propertiesManager: 'streamlabels' });
    } else {
      this.selectWidget(this.inspectedSource as WidgetType);
    }
  }

  get availableSources() {
    return this.sourcesService.getAvailableSourcesTypesList().filter(type => {
      if (type.value === 'text_ft2_source') return false;
      if (type.value === 'scene' && this.scenesService.scenes.length <= 1) return false;
      return true;
    });
  }

}
