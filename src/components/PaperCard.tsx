import React, { useState } from 'react';
import { Paper } from '../types';

interface PaperCardProps {
  paper: Paper;
  onAddToCanvas: (paper: Paper) => void;
}

export const PaperCard: React.FC<PaperCardProps> = ({ paper, onAddToCanvas }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyDoi = () => {
    if (paper.doi) {
      navigator.clipboard.writeText(`https://doi.org/${paper.doi}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getEffectDirectionBadge = () => {
    switch (paper.effectDirection) {
      case 'POSITIVE':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-0.5 rounded">
            <span className="material-symbols-outlined text-[14px]">trending_up</span> POSITIVE
          </span>
        );
      case 'NEGATIVE':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#C62828] bg-[#C62828]/10 px-2 py-0.5 rounded">
            <span className="material-symbols-outlined text-[14px]">trending_down</span> NEGATIVE
          </span>
        );
      case 'NEUTRAL':
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#005cba] bg-[#005cba]/10 px-2 py-0.5 rounded">
            <span className="material-symbols-outlined text-[14px]">trending_flat</span> NEUTRAL
          </span>
        );
    }
  };

  return (
    <div className="bg-[#ffffff] border border-[#D2D2D7] rounded-lg p-4 sm:p-5 hover:border-[#c7c6ca] transition-all group shadow-2xs">
      <div className="flex justify-between items-start mb-2 gap-2">
        <div className="flex gap-2 items-center flex-wrap">
          <span className="px-2 py-0.5 bg-[#e8e8ea] rounded text-[11px] text-[#1a1c1d] border border-[#D2D2D7] font-medium">
            {paper.tier}
          </span>
          <span className="text-[11px] text-[#46464a] font-medium">
            {paper.authors}
          </span>
          <span className="text-[11px] text-[#46464a]">•</span>
          <span className="text-[11px] text-[#46464a] font-medium">
            {paper.year}
          </span>
        </div>

        <button
          onClick={() => onAddToCanvas(paper)}
          className="opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs text-[#005cba] hover:text-[#002d61] font-medium cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">add</span> Add to Canvas
        </button>
      </div>

      <h3 className="text-base font-semibold text-[#030304] mb-3 leading-snug">
        {paper.title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <span className="text-[11px] text-[#46464a] uppercase font-medium block mb-1">
            Finding
          </span>
          <p className="text-xs sm:text-sm text-[#030304]">
            {paper.finding}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <span className="text-[11px] text-[#46464a] uppercase font-medium block mb-1">
              Effect Direction
            </span>
            {getEffectDirectionBadge()}
          </div>

          <div>
            <span className="text-[11px] text-[#46464a] uppercase font-medium block mb-1">
              Sample / N
            </span>
            <span className="text-xs sm:text-sm text-[#030304]">
              {paper.sampleN}
            </span>
          </div>
        </div>
      </div>

      <blockquote className="pl-3 border-l-2 border-[#D2D2D7] text-xs sm:text-sm italic text-[#46464a] bg-[#f9f9fb] py-1.5 rounded-r">
        {paper.quote}
      </blockquote>

      {paper.doi && (
        <div className="mt-3 pt-2 border-t border-[#f3f3f5] flex justify-between items-center text-[11px] text-[#46464a]">
          <span>DOI: {paper.doi}</span>
          <button
            onClick={handleCopyDoi}
            className="hover:text-[#005cba] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            {copied ? 'Copied DOI' : 'Copy DOI'}
          </button>
        </div>
      )}
    </div>
  );
};
