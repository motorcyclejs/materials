import { ViewStream } from '../../../types';
import { VNode, div, elements } from '@motorcycle/dom';
import {
  RippleModelStream,
  RippleSinks,
  RippleSources,
} from './';
import { map, skipRepeats, multicast } from 'most';

import { PaperRippleStyles } from '../';

export function Ripple(sources: RippleSources): RippleSinks {
  const parentElement$ =
    skipRepeats(map(firstElement, elements(sources.dom)));

  const model$: RippleModelStream = parentElement$;

  const view$: ViewStream = multicast(map(view, model$));

  return {
    dom: view$,
  };
}

function view(model: any): VNode {
  console.log(window.getComputedStyle(model).color);
  const waveContainer: VNode =
    div(PaperRippleStyles.waveContainer, [
      div(PaperRippleStyles.wave),
    ]);

  return waveContainer;
}

function firstElement(htmlElements: HTMLElement[]): HTMLElement {
  return htmlElements[0];
}
