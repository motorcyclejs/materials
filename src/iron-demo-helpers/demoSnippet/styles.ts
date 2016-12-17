import { PaperStyleShadow, PaperStylesColor } from '../../paper-styles';

import { CssClassSelector } from '../../types';
import { style } from 'typestyle';

export namespace DemoSnippetStyles {

  const CSS_NOTATION = `.`;

  export const host: CssClassSelector = CSS_NOTATION + style(
    {
      display: `block`,
    },
    PaperStyleShadow.shadowElevation2dp,
  );

  export const demo: CssClassSelector = CSS_NOTATION + style(
    {
      borderBottom: `1px solid ${PaperStylesColor.paperGrey300}`,
      backgroundColor: `white`,
      margin: 0,
      padding: `20px`,
    },
  );

}
