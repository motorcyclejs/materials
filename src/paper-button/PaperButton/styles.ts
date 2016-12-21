import { PaperStyleShadow, PaperStylesTypography } from '../../paper-styles';

import { CssClassSelector } from '../../types';
import { IronFlexLayoutCssProperties } from '../../iron-flex-layout';
import { style } from 'typestyle';

export namespace PaperButtonStyles {

  const CSS_NOTATION = `.`;

  export const host: CssClassSelector = CSS_NOTATION + style(
    { $debugName: `paper-button` },
    IronFlexLayoutCssProperties.inline,
    IronFlexLayoutCssProperties.centerCenter,
    {
      position: 'relative',
      boxSizing: 'border-box',
      minWidth: `5.14em`,
      margin: `0 .29em`,
      background: `transparent`,
      '-webkit-tap-highlight-color': [
        `rgba(0, 0, 0, 0)`,
        `transparent`,
      ],
      font: `inherit`,
      lineHeight: `normal`,
      textTransform: 'uppercase',
      outline: 0,
      borderRadius: `3px`,
      border: 0,
      userSelect: 'none',
      cursor: `pointer`,
      zIndex: 0,
      padding: `.7em .57em`,
    },
    PaperStylesTypography.commonBase,
    {
      $nest: {
        '&.animated': PaperStyleShadow.shadowTransition,
      },
    },
  );

}
