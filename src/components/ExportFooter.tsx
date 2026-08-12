import React, { useState } from 'react';
import { Paper } from '../types';

interface ExportFooterProps {
  canvasTitle: string;
  canvasSynthesis: string;
  canvasMechanism: string;
  canvasInconsistencies?: string;
  papers: Paper[];
}

export const ExportFooter: React.FC<ExportFooterProps> = ({
  canvasTitle,
  canvasSynthesis,
  canvasMechanism,
  canvasInconsistencies,
  papers,
}) => {
  const [showBibtexModal, setShowBibtexModal] = useState(false);
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  const generateBibtex = () => {
    return papers
      .map((p) => {
        const key = p.authors.split(' ')[0].toLowerCase() + p.year;
        return `@article{${key},
  author = {${p.authors}},
  title = {${p.title}},
  journal = {${p.journal || 'Academic Journal'}},
  year = {${p.year}},
  doi = {${p.doi || '10.1000/182'}}
}`;
      })
      .join('\n\n');
  };

  const handleDownloadBibtex = () => {
    const bibtexStr = generateBibtex();
    const blob = new Blob([bibtexStr], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'citations.bib';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadDraft = () => {
    const draftMarkdown = `# ${canvasTitle}

## Executive Synthesis
${canvasSynthesis}

## Mechanism & Efficacy
${canvasMechanism}

${canvasInconsistencies ? `## Inconsistencies & Draft Notes\n${canvasInconsistencies}\n` : ''}
## References & Synthesized Evidence
${papers
  .map(
    (p) =>
      `- **${p.citationKey}**: ${p.title}. *${p.journal || 'Journal'}*, ${p.year}. DOI: ${p.doi || 'N/A'}`
  )
  .join('\n')}
`;

    const blob = new Blob([draftMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${canvasTitle.toLowerCase().replace(/[^a-z0-9]/g, '_')}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyBibtexText = () => {
    navigator.clipboard.writeText(generateBibtex());
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  return (
    <>
      <div className="p-3 sm:p-4 border-t border-[#D2D2D7] bg-[#f9f9fb] flex justify-end items-center gap-2 z-10 shrink-0">
        <button
          onClick={() => setShowBibtexModal(true)}
          className="px-3 py-1.5 bg-[#f3f3f5] text-[#030304] rounded border border-[#D2D2D7] text-xs font-medium hover:bg-[#e2e2e4] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">format_quote</span>
          Download BibTeX
        </button>

        <button
          onClick={handleDownloadDraft}
          className="px-3 py-1.5 bg-[#030304] text-white rounded text-xs font-medium hover:bg-[#1c1d21] transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">download</span>
          Download Draft
        </button>
      </div>

      {/* BibTeX Modal */}
      {showBibtexModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-lg border border-[#D2D2D7] max-w-xl w-full p-5 shadow-xl flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-[#D2D2D7] pb-3">
              <h3 className="font-semibold text-lg text-[#030304] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#005cba]">format_quote</span>
                BibTeX Citations
              </h3>
              <button
                onClick={() => setShowBibtexModal(false)}
                className="text-[#46464a] hover:text-[#030304] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <textarea
              readOnly
              value={generateBibtex()}
              rows={10}
              className="w-full font-mono text-xs p-3 bg-[#f3f3f5] border border-[#D2D2D7] rounded text-[#030304] focus:outline-none"
            />

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={handleCopyBibtexText}
                className="px-3 py-1.5 text-xs text-[#005cba] border border-[#005cba] rounded hover:bg-[#005cba]/10 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copiedBibtex ? 'check' : 'content_copy'}
                </span>
                {copiedBibtex ? 'Copied to Clipboard' : 'Copy BibTeX'}
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => setShowBibtexModal(false)}
                  className="px-3 py-1.5 text-xs text-[#46464a] hover:bg-[#f3f3f5] rounded cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={handleDownloadBibtex}
                  className="px-3 py-1.5 text-xs bg-[#030304] text-white rounded hover:bg-[#1c1d21] flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  Save .bib File
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
