import {
  CatalogAppModel,
  CatalogAppSinks,
  CatalogAppSources,
  CatalogAppStyles,
} from './';
import { DefaultSinks, DomSink } from '../types';
import { VNode, VirtualNode, div } from '@motorcycle/dom';

import { Stream } from 'most';
import { combineObj } from 'most-combineobj';
import { pages } from './pages';

export function CatalogApp(sources: CatalogAppSources): CatalogAppSinks {
  const page$: Stream<DefaultSinks> = pages(sources);

  const pageView$: DomSink = page$.map(sinks => sinks.dom).switch();

  const children$ = combineObj({ pageView$ });

  const model$ = combineObj({ children$ });

  return {
    dom: model$.map(view),
    router: page$.map(sinks => sinks.router).switch(),
  };
}

function view(model: CatalogAppModel): VNode {
  return div(CatalogAppStyles.host, [
    model.children.pageView
  ]);
}
