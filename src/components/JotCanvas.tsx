import React, { useState } from 'react';
import { Paper } from '../types';

interface JotCanvasProps {
  title: string;
  synthesis: string;
  mechanism: string;
  inconsistencies?: string;
  papers: Paper[];
  onTitleChange: (newTitle: string) => void;
  onSynthesisChange: (newSynthesis: string) => void;
  onMechanismChange: (newMechanism: string) => void;
  onInconsistenciesChange: (newInconsistencies: string) => void;
  onPaperCitationClick?: (citationKey: string) => void;
}

export const JotCanvas: React.FC<JotCanvasProps> = ({
  title,
  synthesis,
  mechanism,
  inconsistencies,
  papers,
  onTitleChange,
  onSynthesisChange,
  onMechanismChange,
  onInconsistenciesChange,
  onPaperCitationClick,
}) => {
  const [selectedCitation, setSelectedCitation] = useState<Paper | null>(null);

  // Helper to render inline citations dynamically
  const renderTextWithCitations = (text: string) => {
    // Regex matches [Author et al., Year]
    const citationRegex = /\[([^\]]+)\]/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = citationRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      const citationKey = match[1];
      const matchedPaper = papers.find(
        (p) =>
          p.citationKey.toLowerCase().includes(citationKey.toLowerCase()) ||
          p.authors.toLowerCase().includes(citationKey.split(' ')[0].toLowerCase())
      );

      parts.push(
        <span
          key={`cit-${match.index}`}
          onClick={() => {
            if (matchedPaper) setSelectedCitation(matchedPaper);
            if (onPaperCitationClick) onPaperCitationClick(citationKey);
          }}
          className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#edeef0] rounded text-xs border border-[#D2D2D7] cursor-pointer hover:bg-[#e2e2e4] transition-colors text-[#005cba] font-medium mx-0.5 select-none"
          title={matchedPaper ? matchedPaper.title : citationKey}
        >
          {citationKey}
        </span>
      );

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  };

  return (
    <div className="flex flex-col h-full bg-[#ffffff] relative">
      {/* Sticky Top Bar */}
      <div className="p-4 sm:p-5 border-b border-[#D2D2D7] flex justify-between items-center bg-[#ffffff] z-10 sticky top-0">
        <div>
          <h2 className="text-xl font-semibold text-[#030304]">Jot Canvas</h2>
          <p className="text-xs text-[#46464a]">Your research synthesis</p>
        </div>

        <div className="flex items-center gap-1.5 text-[#46464a]">
          <span className="material-symbols-outlined text-[16px] text-[#2E7D32]">
            cloud_done
          </span>
          <span className="text-[11px] font-medium">Saved to session</span>
        </div>
      </div>

      {/* Citation Popover Modal / Banner */}
      {selectedCitation && (
        <div className="mx-4 mt-3 p-3 bg-[#f3f3f5] border border-[#005cba]/30 rounded-lg flex justify-between items-start text-xs relative animate-fadeIn">
          <div>
            <div className="font-semibold text-[#030304] mb-1">
              {selectedCitation.authors} ({selectedCitation.year})
            </div>
            <div className="text-[#46464a] mb-1 font-medium">{selectedCitation.title}</div>
            <div className="text-[#030304] italic">"{selectedCitation.finding}"</div>
          </div>
          <button
            onClick={() => setSelectedCitation(null)}
            className="text-[#46464a] hover:text-[#030304] p-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {/* Editor Body Area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-5 sm:p-6 pb-20 bg-[#ffffff] relative">
        <div className="max-w-[720px] mx-auto w-full flex flex-col gap-5">
          {/* Document Main Heading */}
          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="text-2xl sm:text-3xl font-bold text-[#030304] border-b border-transparent hover:border-[#D2D2D7] focus:border-[#005cba] focus:outline-none transition-all py-1"
            placeholder="Synthesis Title..."
          />

          {/* Executive Synthesis */}
          <div className="flex flex-col gap-1">
            <label className="text-[11px] text-[#46464a] uppercase font-semibold">
              Executive Synthesis
            </label>
            <textarea
              value={synthesis}
              onChange={(e) => onSynthesisChange(e.target.value)}
              rows={3}
              className="w-full text-base text-[#030304] leading-relaxed p-2 rounded hover:bg-[#f9f9fb] focus:bg-[#ffffff] border border-transparent focus:border-[#005cba] focus:outline-none transition-all resize-none"
            />
          </div>

          {/* Mechanism & Efficacy Section */}
          <div className="flex flex-col gap-2 mt-2">
            <h3 className="text-lg font-semibold text-[#030304]">
              Mechanism & Efficacy
            </h3>
            
            {/* Rendered Text with Interactive Pills */}
            <div className="p-3 bg-[#f9f9fb] border border-[#D2D2D7]/50 rounded text-sm text-[#030304] leading-relaxed whitespace-pre-wrap">
              {renderTextWithCitations(mechanism)}
            </div>

            <textarea
              value={mechanism}
              onChange={(e) => onMechanismChange(e.target.value)}
              rows={5}
              placeholder="Detailed mechanism text with citations like [Author et al., Year]..."
              className="w-full text-xs sm:text-sm font-mono text-[#46464a] leading-relaxed p-2 rounded bg-[#f3f3f5] border border-[#D2D2D7] focus:border-[#005cba] focus:outline-none transition-all resize-y"
            />
          </div>

          {/* Inconsistencies & Draft Notes */}
          <div className="flex flex-col gap-2 mt-2">
            <h3 className="text-lg font-semibold text-[#030304]">Inconsistencies</h3>
            
            <div className="p-3 bg-[#f3f3f5] border-l-2 border-[#D2D2D7] rounded text-sm text-[#46464a] italic">
              <textarea
                value={inconsistencies || ''}
                onChange={(e) => onInconsistenciesChange(e.target.value)}
                rows={2}
                placeholder="Draft Note: Need to reconcile findings..."
                className="w-full bg-transparent border-none focus:outline-none text-sm text-[#46464a] italic resize-none"
              />
            </div>
          </div>

          <p className="text-sm text-[#c7c6ca] italic mt-4">
            Start typing or add more evidence...
          </p>
        </div>
      </div>
    </div>
  );
};
