import { ViewStream } from '../../../types';
import { VNode, div, elements, query } from '@motorcycle/dom';
import {
  RippleModelStream,
  RippleSinks,
  RippleSources,
} from './';
import { Stream, map, skipRepeats, multicast, combineArray, take } from 'most';

import { color } from 'csx';

import { PaperRippleStyles } from '../';

export function Ripple(sources: RippleSources): RippleSinks {
  const { dom } = sources;

  const parentElement$ =
    skipRepeats(map(firstElement, elements(dom)));

  const window$: Stream<Window> =
    skipRepeats(map(firstElement, elements(query('window', dom)))) as Stream<Window>;

  const rippleColor$ = combineArray(rippleColor, [parentElement$, window$]);

  const model$: RippleModelStream = rippleColor$;

  const view$: ViewStream = multicast(map(view, model$));

  return {
    dom: view$,
  };
}

function rippleColor(element: HTMLElement, window: Window): string {
  const style = window.getComputedStyle(element);

  const rippleColor = color(style.color as string).toRGBA().fadeOut(.5);

  return rippleColor.toString();
}

function view(model: any): VNode {
  const waveContainer: VNode =
    div(PaperRippleStyles.waveContainer,
      {
        style: {
          transform: 'scale(0)',
          transition: 'transform 1s ease-in-out',
          willChange: 'transform',
          backgroundColor: model,
          delayed: {
            transform: 'scale(2)',
          },
        },
      },
      [
        div(PaperRippleStyles.wave),
      ],
    );

  return waveContainer;
}

function firstElement(array: any[]): any {
  return array[0];
}
