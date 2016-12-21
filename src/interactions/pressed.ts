import { Stream, merge, multicast, startWith, constant, since } from 'most';
import { DomSource, query, events } from '@motorcycle/dom';
import { EventStream } from '../types';

export function pressed(dom: DomSource): Stream<boolean> {
  const mouseDown$: EventStream = events('mousedown', dom);

  const touchStart$: EventStream = events('touchstart', dom);

  const start$: EventStream = merge(mouseDown$, touchStart$);

  const document: DomSource = query(`document`, dom);

  const mouseUp$: EventStream = events('mouseup', document);

  const touchEnd$: EventStream = events('touchend', document);

  const end$: EventStream = merge(mouseUp$, touchEnd$);

  const pressed$: Stream<boolean> =
    multicast(
      startWith(false, merge(
        constant(true, start$),
        constant(false, since(start$, end$))),
      ),
    );

  return pressed$;
}
