import React, { useState } from 'react';

interface SearchBarProps {
  currentQuery: string;
  tags: string[];
  isSearching: boolean;
  onRunResearch: (query: string) => void;
  onSelectPreset?: (topicId: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  currentQuery,
  tags,
  isSearching,
  onRunResearch,
}) => {
  const [queryInput, setQueryInput] = useState(currentQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (queryInput.trim()) {
      onRunResearch(queryInput.trim());
    }
  };

  return (
    <div className="p-6 border-b border-[#D2D2D7] bg-[#f9f9fb] z-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-[#46464a]">
            search
          </span>
          <input
            type="text"
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
            placeholder="Type research topic, hypothesis, or clinical query..."
            className="w-full pl-11 pr-4 py-3 bg-[#ffffff] border border-[#D2D2D7] rounded-lg text-[15px] text-[#030304] focus:outline-none focus:border-[#005cba] focus:ring-1 focus:ring-[#005cba] transition-all"
          />
        </div>

        <div className="flex justify-between items-center flex-wrap gap-2">
          <div className="flex gap-2 items-center flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-[#edeef0] rounded text-[11px] font-medium text-[#46464a] uppercase tracking-wider border border-[#D2D2D7]"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="submit"
            disabled={isSearching || !queryInput.trim()}
            className="px-4 py-2 bg-[#030304] text-white rounded font-medium text-xs hover:bg-[#1c1d21] disabled:opacity-50 transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer ml-auto"
          >
            {isSearching ? (
              <>
                <span className="material-symbols-outlined text-[16px] animate-spin">
                  sync
                </span>
                Synthesizing...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[16px]">
                  play_arrow
                </span>
                Run Research
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
