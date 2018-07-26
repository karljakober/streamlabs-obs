import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Inject } from 'util/injector';
import { TObsFormData } from 'components/obs/inputs/ObsInput';
import { WindowsService } from 'services/windows';
import windowMixin from 'components/mixins/window';
import { ISourcesServiceApi } from 'services/sources';
import ModalLayout from 'components/ModalLayout.vue';
import Display from 'components/shared/Display.vue';
import GenericForm from 'components/obs/inputs/GenericForm.vue';
import WidgetProperties from 'components/custom-source-properties/WidgetProperties.vue';
import StreamlabelProperties from 'components/custom-source-properties/StreamlabelProperties.vue';
import { $t } from 'services/i18n';
import { Subscription } from 'rxjs/Subscription';
import electron from 'electron';

@Component({
  components: {
    ModalLayout,
    Display,
    GenericForm,
    WidgetProperties,
    StreamlabelProperties
  },
  mixins: [windowMixin]
})
export default class SourceProperties extends Vue {

  @Inject()
  sourcesService: ISourcesServiceApi;

  @Inject()
  windowsService: WindowsService;

  sourceId = this.windowsService.getChildWindowQueryParams().sourceId;
  source = this.sourcesService.getSource(this.sourceId);
  properties: TObsFormData = [];

  sourcesSubscription: Subscription;

  mounted() {
    this.properties = this.source ? this.source.getPropertiesFormData() : [];
    this.sourcesSubscription = this.sourcesService.sourceRemoved.subscribe(source => {
      if (source.sourceId === this.sourceId) {
        electron.remote.getCurrentWindow().close();
      }
    });
  }

  destroyed() {
    this.sourcesSubscription.unsubscribe();
  }


  get propertiesManagerUI() {
    if (this.source) return  this.source.getPropertiesManagerUI();
  }


  onInputHandler(properties: TObsFormData, changedIndex: number) {
    const source = this.sourcesService.getSource(this.sourceId);
    source.setPropertiesFormData(
      [properties[changedIndex]]
    );
    this.refresh();
  }

  refresh() {
    this.properties = this.source.getPropertiesFormData();
  }

  closeWindow() {
    this.windowsService.closeChildWindow();
  }

  done() {
    this.closeWindow();
  }

  cancel() {
    this.closeWindow();
  }


  get windowTitle() {
    const source = this.sourcesService.getSource(this.sourceId);
    return source ? $t('Properties for %{sourceName}', { sourceName: source.name }) : '';
  }

}
