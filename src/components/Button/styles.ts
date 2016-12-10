import { shadeColor } from '../../common/css-helpers';
import {
  river,
  red as redColor,
  green as greenColor,
  blue as blueColor,
  yellow as yellowColor,
  primary as primaryColor,
  secondary as secondaryColor,
  accent as accentColor,
  bodyBackground,
  cubic,
  boxShadowFloat,
  spaceSmall,
  spaceMed,
  fontBig,
  boxShadowFloatHover,
  borderRadiusSmall,
  boxShadowRaised,
  boxShadowRaisedHover,
  hover,
  willChange,
} from '../../common';
import { style, types, cssRaw } from 'typestyle';


export const button = '.' + style({
  transition: [
    `all 0.3s ${cubic},`,
    `background-size 0s ${cubic}`,
  ],
  minHeight: '3em',
  minWidth: '12em',
  boxShadow: `${boxShadowFloat}`,
  position: 'relative',
  cursor: `pointer`,
  textTransform: `uppercase`,
  marginBottom: `${spaceSmall}`,
  backgroundImage: `none`,
  backgroundSize: 0,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: `50% 50%`,
  ...willChange(`background-size, background-image`),
  padding: `${spaceSmall} ${spaceMed}`,
  display: `inline-block`,
  fontFamily: `Roboto`,
  border: 0,
  $nest: {
    '&:focus': {
      outline: `none`,
      backgroundSize: `1000%`,
      transition: `all 1s ${cubic}`,
    },
  },
});

cssRaw(`
  ${button}::after {
    position: absolute;
    content: '';
    transition: none;
    background: radial-gradient(circle, white 95%, rgba(0,0,0,0) 95%);
    background-size: 0.7%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
`);

export const raised = '.' + style({
  borderRadius: '1.98px',
  boxShadow: boxShadowRaised,
  ...btnGradient(river),
  ...willChange(`box-shadow, background-color`),
  color: 'white',
  ...hover({
    boxShadow: boxShadowRaisedHover,
    backgroundColor: shadeColor(river, 5),
  }),
});

export const flat = '.' + style({
  ...btnGradient(secondaryColor),
  color: 'black',
  backgroundColor: bodyBackground,
  boxShadow: 'none',
});

export const primary = '.' + style({
  ...btnGradient(primaryColor),
  ...hover({
    backgroundColor: shadeColor(primaryColor, 5),
  }),
});

export const secondary = '.' + style({
  ...btnGradient(secondaryColor),
  ...hover({
    backgroundColor: shadeColor(secondaryColor, 5),
  }),
});

export const accent = '.' + style({
  ...btnGradient(accentColor),
  ...hover({
    backgroundColor: shadeColor(accentColor, 5),
  }),
});

export const red = '.' + style({
  ...btnGradient(redColor),
  ...hover({
    backgroundColor: shadeColor(redColor, 5),
  }),
});

export const green = '.' + style({
  ...btnGradient(greenColor),
  ...hover({
    backgroundColor: shadeColor(greenColor, 5),
  }),
});

export const yellow = '.' + style({
  ...btnGradient(yellowColor),
  ...hover({
    backgroundColor: shadeColor(yellowColor, 5),
  }),
});

export const blue = '.' + style({
  ...btnGradient(blueColor),
  ...hover({
    backgroundColor: shadeColor(blueColor, 5),
  }),
});


function btnGradient(color: string): types.NestedCSSProperties {
  return {
    backgroundImage:
      `radial-gradient(circle, ${color} 1%, ${shadeColor(color, 15)} 15%, rgba(0, 0, 0, 0) 30%)`,
    backgroundColor: color,
  };
}