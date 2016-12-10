import { cssRule } from 'typestyle';

// set of rules to "reset" browser styles

cssRule('html, body', {
  width: '100%',
});

cssRule('body', {
  display: 'flex',
  flexWrap: 'wrap',
  lineHeight: 1,
});

cssRule(
  'html, body, div, span, applet, object, iframe,' +
  'h1, h2, h3, h4, h5, h6, p, blockquote, pre,' +
  'a, abbr, acronym, address, big, cite, code,' +
  'del, dfn, em, img, ins, kbd, q, s, samp,' +
  'small, strike, strong, sub, sup, tt, var,' +
  'b, u, i, center,' +
  'dl, dt, dd, ol, ul, li,' +
  'fieldset, form, label, legend,' +
  'table, caption, tbody, tfoot, thead, tr, th, td,' +
  'article, aside, canvas, details, embed,' +
  'figure, figcaption, footer, header, hgroup,' +
  'menu, nav, output, ruby, section, summary,' +
  'time, mark, audio, video', {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
    boxSizing: 'border-box',
  },
);

cssRule(
  'article, aside, details, figcaption, figure,' +
  'footer, header, hgroup, menu, nav, section', {
    display: 'block',
  },
);

cssRule('ol, ul', {
  listStyle: 'none',
});

cssRule('blockquote, q', {
  quotes: 'none',
});

cssRule(
  'blockquote:before, blockquote:after' +
  'q:before, q:after', {
    content: '',
  },
);

cssRule('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

cssRule('button', {
  border: 'none',
  cursor: 'pointer',
});