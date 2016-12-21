import { DomSource, VNode, div, events, query } from '@motorcycle/dom';
import { PaperRippleSinks, PaperRippleSources, PaperRippleStyles } from './';
import { Ripple, RippleSinks } from './Ripple';
import {
  Stream,
  combineArray,
  constant,
  filter,
  map,
  merge,
  scan,
  since,
  startWith,
  switchLatest,
} from 'most';

import { EventStream } from '../../types';

export function PaperRipple(sources: PaperRippleSources): PaperRippleSinks {
  const { dom } = sources;

  const paperRipple: DomSource = query(PaperRippleStyles.host, dom);

  const mouseDown$: EventStream = events('mousedown', paperRipple);

  const touchStart$: EventStream = events('touchstart', paperRipple);

  const start$: EventStream = merge(mouseDown$, touchStart$);

  const document: DomSource = query(`document`, dom);

  const mouseUp$: EventStream = events('mouseup', document);

  const touchEnd$: EventStream = events('touchend', document);

  const end$: EventStream = merge(mouseUp$, touchEnd$);

  const pressed$: Stream<boolean> =
    startWith(false, merge(
      constant(true, start$),
      constant(false, since(start$, end$)),
    ));

  const ripples$: Stream<Array<RippleSinks>> =
    scan(
      function (ripples, _) {
        const ripple: RippleSinks =
          Ripple(sources);

        return ripples.concat(ripple);
      },
      [] as Array<RippleSinks>,
      filter(Boolean, pressed$),
    );

  const rippleViews$: Stream<Array<VNode>> =
    startWith(
      [],
      switchLatest(
        map(
          (ripples: Array<RippleSinks>) =>
            combineArray(
              Array,
              ripples.map((ripple: RippleSinks) => ripple.dom),
            ),
          ripples$,
        ),
      ),
    );

  return {
    dom: map(view, rippleViews$),
  };
}

function view(rippleViews: Array<VNode>): VNode {
  return div(
    PaperRippleStyles.host,
    [
      div(
        PaperRippleStyles.background,
      ),
      div(
        PaperRippleStyles.waves,
        rippleViews,
      ),
    ],
  );
}
