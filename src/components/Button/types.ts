import { Stream } from 'most';
import { DomSource, VNode, VNodeData } from '@motorcycle/dom';

export interface ButtonSources {
  dom: DomSource;
  styles$?: Stream<Array<ButtonStyle>>;
  data$?: Stream<VNodeData>;
  children$: Stream<Array<VNode | string | null>>;
}

export interface ButtonSinks {
  dom: Stream<VNode>;
  click$: Stream<Event>;
}

export interface ButtonModel {
  styles: Array<ButtonStyle>;
  data: VNodeData;
  children: Array<VNode>;
}

export type ButtonStyle = string;