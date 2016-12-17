import { DefaultSinks, DefaultSources } from '../../types';
import { Stream, just, never } from 'most';
import { VNode, div } from '@motorcycle/dom';

import { Demo } from '../../../src/paper-button';

export interface ButtonPageSinks extends DefaultSinks { }

export interface ButtonPageSources extends DefaultSources { }

export function ButtonPage(sources: ButtonPageSources): ButtonPageSinks {
  const demo = Demo(sources);

  return {
    dom: demo.dom.map(view),
    router: never(),
  }
}

function view(demo: VNode): VNode {
  const host: VNode =
    div([demo]);

  return host;
}
