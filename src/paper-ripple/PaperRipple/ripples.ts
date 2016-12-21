import { Stream, constant, delay, merge, scan, filter, multicast } from 'most';
import { PaperRippleSources, PaperRippleSinks, RippleReducer } from './types';
import { Ripple } from './Ripple';

export function ripples(
  sources: PaperRippleSources,
  pressed$: Stream<boolean>): Stream<PaperRippleSinks[]>
{
  const isPressed$ = filter(Boolean, pressed$);

  // TODO: remove ripples via a method that doesn't rely on delays
  const removeRipple$: Stream<RippleReducer> =
    constant(removeRipple, delay(1200, pressed$));

  const addRipple$: Stream<RippleReducer> =
    constant(addRipple(sources), isPressed$);

  const rippleSinksReducers: Stream<RippleReducer> =
    merge(addRipple$, removeRipple$);

  const ripples$: Stream<Array<PaperRippleSinks>> =
    scan(ripplesReduce, [], rippleSinksReducers);

  return multicast(ripples$);
}

function ripplesReduce(
  ripples: PaperRippleSinks[],
  f: (ripples: PaperRippleSinks[]) => PaperRippleSinks[])
{
  return f(ripples);
}

function addRipple(sources: PaperRippleSources) {
  return function (ripples: Array<PaperRippleSinks>) {
    const ripple: PaperRippleSinks = Ripple(sources);

    return ripples.concat(ripple);
  };
}

function removeRipple(ripples: Array<PaperRippleSinks>) {
  ripples.shift();

  return ripples;
}
