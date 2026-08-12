import React from 'react';
import { NavTab } from '../types';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenSettings: () => void;
  onOpenAccount: () => void;
  systemStatus: string;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSettings,
  onOpenAccount,
  systemStatus
}) => {
  return (
    <header className="flex justify-between items-center w-full px-6 h-16 bg-[#f9f9fb] border-b border-[#D2D2D7] shrink-0 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <h1 className="font-semibold text-xl text-[#030304] tracking-tight flex items-center gap-1.5 cursor-pointer" onClick={() => setActiveTab('canvas')}>
          jot.ai
        </h1>
        <span className="w-px h-4 bg-[#D2D2D7]"></span>
        <span className="text-[11px] font-normal text-[#46464a] uppercase tracking-wider hidden sm:inline">
          AI Academic Research Assistant
        </span>
      </div>

      <div className="flex items-center gap-6">
        <nav className="flex gap-4 sm:gap-6">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`text-sm transition-colors py-1 ${
              activeTab === 'dashboard'
                ? 'text-[#030304] font-medium border-b-2 border-[#030304]'
                : 'text-[#46464a] hover:text-[#030304]'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('sources')}
            className={`text-sm transition-colors py-1 ${
              activeTab === 'sources'
                ? 'text-[#030304] font-medium border-b-2 border-[#030304]'
                : 'text-[#46464a] hover:text-[#030304]'
            }`}
          >
            Sources
          </button>
          <button
            onClick={() => setActiveTab('canvas')}
            className={`text-sm transition-colors py-1 ${
              activeTab === 'canvas'
                ? 'text-[#030304] font-medium border-b-2 border-[#030304]'
                : 'text-[#46464a] hover:text-[#030304]'
            }`}
          >
            Canvas
          </button>
          <button
            onClick={() => setActiveTab('archive')}
            className={`text-sm transition-colors py-1 ${
              activeTab === 'archive'
                ? 'text-[#030304] font-medium border-b-2 border-[#030304]'
                : 'text-[#46464a] hover:text-[#030304]'
            }`}
          >
            Archive
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-[#f3f3f5] rounded-full border border-[#D2D2D7]">
          <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse"></span>
          <span className="text-[11px] text-[#46464a] font-medium">{systemStatus}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onOpenSettings}
            title="Settings"
            className="p-1.5 text-[#46464a] hover:text-[#030304] rounded-lg hover:bg-[#edeef0] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">settings</span>
          </button>
          <button
            onClick={onOpenAccount}
            title="Account"
            className="p-1.5 text-[#46464a] hover:text-[#030304] rounded-lg hover:bg-[#edeef0] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
};
