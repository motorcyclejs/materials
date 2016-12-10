import { run } from '@motorcycle/core';
import { makeDomDriver } from '@motorcycle/dom';
import { routerDriver } from '@motorcycle/router';

import { App } from './App';

const drivers =
  {
    dom: makeDomDriver(document.querySelector('#app') as HTMLElement),
    router: routerDriver,
  };

run(App, drivers);