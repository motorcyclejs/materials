import { DomSource, VNode, VNodeData } from '@motorcycle/dom';

import { Stream } from 'most';

export interface Sinks {
  [name: string]: Stream<any>;
}

export interface DomSinks extends Sinks {
  dom: DomSink;
}

export type DomSink = ViewStream;

export type ViewStream = Stream<VNode>;

export type Source<T> =
  Stream<T> |
  ((...args: any[]) => Stream<T>) |
  { [name: string]: Stream<T> | ((...args: any[]) => Stream<T>) | Source<T> } |
  any;

export interface Sources {
  [key: string]: Source<any>;
}

export interface DomSources extends Sources {
  dom: DomSource;
}

export interface Model {
  styles: Styles;
  data: VNodeData;
  children: Children;
}

export type EventStream = Stream<Event>;

export type CssClassSelector = string;

export type StylesStream = Stream<Styles>;

export type Styles = Array<Style>;

export type Style = string;

export type DataStream = Stream<VNodeData>;

export type ChildrenStream = Stream<Children>;

export type Children = Array<VNode | string | null>;
