import { just } from 'most';
import { VNode, Hooks, button } from '@motorcycle/dom';
import { combineObj } from 'most-combineobj';
import { ButtonSources, ButtonSinks, ButtonModel, ButtonStyle } from './types';

import * as styles from './styles';

export function Button(sources: ButtonSources): ButtonSinks {
  const button = sources.dom.select(styles.button);

  const click$ = button.events('click');

  const styles$ = sources.styles$ || just([]);
  const data$ = sources.data$ || just({});
  const children$ = sources.children$;

  const model$ = combineObj({ styles$, data$, children$ });

  const dom = model$.map(view);

  return { dom, click$ };
}

export namespace Button {
  export const raised: ButtonStyle = styles.raised;
  export const flat: ButtonStyle = styles.flat;
  export const primary: ButtonStyle = styles.primary;
  export const secondary: ButtonStyle = styles.secondary;
  export const accent: ButtonStyle = styles.accent;
  export const red: ButtonStyle = styles.red;
  export const green: ButtonStyle = styles.green;
  export const yellow: ButtonStyle = styles.yellow;
  export const blue: ButtonStyle = styles.blue;
}

function view(model: ButtonModel): VNode {
  return button(
    styles.button + (model.styles.join('') || styles.raised + styles.primary),
    model.data,
    model.children,
  );
}