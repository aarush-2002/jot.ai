import React from 'react';
import { ResearchSession } from '../types';
import { PRESET_RESEARCH_TOPICS } from '../data/defaultResearch';

interface DashboardViewProps {
  currentSession: ResearchSession;
  allSessions: ResearchSession[];
  onSelectSession: (session: ResearchSession) => void;
  onNewTopic: (query: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  currentSession,
  allSessions,
  onSelectSession,
  onNewTopic,
}) => {
  return (
    <div className="p-6 max-w-[1400px] mx-auto w-full flex flex-col gap-6 overflow-y-auto hide-scrollbar h-full">
      {/* Welcome Banner */}
      <div className="bg-[#ffffff] border border-[#D2D2D7] rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-2xs">
        <div>
          <h2 className="text-xl font-bold text-[#030304] mb-1">
            Academic Research Dashboard
          </h2>
          <p className="text-xs sm:text-sm text-[#46464a]">
            Active Session: <span className="font-semibold text-[#030304]">{currentSession.query}</span>
          </p>
        </div>
        <button
          onClick={() => onNewTopic('Intermittent fasting vs calorie restriction on insulin sensitivity')}
          className="px-4 py-2 bg-[#005cba] text-white rounded text-xs font-medium hover:bg-[#00458e] transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer shrink-0"
        >
          <span className="material-symbols-outlined text-[16px]">add</span>
          New Research Query
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-[#ffffff] border border-[#D2D2D7] rounded-lg flex flex-col gap-1 shadow-2xs">
          <span className="text-[11px] text-[#46464a] uppercase font-medium">Papers Synthesized</span>
          <div className="text-2xl font-bold text-[#030304]">
            {allSessions.reduce((acc, s) => acc + s.papers.length, 0)}
          </div>
          <span className="text-[11px] text-[#2E7D32] flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">trending_up</span> Systematic meta-reviews
          </span>
        </div>

        <div className="p-4 bg-[#ffffff] border border-[#D2D2D7] rounded-lg flex flex-col gap-1 shadow-2xs">
          <span className="text-[11px] text-[#46464a] uppercase font-medium">Contradictions Flagged</span>
          <div className="text-2xl font-bold text-[#C62828]">
            {allSessions.filter((s) => s.contradiction).length}
          </div>
          <span className="text-[11px] text-[#46464a]">Methodology divergence radar</span>
        </div>

        <div className="p-4 bg-[#ffffff] border border-[#D2D2D7] rounded-lg flex flex-col gap-1 shadow-2xs">
          <span className="text-[11px] text-[#46464a] uppercase font-medium">PICO Parameter Profiles</span>
          <div className="text-2xl font-bold text-[#005cba]">
            {allSessions.length} Active
          </div>
          <span className="text-[11px] text-[#2E7D32]">100% RCT verification</span>
        </div>

        <div className="p-4 bg-[#ffffff] border border-[#D2D2D7] rounded-lg flex flex-col gap-1 shadow-2xs">
          <span className="text-[11px] text-[#46464a] uppercase font-medium">Draft Citations</span>
          <div className="text-2xl font-bold text-[#030304]">
            {currentSession.papers.length} Linked
          </div>
          <span className="text-[11px] text-[#46464a]">BibTeX & RIS sync active</span>
        </div>
      </div>

      {/* Preset Topics & Active Sessions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Curated Academic Presets */}
        <div className="lg:col-span-2 bg-[#ffffff] border border-[#D2D2D7] rounded-lg p-5 flex flex-col gap-4 shadow-2xs">
          <h3 className="font-semibold text-base text-[#030304] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#005cba]">science</span>
            Curated Academic Topics
          </h3>

          <div className="flex flex-col gap-3">
            {PRESET_RESEARCH_TOPICS.map((preset) => (
              <div
                key={preset.id}
                onClick={() => onSelectSession(preset)}
                className="p-4 bg-[#f9f9fb] border border-[#D2D2D7] hover:border-[#005cba] rounded-lg transition-all cursor-pointer group flex flex-col gap-2"
              >
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-medium text-sm text-[#030304] group-hover:text-[#005cba] transition-colors">
                    {preset.query}
                  </h4>
                  <div className="flex gap-1">
                    {preset.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-[#f3f3f5] rounded text-[10px] text-[#46464a] uppercase border border-[#D2D2D7]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-[#46464a] flex items-center gap-4">
                  <span>PICO: {preset.pico.intervention} vs {preset.pico.comparator}</span>
                  <span>•</span>
                  <span>{preset.papers.length} Papers</span>
                  {preset.contradiction && (
                    <span className="text-[#C62828] font-medium flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[12px]">warning</span>
                      Contradiction
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Research Tips & Status */}
        <div className="bg-[#ffffff] border border-[#D2D2D7] rounded-lg p-5 flex flex-col gap-4 shadow-2xs">
          <h3 className="font-semibold text-base text-[#030304] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#2E7D32]">psychology</span>
            Workflow Status
          </h3>

          <div className="flex flex-col gap-3 text-xs text-[#46464a]">
            <div className="p-3 bg-[#f3f3f5] rounded border border-[#D2D2D7] flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#005cba]">info</span>
              <div>
                <span className="font-semibold text-[#030304] block mb-0.5">PICO Extraction Engine</span>
                Automatically breaks research queries down into Population, Intervention, Comparator, and Outcome metrics.
              </div>
            </div>

            <div className="p-3 bg-[#f3f3f5] rounded border border-[#D2D2D7] flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#C62828]">compare</span>
              <div>
                <span className="font-semibold text-[#030304] block mb-0.5">Contradiction Radar</span>
                Detects conflicting statistical outcomes between trials and highlights dosage or methodology variances.
              </div>
            </div>

            <div className="p-3 bg-[#f3f3f5] rounded border border-[#D2D2D7] flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#2E7D32]">edit_note</span>
              <div>
                <span className="font-semibold text-[#030304] block mb-0.5">Interactive Jot Canvas</span>
                Draft research notes with inline citation badges `[Author et al., Year]` that link directly to paper cards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
