import {LabelConfig} from '../label';
import {Container, ContainerConfig} from '../container';
import {DOM} from '../../dom';
import {SettingsPanelPageOpenButton} from '../settingspanelpageopenbutton';
import i18n from '../../localization/i18n';

export interface SubtitleSettingsLabelConfig extends LabelConfig {
  opener: SettingsPanelPageOpenButton;
}

export class SubtitleSettingsLabel extends Container<ContainerConfig> {

  private opener: SettingsPanelPageOpenButton;

  private text: string;

  constructor(config: SubtitleSettingsLabelConfig) {
    super(config);

    this.opener = config.opener;
    this.text = config.text;

    this.config = this.mergeConfig(<ContainerConfig>config, {
      cssClass: 'ui-label',
      components: [
        this.opener,
      ],
    }, this.config);
  }

  protected toDomElement(): DOM {
    let labelElement = new DOM('span', {
      'id': this.config.id,
      'class': this.getCssClasses(),
    }).append(
      new DOM('span', {}).html(i18n.t(this.text)),
      this.opener.getDomElement(),
    );

    return labelElement;
  }
}
