import { Stream, just, never } from 'most';
import { VNode, VirtualNode, DomSource, div, h2, h4, p } from '@motorcycle/dom';
import { Buttons } from '../features/Button';

import { style } from 'typestyle';

export interface AppSources {
  dom: DomSource;
}

export function App(sources: AppSources) {
  const button = Buttons(sources);

  const dom = button.dom.map(view);
  const router = never();

  return { dom, router };
}

const view = (buttons: VNode) =>
  div({}, [
    h2({}, [`Motorcycle.js Material`]),
    h4({}, 'More coming very soon!'),
    div({
      style: {
        padding: '2em',
      },
    }, [ h2('Buttons'), buttons ]),
  ]);