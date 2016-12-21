import { DomSinks, DomSources } from '../../../types';
import { VNodeData } from '@motorcycle/dom';

import { Stream } from 'most';

export interface RippleSinks extends DomSinks { }

export interface RippleSources extends DomSources {
}

export type RippleModelStream = Stream<any>;

export interface RippleModel {
  data: VNodeData;
}
