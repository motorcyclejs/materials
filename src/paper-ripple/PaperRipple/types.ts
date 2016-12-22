import { DomSinks, DomSources } from '../../types';

export interface PaperRippleSinks extends DomSinks { }

export interface PaperRippleSources extends DomSources { }

export type RippleReducer = (ripples: Array<PaperRippleSinks>) => Array<PaperRippleSinks>;
