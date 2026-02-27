import React, { useState, useEffect } from 'react';
import { ShieldAlert, Snowflake, Play } from 'lucide-react';

const ActionCenter = () => {
  const [holdProgress, setHoldProgress] = useState(0);
  const [isFrozen, setIsFrozen] = useState(false);
  const [isHolding, setIsHolding] = useState(false);

  // Logic for the "Hold to Confirm" friction
  useEffect(() => {
    let interval;
    if (isHolding && holdProgress < 100) {
      interval = setInterval(() => setHoldProgress(prev => prev + 5), 50);
    } else if (holdProgress >= 100) {
      setIsFrozen(true);
      setHoldProgress(0);
    } else {
      setHoldProgress(0);
    }
    return () => clearInterval(interval);
  }, [isHolding, holdProgress]);

  return (
    <div className={`p-6 rounded-2xl border-2 transition-all duration-500 ${isFrozen ? 'bg-slate-100 border-slate-300' : 'bg-white border-red-100'}`}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-lg text-slate-800">Security Command</h3>
          <p className="text-sm text-slate-500 font-mono">ID: ACCT-9928-X</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${isFrozen ? 'bg-slate-800 text-white' : 'bg-green-100 text-green-700'}`}>
          {isFrozen ? 'Locked' : 'Active'}
        </span>
      </div>

      <div className="flex gap-4">
        {/* THE FREEZE BUTTON */}
        {!isFrozen ? (
          <button
            onMouseDown={() => setIsHolding(true)}
            onMouseUp={() => setIsHolding(false)}
            onMouseLeave={() => setIsHolding(false)}
            className="relative overflow-hidden group bg-red-600 text-white px-6 py-3 rounded-xl font-bold flex-1 transition-transform active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Snowflake className="w-5 h-5" /> Hold to Freeze
            </span>
            {/* Progress Bar Overlay */}
            <div 
              className="absolute left-0 top-0 h-full bg-red-800 transition-all duration-100" 
              style={{ width: `${holdProgress}%` }}
            />
          </button>
        ) : (
          <button 
            onClick={() => setIsFrozen(false)}
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold flex-1 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" /> Reactivate Account
          </button>
        )}

        <button className="border-2 border-slate-200 text-slate-600 px-6 py-3 rounded-xl font-bold hover:bg-slate-50">
          Logs
        </button>
      </div>
    </div>
  );
};
export default ActionCenter


