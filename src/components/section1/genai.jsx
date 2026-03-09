import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';

const Copilot = () => {
  return (
    <div className="h-full w-1/5 flex flex-col font-sans">
      {/* Header */}
      <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-xs font-bold tracking-widest uppercase">Copilot</span>
        </div>
        <span className="text-[10px] opacity-50">v1.0.4 - ONLINE</span>
      </div>

      {/* Content Area */}
      <div className="p-4 space-y-6 overflow-y-auto">
        <div className="space-y-2">
          <p className="text-[10px] text-blue-600 font-bold uppercase tracking-tighter">AI_MODEL_ANALYSIS</p>
          <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
            <p className="text-xs leading-relaxed text-slate-600">
              Pattern matches known <span className="font-bold text-slate-900">Money Laundering</span> typologies. Suggesting immediate intervention protocol.
            </p>
          </div>
        </div>

        {/* Suggested Protocol Section */}
        <div className="space-y-3">
          <p className="text-[10px] text-slate-400 font-bold uppercase underline">Suggested Protocol</p>
          <ul className="space-y-2">
            {['Verify IP Geolocation', 'Check Transaction Velocity', 'Draft Freeze Notice'].map((task, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                <input type="checkbox" className="rounded border-slate-300" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Input bar at bottom */}
      <div className="mt-auto p-4 border-t border-slate-200">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ask Copilot..." 
            className="w-full bg-white border border-slate-200 rounded-full py-2 px-4 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20"
          />
          <Terminal size={14} className="absolute right-3 top-2.5 text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default Copilot;