import { DataStream, DomSinks, DomSources } from '../../../types';
import { DomSource, VNodeData } from '@motorcycle/dom';

import { Stream } from 'most';

export interface RippleSinks extends DomSinks { }

export interface RippleSources extends DomSources {
  props$: RipplePropsStream;
}

export type RipplePropsStream = Stream<RippleProps>;

export interface RippleProps {
  parent: DomSource;
}

export type RippleModelStream = Stream<any>;

export interface RippleModel {
  data: VNodeData;
}
