import { DomSinks, DomSources } from '../../types';
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

export type StylesStream = Stream<Styles>;

export type Styles = Array<Style>;

export type DataStream = Stream<VNodeData>;

export type ChildrenStream = Stream<Children>;

export type Children = Array<VNode | string | null>;

export interface PaperButtonModel {
  styles: Styles;
  data: VNodeData;
  children: Children;
  elevation: number;
}

export type Style = string;
