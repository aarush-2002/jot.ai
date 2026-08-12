import React from 'react';
import { PICOData } from '../types';

interface PICOBarProps {
  pico: PICOData;
}

export const PICOBar: React.FC<PICOBarProps> = ({ pico }) => {
  return (
    <div className="px-6 py-3 bg-[#f3f3f5] border-b border-[#D2D2D7] flex gap-6 items-center z-10 overflow-x-auto hide-scrollbar">
      <div className="flex flex-col shrink-0">
        <span className="text-[11px] font-normal text-[#46464a] uppercase tracking-wider">
          Population
        </span>
        <span className="text-sm font-medium text-[#030304]">
          {pico.population}
        </span>
      </div>

      <div className="w-px h-6 bg-[#D2D2D7] shrink-0"></div>

      <div className="flex flex-col shrink-0">
        <span className="text-[11px] font-normal text-[#46464a] uppercase tracking-wider">
          Intervention
        </span>
        <span className="text-sm font-medium text-[#030304]">
          {pico.intervention}
        </span>
      </div>

      <div className="w-px h-6 bg-[#D2D2D7] shrink-0"></div>

      <div className="flex flex-col shrink-0">
        <span className="text-[11px] font-normal text-[#46464a] uppercase tracking-wider">
          Comparator
        </span>
        <span className="text-sm font-medium text-[#030304]">
          {pico.comparator}
        </span>
      </div>

      <div className="w-px h-6 bg-[#D2D2D7] shrink-0"></div>

      <div className="flex flex-col shrink-0">
        <span className="text-[11px] font-normal text-[#46464a] uppercase tracking-wider">
          Outcome
        </span>
        <span className="text-sm font-medium text-[#030304]">
          {pico.outcome}
        </span>
      </div>
    </div>
  );
};
