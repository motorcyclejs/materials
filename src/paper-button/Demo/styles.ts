import { CssClassSelector } from '../../types';
import { IronDemoHelpersCssProperties } from '../../iron-demo-helpers';
import { style } from 'typestyle';

export namespace DemoStyles {

  const CSS_NOTATION = `.`;

  export const verticalSectionContainer: CssClassSelector = CSS_NOTATION + style(
    IronDemoHelpersCssProperties.verticalSectionContainer,
    {
      maxWidth: `500px`,
    },
  );

}
