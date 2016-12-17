import { DomSource, VNode } from '@motorcycle/dom';

import { Stream } from 'most';

export interface Sinks {
  [name: string]: Stream<any>;
}

export interface DomSinks extends Sinks {
  dom: DomSink;
}

export type DomSink = VNode$;

export type VNode$ = Stream<VNode>;

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

export type CssClassSelector = string;
