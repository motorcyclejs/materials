import { CssClassSelector } from '../types';
import { PaperStyleShadow } from '../paper-styles';
import { style } from 'typestyle';

export namespace PaperMaterialSharedStyles {

  const CSS_NOTATION = `.`;

  export const host: CssClassSelector = CSS_NOTATION + style({
    $debugName: `paper-material_sharedStyles_host`,
    display: `block`,
    position: 'relative',

    $nest: {
      '&.elevation-1': PaperStyleShadow.shadowElevation2dp,
      '&.elevation-2': PaperStyleShadow.shadowElevation4dp,
      '&.elevation-3': PaperStyleShadow.shadowElevation6dp,
      '&.elevation-4': PaperStyleShadow.shadowElevation8dp,
      '&.elevation-5': PaperStyleShadow.shadowElevation16dp,
    },
  });

}
