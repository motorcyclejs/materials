import { CatalogApp } from './CatalogApp';
import { makeDomDriver } from '@motorcycle/dom';
import { routerDriver } from '@motorcycle/router';
import { run } from '@motorcycle/core';

const drivers =
  {
    dom: makeDomDriver(document.querySelector('#app-container') as HTMLElement),
    router: routerDriver,
  };

run(CatalogApp, drivers);
