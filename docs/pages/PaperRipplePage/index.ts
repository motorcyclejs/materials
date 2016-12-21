import { DefaultSinks, DefaultSources } from '../../types';
import { Stream, just, map, never } from 'most';
import { VNode, div } from '@motorcycle/dom';

import { Demo } from '../../../src/paper-ripple';

export function PaperRipplePage(sources: DefaultSources): DefaultSinks {
  const demo = Demo(sources);

  return {
    dom: map(view, demo.dom),
    router: never(),
  }
}

function view(demo: VNode): VNode {
  const host: VNode =
    div([demo]);

  return host;
}
