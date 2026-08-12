import React from 'react';
import { ContradictionCard } from '../types';

interface ContradictionRadarProps {
  contradiction: ContradictionCard;
}

export const ContradictionRadar: React.FC<ContradictionRadarProps> = ({
  contradiction
}) => {
  return (
    <div className="bg-[#ffffff] border border-[#C62828]/30 rounded-lg p-4 relative overflow-hidden shadow-sm">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#C62828]/80"></div>
      
      <div className="flex items-center gap-2 mb-3">
        <span className="material-symbols-outlined text-[#C62828] text-[18px]">
          warning
        </span>
        <span className="text-xs font-semibold text-[#C62828]">
          Contradiction Detected
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-3">
        <div className="p-3 bg-[#f3f3f5] rounded border border-[#D2D2D7]">
          <span className="text-[11px] text-[#46464a] block mb-1 font-medium">
            {contradiction.paperA.authorYear}
          </span>
          <p className="text-[#030304] text-xs sm:text-sm">
            {contradiction.paperA.finding}
          </p>
        </div>

        <div className="p-3 bg-[#f3f3f5] rounded border border-[#D2D2D7]">
          <span className="text-[11px] text-[#46464a] block mb-1 font-medium">
            {contradiction.paperB.authorYear}
          </span>
          <p className="text-[#030304] text-xs sm:text-sm">
            {contradiction.paperB.finding}
          </p>
        </div>
      </div>

      <div className="p-2.5 bg-[#ffdad6]/20 rounded border border-[#ffdad6]">
        <span className="text-[11px] text-[#46464a] uppercase font-semibold block mb-0.5">
          Why they disagree
        </span>
        <p className="text-xs text-[#46464a] leading-relaxed">
          {contradiction.whyTheyDisagree}
        </p>
      </div>
    </div>
  );
};
