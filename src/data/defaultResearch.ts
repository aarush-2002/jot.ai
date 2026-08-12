import { ResearchSession } from '../types';

export const DEFAULT_RESEARCH: ResearchSession = {
  id: 'creatine-sleep-01',
  query: 'Impact of creatine supplementation on cognitive performance in sleep deprivation',
  tags: ['MEDICAL', 'COGNITION'],
  pico: {
    population: 'Adults (18-65)',
    intervention: 'Creatine (Monohydrate)',
    comparator: 'Placebo',
    outcome: 'Cognitive Performance'
  },
  contradiction: {
    paperA: {
      authorYear: 'McMorris et al. (2006)',
      finding: 'Reports significant improvement in central executive tasks during sleep deprivation.'
    },
    paperB: {
      authorYear: 'Turner et al. (2015)',
      finding: 'Found no significant deviation in working memory vs placebo over 24h.'
    },
    whyTheyDisagree: 'Divergence likely stems from dosage protocol (loading phase vs acute) and specific task sensitivity (executive function vs simple recall).'
  },
  papers: [
    {
      id: 'paper-1',
      tier: 'TIER 1 · MA',
      authors: 'Avgerinos et al.',
      year: 2018,
      citationKey: 'Avgerinos et al., 2018',
      title: 'Effects of creatine supplementation on cognitive function of healthy individuals: A systematic review of randomized controlled trials',
      finding: 'Creatine supplementation significantly improved cognitive performance, particularly in contexts of sleep deprivation or mental fatigue.',
      effectDirection: 'POSITIVE',
      sampleN: 'n=281 adults (6 studies)',
      quote: '"The results indicate that creatine supplementation may improve cognitive processing, especially in conditions characterized by brain creatine deficits."',
      doi: '10.1016/j.expneurol.2018.04.004',
      journal: 'Experimental Neurology'
    },
    {
      id: 'paper-2',
      tier: 'TIER 2 · RCT',
      authors: 'McMorris et al.',
      year: 2006,
      citationKey: 'McMorris et al., 2006',
      title: 'Creatine supplementation, sleep deprivation, cortisol, melatonin and behavior',
      finding: 'Following 24h sleep deprivation, creatine group showed significantly less degradation in central executive tasks compared to placebo.',
      effectDirection: 'POSITIVE',
      sampleN: 'n=19 healthy adults',
      quote: '"Supplementation had a significant positive effect on mood state and tasks that place a heavy stress on the prefrontal cortex."',
      doi: '10.1016/j.physbeh.2005.10.014',
      journal: 'Physiology & Behavior'
    },
    {
      id: 'paper-3',
      tier: 'TIER 2 · RCT',
      authors: 'Turner et al.',
      year: 2015,
      citationKey: 'Turner et al., 2015',
      title: 'Effect of acute creatine monohydrate supplementation on cognitive performance during sleep deprivation',
      finding: 'Acute creatine administration did not demonstrate statistically significant improvements in spatial recall after 24h extended wakefulness.',
      effectDirection: 'NEUTRAL',
      sampleN: 'n=24 healthy subjects',
      quote: '"Short-term non-dosed administration provided inconsistent energy buffer effects during simple recall routines."',
      doi: '10.1007/s00213-014-3810-7',
      journal: 'Psychopharmacology'
    }
  ],
  canvasTitle: 'Synthesis: Creatine & Sleep Deprivation',
  canvasSynthesis: 'The current body of evidence suggests that creatine monohydrate supplementation provides a neuroprotective effect during acute sleep deprivation, specifically preserving cognitive functions associated with the prefrontal cortex.',
  canvasMechanism: 'During periods of sleep deprivation, brain creatine levels typically deplete. Supplementation appears to buffer this depletion. As noted in a systematic review of six studies ([Avgerinos et al., 2018]), there is a significant improvement in cognitive processing under conditions of mental fatigue.\n\nSpecifically examining 24-hour sleep deprivation, one notable RCT ([McMorris et al., 2006]) demonstrated that subjects receiving creatine showed less degradation in central executive tasks compared to the placebo group.',
  canvasInconsistencies: 'Draft Note: Need to reconcile Turner (2015) findings which showed no significant deviation vs placebo. Is it a dosage issue? Need more papers on loading protocols.',
  savedAt: '2026-08-12 10:45'
};

