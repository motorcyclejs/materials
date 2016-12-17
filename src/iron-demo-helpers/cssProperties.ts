import { extend, types } from 'typestyle';

import { IronFlexLayoutCssProperties } from '../iron-flex-layout';

export namespace IronDemoHelpersCssProperties {

  export const verticalSectionContainer: types.NestedCSSProperties = extend(
    IronFlexLayoutCssProperties.vertical,
    IronFlexLayoutCssProperties.centerJustified,
  );
}
