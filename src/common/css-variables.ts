import { shadeColor } from './css-helpers';
import { turqoise, yellow, paper } from './colors';

export const serif = `'Gentium Book Basic', serif`;
export const sans = `Roboto, sans-serif;`;
export const fontSmall = `12px`;
export const fontMed = `16px`;
export const fontBig = `22px`;
export const fontHuge = `40px`;
export const lineHeight = `130%`;

// Colors
export const primary = `${turqoise}`;
export const secondary = `${shadeColor(primary, 10)}`;
export const accent = `${yellow}`;

export const bodyBackground = `${paper}`;

// Grid
export const gridColumns = `12`;

// Decorative
export const boxShadowCard =
  `0 2px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 10px 0 rgba(0, 0, 0, 0.09)`;

export const boxShadowFloat =
  `0 2 px 5 px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)`;

export const boxShadowFloatHover =
  `0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)`;

export const boxShadowRaised =
  `0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)`;

export const boxShadowRaisedHover =
  `0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)`;

export const cubic = `cubic-bezier(.64,.09,.08,1)`;

export const borderRadiusSmall = `3px`;
export const borderRadiusMed = `6px`;
export const borderRadiusBig = `10px`;

// Spacing
export const spaceBig = `40px`;
export const spaceMed = `20`;
export const spaceSmall = `10px`;

// Media Queries
export const mediaMed = `1200px`;
export const mediaSmall = `900px`;
export const mediaTiny = `520px`;