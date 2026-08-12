import React from 'react';
import { ResearchSession } from '../types';

interface ArchiveViewProps {
  sessions: ResearchSession[];
  onLoadSession: (session: ResearchSession) => void;
  onDeleteSession: (sessionId: string) => void;
}

export const ArchiveView: React.FC<ArchiveViewProps> = ({
  sessions,
  onLoadSession,
  onDeleteSession,
}) => {
  return (
    <div className="p-6 max-w-[1400px] mx-auto w-full flex flex-col gap-6 overflow-y-auto hide-scrollbar h-full">
      <div className="flex justify-between items-center bg-[#ffffff] p-5 border border-[#D2D2D7] rounded-lg shadow-2xs">
        <div>
          <h2 className="text-xl font-bold text-[#030304]">Research Session Archive</h2>
          <p className="text-xs text-[#46464a]">
            {sessions.length} saved sessions in session storage
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="p-5 bg-[#ffffff] border border-[#D2D2D7] rounded-lg hover:border-[#005cba] transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-2xs"
          >
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] text-[#46464a] font-mono">
                  {session.savedAt}
                </span>
                {session.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-[#edeef0] border border-[#D2D2D7] rounded text-[10px] text-[#46464a] uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="font-semibold text-base text-[#030304]">
                {session.query}
              </h3>

              <p className="text-xs text-[#46464a] line-clamp-2">
                {session.canvasSynthesis}
              </p>

              <div className="text-[11px] text-[#005cba] font-medium flex items-center gap-3 pt-1">
                <span>{session.papers.length} Papers</span>
                <span>•</span>
                <span>PICO: {session.pico.intervention}</span>
                {session.contradiction && (
                  <>
                    <span>•</span>
                    <span className="text-[#C62828]">Contradiction Radar Alert</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onLoadSession(session)}
                className="px-3 py-1.5 bg-[#030304] text-white rounded text-xs font-medium hover:bg-[#1c1d21] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">folder_open</span>
                Open Workspace
              </button>

              <button
                onClick={() => onDeleteSession(session.id)}
                className="p-1.5 text-[#46464a] hover:text-[#C62828] hover:bg-[#ffdad6]/20 rounded transition-colors cursor-pointer"
                title="Delete Session"
              >
                <span className="material-symbols-outlined text-[18px]">delete</span>
              </button>
            </div>
          </div>
        ))}

        {sessions.length === 0 && (
          <div className="p-8 text-center bg-[#ffffff] border border-[#D2D2D7] rounded-lg text-sm text-[#46464a]">
            No archived sessions found. Run a research query on Canvas to save sessions automatically!
          </div>
        )}
      </div>
    </div>
  );
};
