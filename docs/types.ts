import { DomSource, VNode, VirtualNode } from '@motorcycle/dom';
import { RouterInput, RouterSource } from '@motorcycle/router';

import { Stream } from 'most';

export interface Sinks {
  [name: string]: Stream<any>;
}

export interface DomSinks extends Sinks {
  dom: DomSink;
}

export type DomSink = VNode$;

export type VNode$ = Stream<VNode>;

export interface RouterSinks extends Sinks {
  router: RouterInput;
}

export interface DefaultSinks extends DomSinks, RouterSinks { }

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

export interface RouterSources extends Sources {
  router: RouterSource;
}

export interface DefaultSources extends DomSources, RouterSources { }
