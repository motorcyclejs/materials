import {
  Children,
  ChildrenStream,
  DataStream,
  DomSinks,
  DomSources,
  Model,
  Styles,
  StylesStream,
} from '../../types';
import { VNode, VNodeData } from '@motorcycle/dom';

import { Stream } from 'most';

export interface PaperButtonSinks extends DomSinks { }

export interface PaperButtonSources extends DomSources {
  props$?: PaperButtonPropsStream;
  styles$?: StylesStream;
  data$?: DataStream;
  children$: ChildrenStream;
}

export type PaperButtonPropsStream = Stream<PaperButtonProps>;

export interface PaperButtonProps {
  raised?: boolean;
}

export interface PaperButtonModel extends Model {
  elevation: number;
}
