import React, { useState } from 'react';
import { ShieldAlert, Snowflake } from 'lucide-react';

const FreezeButton = () => {
  const [isFrozen, setIsFrozen] = useState(false);

  const handleFreeze = () => {
    // In a real firm, this would trigger a backend API call to suspend the account
    setIsFrozen(!isFrozen);
    console.log(isFrozen ? "Account Unfrozen" : "ACCOUNT FROZEN: Alert ID KYC-042");
  };

  return (
    <button
      onClick={handleFreeze}
      className={`
        flex items-center gap-2 px-4 py-3 rounded-lg font-bold transition-all duration-200 shadow-lg
        ${isFrozen 
          ? 'bg-blue-100 text-blue-700 border border-blue-300' 
          : 'bg-red-600 hover:bg-red-700 text-white border border-red-700 active:scale-95'}
      `}
    >
      {isFrozen ? (
        <>
          <Snowflake size={18} className="animate-pulse" />
          <span>ACCOUNT FROZEN</span>
        </>
      ) : (
        <>
          <ShieldAlert size={18} />
          <span>FREEZE ACCOUNT</span>
        </>
      )}
    </button>
  );
};

export default FreezeButton;