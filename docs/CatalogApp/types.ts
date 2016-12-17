import { DefaultSinks, DefaultSources } from '../types';

import { VNode } from '@motorcycle/dom';

export interface CatalogAppSinks extends DefaultSinks { }

export interface CatalogAppSources extends DefaultSources { }

export interface CatalogAppModel {
  children: CatalogAppModelChildren
}

export interface CatalogAppModelChildren {
  pageView: VNode
}
