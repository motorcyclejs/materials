import { DomSinks, DomSources } from '../../types';

import { div } from '@motorcycle/dom';
import { just } from 'most';

export function Demo(sources: DomSources): DomSinks {
  Function.prototype(sources);

  return {
    dom: just(div([`Paper Ripple Demo`])),
  };
}
