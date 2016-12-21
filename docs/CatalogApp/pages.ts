import { DefineReturn, RouteDefinitions } from '@motorcycle/router';
import { PaperButtonPage, PaperRipplePage } from '../pages';

import { CatalogAppSources } from './';
import { DefaultSinks } from '../types';
import { Stream } from 'most';

export function pages(sources: CatalogAppSources): Stream<DefaultSinks> {
  const { router } = sources;

  const routes: RouteDefinitions =
    {
      '/paper-button': PaperButtonPage,
      '/paper-ripple': PaperRipplePage,
    };

  const match$: Stream<DefineReturn> =
    router.define(routes);

  const page$: Stream<DefaultSinks> =
    match$.map(({ path, value }) => {
      return value({ ...sources, router: router.path(path as string) });
    });

  return page$;
}
