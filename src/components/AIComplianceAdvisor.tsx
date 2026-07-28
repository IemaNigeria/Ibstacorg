import React, { useState } from 'react';
import { HelpCircle, Send, Sparkles, ShieldCheck, BookOpen, RefreshCw, Bot, User, CheckCircle2 } from 'lucide-react';

export const AIComplianceAdvisor: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [scope, setScope] = useState('ISO/IEC 17011 & General Conformity');
  const [standard, setStandard] = useState('ISO/IEC 17025 / ISO/IEC 17020 / ISO/IEC 17021-1');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; source?: string }>>([
    {
      sender: 'ai',
      text: 'Greetings. I am the official IBSTAC AI Technical Advisor. How may I assist you regarding ISO/IEC 17011 accreditation requirements, ISO standards (17025, 17020, 17024, 17021-1), structural impartiality safeguards, or assessment procedures?',
      source: 'IBSTAC Regulatory Standard System'
    }
  ]);

  const handleSend = async (queryText?: string) => {
    const q = queryText || question;
    if (!q.trim()) return;

    const userMsg = q.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    if (!queryText) setQuestion('');
    setLoading(true);

    try {
      const res = await fetch('/api/compliance-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: userMsg,
          scope,
          standard
        })
      });

      const data = await res.json();
      if (res.ok && data.answer) {
        setMessages(prev => [...prev, { sender: 'ai', text: data.answer, source: data.source }]);
      } else {
        setMessages(prev => [...prev, {
          sender: 'ai',
          text: 'IBSTAC Technical Note: IBSTAC accredits Conformity Assessment Bodies strictly under ISO/IEC 17011 principles. Please verify your standard reference or submit an inquiry directly to the Secretariat.',
          source: 'IBSTAC Fallback Advisor'
        }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, {
        sender: 'ai',
        text: 'Unable to connect to the IBSTAC AI Compliance Advisor service at this moment. Please try again shortly or contact the Secretariat.',
        source: 'IBSTAC Network Gateway'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const sampleQuestions = [
    "What are the core prerequisites for a testing lab applying for ISO/IEC 17025 accreditation?",
    "How does IBSTAC enforce impartiality under ISO/IEC 17011 Clause 4.4?",
    "What is the difference between Type A, Type B, and Type C inspection bodies under ISO/IEC 17020?",
    "How are measurement uncertainty budgets evaluated during on-site assessments?"
  ];

  return (
    <section className="bg-white text-slate-900 py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> AI Technical Compliance Assistant
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            IBSTAC Standards & Scope Advisor
          </h2>
          <p className="text-slate-600 text-sm font-normal">
            Powered by Gemini 3.6 Flash • Trained on ISO/IEC 17011, ISO/IEC 17025, 17020, 17024, and 17021-1 regulatory benchmarks.
          </p>
        </div>

        {/* Chat Interface Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-sm shadow-xs overflow-hidden flex flex-col h-[580px]">
          
          {/* Chat Header Controls */}
          <div className="bg-white px-6 py-3 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-blue-600" />
              <strong className="text-slate-900 font-extrabold uppercase tracking-wider text-[11px]">IBSTAC Technical Advisory Assistant</strong>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                className="bg-slate-50 border border-slate-300 text-slate-900 rounded-sm px-2 py-1 text-[11px] font-medium"
              >
                <option value="ISO/IEC 17011 & General Conformity">General Accreditation</option>
                <option value="Testing & Calibration (17025)">Testing & Calibration (17025)</option>
                <option value="Inspection Bodies (17020)">Inspection Bodies (17020)</option>
                <option value="Management Systems (17021-1)">Management Systems (17021-1)</option>
                <option value="Personnel Certification (17024)">Personnel Schemes (17024)</option>
              </select>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.sender === 'user' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-200 text-blue-600 border border-slate-300'
                }`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className={`p-4 rounded-sm text-xs space-y-1.5 leading-relaxed shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white font-medium'
                    : 'bg-white border border-slate-200 text-slate-800 font-normal'
                }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>
                  {msg.source && (
                    <span className={`text-[10px] block pt-1 border-t font-mono ${
                      msg.sender === 'user' ? 'text-blue-100 border-blue-500' : 'text-slate-400 border-slate-100'
                    }`}>
                      Source: {msg.source}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-slate-500 text-xs italic bg-white p-3 rounded-sm border border-slate-200 w-fit">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-600" />
                Retrieving ISO standard guidance...
              </div>
            )}
          </div>

          {/* Preset Prompts & Input Area */}
          <div className="p-4 bg-white border-t border-slate-200 space-y-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] text-slate-500">
              <span className="shrink-0 font-bold uppercase tracking-wider text-[10px] text-slate-700">Suggested Queries:</span>
              {sampleQuestions.slice(0, 2).map((sq, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(sq)}
                  className="bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-sm text-slate-700 truncate max-w-[220px] shrink-0 font-medium"
                >
                  {sq}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask about ISO standards, audit prep, or IBSTAC guidelines..."
                className="flex-1 bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs rounded-sm px-4 py-3 focus:outline-none focus:border-blue-600"
              />

              <button
                type="submit"
                disabled={loading || !question.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-sm shadow-xs transition-colors flex items-center gap-1.5 disabled:opacity-50"
              >
                <span>Ask Advisor</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
