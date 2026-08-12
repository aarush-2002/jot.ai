import React, { useState } from 'react';
import { Paper } from '../types';

interface SourcesViewProps {
  papers: Paper[];
  onAddToCanvas: (paper: Paper) => void;
}

export const SourcesView: React.FC<SourcesViewProps> = ({ papers, onAddToCanvas }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('ALL');

  const filteredPapers = papers.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.finding.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier =
      selectedTier === 'ALL' || p.tier.includes(selectedTier);
    return matchesSearch && matchesTier;
  });

  return (
    <div className="p-6 max-w-[1400px] mx-auto w-full flex flex-col gap-6 overflow-y-auto hide-scrollbar h-full">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#ffffff] p-5 border border-[#D2D2D7] rounded-lg shadow-2xs">
        <div>
          <h2 className="text-xl font-bold text-[#030304]">Sources & Bibliography</h2>
          <p className="text-xs text-[#46464a]">
            Systematic evidence index ({filteredPapers.length} papers)
          </p>
        </div>

        <div className="flex flex-wrap gap-2 items-center w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <span className="material-symbols-outlined absolute left-2.5 top-2 text-[#46464a] text-[18px]">
              search
            </span>
            <input
              type="text"
              placeholder="Search paper titles, authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-[#f9f9fb] border border-[#D2D2D7] rounded text-xs focus:outline-none focus:border-[#005cba]"
            />
          </div>

          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            className="px-3 py-1.5 bg-[#f9f9fb] border border-[#D2D2D7] rounded text-xs text-[#030304] focus:outline-none cursor-pointer"
          >
            <option value="ALL">All Evidence Tiers</option>
            <option value="TIER 1">Tier 1 (MA / SR)</option>
            <option value="TIER 2">Tier 2 (RCT)</option>
            <option value="TIER 3">Tier 3 (Observational)</option>
          </select>
        </div>
      </div>

      {/* Papers Table / Cards List */}
      <div className="flex flex-col gap-4">
        {filteredPapers.map((paper) => (
          <div
            key={paper.id}
            className="p-5 bg-[#ffffff] border border-[#D2D2D7] rounded-lg hover:border-[#c7c6ca] transition-all flex flex-col gap-3 shadow-2xs"
          >
            <div className="flex justify-between items-start gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 bg-[#edeef0] border border-[#D2D2D7] rounded text-[11px] font-semibold text-[#1a1c1d]">
                  {paper.tier}
                </span>
                <span className="text-xs font-semibold text-[#030304]">
                  {paper.authors}
                </span>
                <span className="text-xs text-[#46464a]">• {paper.year}</span>
                {paper.journal && (
                  <span className="text-xs italic text-[#46464a]">• {paper.journal}</span>
                )}
              </div>

              <button
                onClick={() => onAddToCanvas(paper)}
                className="px-3 py-1 bg-[#f3f3f5] hover:bg-[#005cba] hover:text-white border border-[#D2D2D7] hover:border-[#005cba] text-xs font-medium rounded transition-colors flex items-center gap-1 cursor-pointer shrink-0"
              >
                <span className="material-symbols-outlined text-[14px]">add</span>
                Add to Canvas
              </button>
            </div>

            <h3 className="font-semibold text-base text-[#030304]">
              {paper.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#46464a] leading-relaxed">
              <strong className="text-[#030304]">Core Finding:</strong> {paper.finding}
            </p>

            <div className="p-2.5 bg-[#f9f9fb] border-l-2 border-[#D2D2D7] text-xs italic text-[#46464a] rounded-r">
              {paper.quote}
            </div>

            <div className="flex justify-between items-center text-[11px] text-[#46464a] pt-1">
              <span>Sample: {paper.sampleN}</span>
              {paper.doi && (
                <a
                  href={`https://doi.org/${paper.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#005cba] hover:underline flex items-center gap-0.5"
                >
                  DOI: {paper.doi}
                  <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                </a>
              )}
            </div>
          </div>
        ))}

        {filteredPapers.length === 0 && (
          <div className="p-8 text-center bg-[#ffffff] border border-[#D2D2D7] rounded-lg text-sm text-[#46464a]">
            No sources match your current filter query.
          </div>
        )}
      </div>
    </div>
  );
};
