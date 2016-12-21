import { DataStream, ViewStream } from '../../../types';
import { DomSource, VNode, div, elements } from '@motorcycle/dom';
import {
  RippleModel,
  RippleModelStream,
  RippleProps,
  RippleSinks,
  RippleSources,
} from './';
import { Stream, just, map, switchLatest, take } from 'most';

import { PaperRippleStyles } from '../';

export function Ripple(sources: RippleSources): RippleSinks {
  const { props$ } = sources;

  const parent$: Stream<DomSource> = map((props: RippleProps) => props.parent, props$);

  const parentElement$ = take(1, switchLatest(map(elements, parent$)));

  const model$: RippleModelStream = parentElement$;

  const view$: ViewStream = map(view, model$);

  return {
    dom: view$,
  };
}

function view(model: any): VNode {
  console.log(window.getComputedStyle(model[0]).color);
  const waveContainer: VNode =
    div(PaperRippleStyles.waveContainer, [
      div(PaperRippleStyles.wave)
    ]);

  return waveContainer;
}
