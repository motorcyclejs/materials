import { DefineReturn, RouteDefinitions } from '@motorcycle/router';

import { ButtonPage } from '../pages/ButtonPage';
import { CatalogAppSources } from './';
import { DefaultSinks } from '../types';
import { Stream } from 'most';

export function pages(sources: CatalogAppSources): Stream<DefaultSinks> {
  const { router } = sources;

  const routes: RouteDefinitions =
    {
      '/paper-button': ButtonPage,
    };

  const match$: Stream<DefineReturn> =
    router.define(routes);

  const page$: Stream<DefaultSinks> =
    match$.map(({ path, value }) => {
      return value({ ...sources, router: router.path(path as string) });
    });

  return page$;
}
