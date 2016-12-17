import { CssClassSelector } from '../types';
import { IronFlexLayoutCssProperties } from '../iron-flex-layout';
import { PaperStylesColor } from '../paper-styles';
import { style } from 'typestyle';

export namespace IronDemoHelpersStyles {

  const CSS_NOTATION = `.`;

  export const host: CssClassSelector = CSS_NOTATION + style({
    fontFamily: `'Roboto', 'Noto', sans-serif`,
    fontSize: `14px`,
    margin: 0,
    padding: `24px`,
    backgroundColor: PaperStylesColor.paperGrey50,
  });

  export const centered: CssClassSelector = CSS_NOTATION + style({
    maxWidth: `400px`,
    marginRight: `auto`,
    marginLeft: `auto`,
  });

  export const demoSnippet: CssClassSelector = CSS_NOTATION + style(
    {
      marginBottom: `40px`,
    },
  );

  export const demoSnippetCenteredDemo: CssClassSelector = CSS_NOTATION + style(
    IronFlexLayoutCssProperties.horizontal,
    IronFlexLayoutCssProperties.wrap,
    IronFlexLayoutCssProperties.centerJustified,
  );
}
