import React, { useState } from 'react';
import { NEWS_ARTICLES, STANDARDS_REFERENCE } from '../data/ibstacData';
import { NewsArticle } from '../types';
import { FileText, Calendar, User, ArrowRight, ShieldCheck, Download, Globe2, BookOpen, X } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <section className="bg-slate-50 text-slate-900 py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xs">
            Official Notices & Global Alignment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            IBSTAC News & Policy Publications
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Stay informed on council resolutions, ISO/IEC 17011 policy updates, and progress toward ILAC & IAF mutual recognition.
          </p>
        </div>

        {/* News & Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((art) => (
            <div
              key={art.id}
              className="bg-white border border-slate-200 rounded-sm p-6 space-y-4 shadow-xs flex flex-col justify-between hover:border-blue-500 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm">
                    {art.category}
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3 text-blue-600" />
                    {art.date}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-lg leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 truncate max-w-[150px] font-medium">
                  {art.author}
                </span>

                <button
                  onClick={() => setSelectedArticle(art)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider flex items-center gap-1"
                >
                  Read Policy Circular
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Standards Directory Reference Box */}
        <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h3 className="font-extrabold text-xl text-slate-900">
              Primary ISO/IEC Standard References
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {STANDARDS_REFERENCE.map((std, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-sm border border-slate-200 space-y-2">
                <span className="bg-blue-50 text-blue-700 font-mono text-[10px] font-bold px-2 py-0.5 rounded-sm border border-blue-100 inline-block uppercase tracking-wider">
                  {std.code}
                </span>
                <strong className="text-slate-900 font-extrabold block text-xs">
                  {std.title}
                </strong>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {std.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Article Full Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-sm max-w-2xl w-full shadow-2xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 p-1 rounded-sm bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 pr-8 border-b border-slate-200 pb-4">
                <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm">
                  {selectedArticle.category}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 pt-1">
                  {selectedArticle.title}
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-2 font-medium">
                  <span>{selectedArticle.date}</span> • <span>{selectedArticle.author}</span>
                </p>
              </div>

              <div className="text-slate-800 text-xs leading-relaxed space-y-4 font-sans whitespace-pre-line bg-slate-50 p-6 rounded-sm border border-slate-200">
                {selectedArticle.content}
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => {
                    alert(`Downloading Official IBSTAC Policy Circular PDF...`);
                  }}
                  className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1.5 uppercase tracking-wider"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  Download Official Circular PDF
                </button>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm"
                >
                  Close Document
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
