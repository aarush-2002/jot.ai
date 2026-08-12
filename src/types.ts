export type EffectDirection = 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | 'MIXED';

export type TierType = 'TIER 1 · MA' | 'TIER 2 · RCT' | 'TIER 3 · OBS' | 'TIER 1 · SR';

export interface PICOData {
  population: string;
  intervention: string;
  comparator: string;
  outcome: string;
}

export interface ContradictionCard {
  paperA: {
    authorYear: string;
    finding: string;
  };
  paperB: {
    authorYear: string;
    finding: string;
  };
  whyTheyDisagree: string;
}

export interface Paper {
  id: string;
  tier: TierType;
  authors: string;
  year: number;
  citationKey: string; // e.g. "Avgerinos et al., 2018"
  title: string;
  finding: string;
  effectDirection: EffectDirection;
  sampleN: string;
  quote: string;
  doi?: string;
  journal?: string;
}

export interface ResearchSession {
  id: string;
  query: string;
  tags: string[];
  pico: PICOData;
  contradiction?: ContradictionCard;
  papers: Paper[];
  canvasTitle: string;
  canvasSynthesis: string;
  canvasMechanism: string;
  canvasInconsistencies?: string;
  savedAt: string;
}

export type NavTab = 'dashboard' | 'sources' | 'canvas' | 'archive';
