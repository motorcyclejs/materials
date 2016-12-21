import { types } from 'typestyle';

export namespace PaperRippleCssProperties {

  export const fullBox: types.NestedCSSProperties = {
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: `100%`,
    height: `100%`,
  };

  export const zeroOpacity: types.NestedCSSProperties = {
    opacity: 0,
  };

  export const hiddenOverflow: types.NestedCSSSelectors = {
    overflow: `hidden`,
  };

  export const borderRadius50percent: types.NestedCSSProperties = {
    borderRadius: `50%`,
  };

}
