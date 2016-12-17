import { extend, types } from 'typestyle';

export namespace IronFlexLayoutCssProperties {

  export const layout: types.NestedCSSProperties =
    {
      display: `flex`,
    };

  export const inline: types.NestedCSSProperties =
    {
      display: `inline-flex`,
    };

  export const horizontal: types.NestedCSSProperties = extend(
    layout,
    {
      flexDirection: `row`,
    },
  );

  export const vertical: types.NestedCSSProperties = extend(
    layout,
    {
      flexDirection: `column`,
    },
  );

  export const wrap: types.NestedCSSProperties =
    {
      flexWrap: 'wrap',
    };

  /// alignment in cross axis

  export const center: types.NestedCSSProperties =
    {
      alignItems: 'center',
    };

  /// alignment in main axis

  export const centerJustified: types.NestedCSSProperties =
    {
      justifyContent: 'center',
    };

  export const centerCenter: types.NestedCSSProperties = extend(
    center,
    centerJustified,
  );

}
