import React, { useState } from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [citationStyle, setCitationStyle] = useState('APA 7th Edition');
  const [researchDepth, setResearchDepth] = useState('Systematic Review (Deep)');
  const [autoSave, setAutoSave] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-lg border border-[#D2D2D7] max-w-lg w-full p-6 shadow-xl flex flex-col gap-5">
        <div className="flex justify-between items-center border-b border-[#D2D2D7] pb-3">
          <h3 className="font-semibold text-lg text-[#030304] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#005cba]">settings</span>
            Workspace Preferences
          </h3>
          <button
            onClick={onClose}
            className="text-[#46464a] hover:text-[#030304] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-4 text-xs sm:text-sm">
          {/* Citation Format */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-[#030304]">Primary Citation Style</label>
            <select
              value={citationStyle}
              onChange={(e) => setCitationStyle(e.target.value)}
              className="p-2 bg-[#f3f3f5] border border-[#D2D2D7] rounded text-[#030304] focus:outline-none focus:border-[#005cba] cursor-pointer"
            >
              <option value="APA 7th Edition">APA 7th Edition (Author, Year)</option>
              <option value="Chicago 17th">Chicago 17th Author-Date</option>
              <option value="IEEE">IEEE Numerical [1]</option>
              <option value="BibTeX">BibTeX Keys [KeyYear]</option>
              <option value="Harvard">Harvard Reference Style</option>
            </select>
          </div>

          {/* Research Synthesis Engine */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-[#030304]">Synthesis Depth Level</label>
            <select
              value={researchDepth}
              onChange={(e) => setResearchDepth(e.target.value)}
              className="p-2 bg-[#f3f3f5] border border-[#D2D2D7] rounded text-[#030304] focus:outline-none focus:border-[#005cba] cursor-pointer"
            >
              <option value="Systematic Review (Deep)">Systematic Review (MA/RCT Prioritization)</option>
              <option value="Rapid Assessment">Rapid Assessment (Core Findings Only)</option>
              <option value="Exhaustive Explorer">Exhaustive Explorer (Multi-discipline)</option>
            </select>
          </div>

          {/* AI Backend Info */}
          <div className="p-3 bg-[#f9f9fb] border border-[#D2D2D7] rounded flex items-center justify-between">
            <div>
              <span className="font-semibold text-[#030304] block text-xs">AI Research Model</span>
              <span className="text-[11px] text-[#46464a]">Powered by Gemini 2.5 Server-Side Engine</span>
            </div>
            <span className="px-2 py-0.5 bg-[#2E7D32]/10 text-[#2E7D32] rounded text-[10px] font-medium border border-[#2E7D32]/30">
              Active
            </span>
          </div>

          {/* Auto Save Toggle */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <span className="font-semibold text-[#030304] block text-xs">Auto-Save Canvas Sessions</span>
              <span className="text-[11px] text-[#46464a]">Persist drafts to session storage</span>
            </div>
            <input
              type="checkbox"
              checked={autoSave}
              onChange={(e) => setAutoSave(e.target.checked)}
              className="w-4 h-4 text-[#005cba] rounded focus:ring-0 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-end pt-3 border-t border-[#D2D2D7]">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#030304] text-white rounded text-xs font-medium hover:bg-[#1c1d21] cursor-pointer"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};
