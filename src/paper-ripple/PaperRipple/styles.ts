import { CssClassSelector } from '../../types';
import { PaperRippleCssProperties } from './cssProperties';
import { style } from 'typestyle';

export namespace PaperRippleStyles {

  const CSS_NOTATION = `.`;

  export const host: CssClassSelector = CSS_NOTATION + style({
    $debugName: `paper-ripple`,

    display: `block`,
    position: 'absolute',
    borderRadius: `inherit`,
    overflow: 'hidden',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    $nest: {
      '&.animating': {
        // This resolves a rendering issue in Chrome (as of 40) where the ripple
        // is not properly clipped by its parent (which may have rounded
        // corners).See: http://jsbin.com/temexa/4

        // Note: We only apply this style conditionally. Otherwise, the browser
        // will create a new compositing layer for every ripple element on the
        // page, and that would be less desireable.
        transform: `translate3d(0, 0, 0)`,
      },
    },
  });

  export const background: CssClassSelector = CSS_NOTATION + style(
    { $debugName: `paper-ripple__background` },

    PaperRippleCssProperties.fullBox,
    PaperRippleCssProperties.zeroOpacity
  );

  export const waves: CssClassSelector = CSS_NOTATION + style(
    { $debugName: `paper-ripple__waves` },

    PaperRippleCssProperties.fullBox,
    PaperRippleCssProperties.hiddenOverflow,
  );

  export const waveContainer: CssClassSelector = CSS_NOTATION + style(
    { $debugName: `paper-ripple__waveContainer` },

    PaperRippleCssProperties.fullBox,
    PaperRippleCssProperties.borderRadius50percent,
  );

  export const wave: CssClassSelector = CSS_NOTATION + style(
    { $debugName: `paper-ripple__wave` },

    PaperRippleCssProperties.fullBox,
    PaperRippleCssProperties.zeroOpacity,
    PaperRippleCssProperties.hiddenOverflow,
    PaperRippleCssProperties.borderRadius50percent,
  );

}