export const PRESET_RESEARCH_TOPICS = [
  DEFAULT_RESEARCH,
  {
    id: 'glp1-parkinsons-02',
    query: 'GLP-1 receptor agonists and neuroprotective mechanisms in neurodegenerative disorders',
    tags: ['NEUROLOGY', 'PHARMACOLOGY'],
    pico: {
      population: 'Adults with Early Parkinsonism',
      intervention: 'Exenatide / Lixisenatide',
      comparator: 'Standard Care Placebo',
      outcome: 'MDS-UPDRS Part III Motor Scale'
    },
    contradiction: {
      paperA: {
        authorYear: 'Athauda et al. (2017)',
        finding: 'Demonstrated sustained off-medication motor improvements over 48 weeks.'
      },
      paperB: {
        authorYear: 'Viallet et al. (2021)',
        finding: 'Found limited disease-modifying trajectory in advanced stage cohorts.'
      },
      whyTheyDisagree: 'Efficacy is highly stage-dependent; early intervention shows microglial modulation whereas late-stage receptor down-regulation reduces drug binding.'
    },
    papers: [
      {
        id: 'paper-p1',
        tier: 'TIER 1 · MA',
        authors: 'Mulvaney et al.',
        year: 2023,
        citationKey: 'Mulvaney et al., 2023',
        title: 'GLP-1 Receptor Agonism in Neurodegenerative Disease: A Meta-Analysis of Clinical Outcomes',
        finding: 'Pooled analysis across 12 RCTs revealed significant attenuation of motor degradation and biomarkers of neuroinflammation.',
        effectDirection: 'POSITIVE',
        sampleN: 'n=840 total subjects',
        quote: '"GLP-1 pathway activation consistently protected dopaminergic neuronal integrity across preclinical and early clinical paradigms."',
        doi: '10.1038/s41582-023-00812-1',
        journal: 'Nature Reviews Neurology'
      },
      {
        id: 'paper-p2',
        tier: 'TIER 2 · RCT',
        authors: 'Athauda et al.',
        year: 2017,
        citationKey: 'Athauda et al., 2017',
        title: 'Exenatide once weekly versus placebo in Parkinson\'s disease: a randomised, double-blind, placebo-controlled trial',
        finding: 'Exenatide group had a 3.5 point score advantage on motor scale at 48 weeks compared to progressive decline in placebo group.',
        effectDirection: 'POSITIVE',
        sampleN: 'n=62 patients',
        quote: '"The persistence of advantage after a 12-week washout suggests a potential disease-modifying mechanism rather than symptomatic relief."',
        doi: '10.1016/S0140-6736(17)31585-4',
        journal: 'The Lancet'
      }
    ],
    canvasTitle: 'Synthesis: GLP-1 Agonism in Neuroprotection',
    canvasSynthesis: 'Recent systemic reviews and randomized trials support GLP-1 receptor agonists as promising neuroprotective agents in early-stage neurodegeneration.',
    canvasMechanism: 'Targeting metabolic pathways in neuroglia attenuates mitochondrial oxidative stress and neuroinflammation ([Mulvaney et al., 2023]). Clinical trials with exenatide demonstrate motor benefit ([Athauda et al., 2017]).',
    canvasInconsistencies: 'Draft Note: Stage dependency remains the primary threshold variable. Further stratification needed for disease duration > 5 years.',
    savedAt: '2026-08-11 16:20'
  },
  {
    id: 'fasting-metabolic-03',
    query: 'Time-restricted eating vs continuous calorie restriction on insulin sensitivity and lipid profiles',
    tags: ['ENDOCRINOLOGY', 'NUTRITION'],
    pico: {
      population: 'Adults with Metabolic Syndrome',
      intervention: '16:8 Time-Restricted Feeding',
      comparator: '25% Energy Restriction',
      outcome: 'HOMA-IR & Fasting Insulin'
    },
    papers: [
      {
        id: 'paper-f1',
        tier: 'TIER 1 · SR',
        authors: 'Sutton et al.',
        year: 2018,
        citationKey: 'Sutton et al., 2018',
        title: 'Early time-restricted feeding improves insulin sensitivity, blood pressure, and oxidative stress even without weight loss',
        finding: 'Early TRE significantly reduced peak glucose excursion and fasting insulin without requiring body weight reduction.',
        effectDirection: 'POSITIVE',
        sampleN: 'n=45 prediabetic men',
        quote: '"Aligning nutrient intake with circadian rhythm enhanced beta-cell responsiveness independently of caloric deficit."',
        doi: '10.1016/j.cmet.2018.04.010',
        journal: 'Cell Metabolism'
      }
    ],
    canvasTitle: 'Synthesis: Time-Restricted Eating & Insulin Dynamics',
    canvasSynthesis: 'Time-restricted feeding regimens offer metabolic benefits through circadian alignment of nutrient absorption.',
    canvasMechanism: 'Early window alignment improves insulin sensitivity and pancreatic beta-cell kinetics independently of overall caloric restriction ([Sutton et al., 2018]).',
    savedAt: '2026-08-10 14:10'
  }
];
