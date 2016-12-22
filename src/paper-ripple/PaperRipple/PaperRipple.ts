import { Stream, combineArray, map, startWith, switchLatest, just } from 'most';
import { VNode, query } from '@motorcycle/dom';
import { DomSinks } from '../../types';
import { PaperRippleSinks, PaperRippleSources } from './types';
import { PaperRippleStyles } from './styles';
import { pressed } from '../../interactions';
import { ripples } from './ripples';
import { view } from './view';

export function PaperRipple(sources: PaperRippleSources): PaperRippleSinks {
  const pressed$ = pressed(query(PaperRippleStyles.host, sources.dom));
  const ripples$ = ripples(sources, pressed$);

  const rippleViews$: Stream<Array<VNode>> =
    startWith([], combineViewSinks(ripples$));

  return {
    dom: map(view, rippleViews$),
  };
}

function combineViewSinks<Sinks extends DomSinks>(
  sinks$: Stream<Array<Sinks>>): Stream<Array<VNode>>
{
  return switchLatest(map(combineViews, sinks$));
}

function combineViews<Sinks extends DomSinks>(views: Array<Sinks>): Stream<Array<VNode>> {
  if (views.length === 0) return just([null]) as any as Stream<Array<VNode>>;

  return combineArray(Array, views.map(view => view.dom));
}
