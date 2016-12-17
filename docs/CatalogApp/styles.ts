import { CatalogAppTheme } from './theme';
import { style } from 'typestyle';

export namespace CatalogAppStyles {

  const bgGradient: string =
    `linear-gradient(to bottom, #F3F4F5 0, white 50vh)`;

  const CSS_NOTATION: string = `.`;

  export const host: string = CSS_NOTATION + style({
    display: `block`,
    fontFamily: `'Source Sans Pro', sans-serif`,
    fontSize: `16px`,
    lineHeight: `24px`,
    wordWrap: 'break-word',
    color: CatalogAppTheme.fontColor,
    background: bgGradient,
  })

}

