// components/CustomCalendarToolbar.js
import React from "react";
import BranchSelector from "../../../components/BranchSelector";


const CustomCalendarToolbar = ({ label, onNavigate }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      {/* Left Side: Branch Selector */}
      <div className="flex items-center gap-4">
        <BranchSelector />
      </div>

      {/* Center: Navigation Buttons + Label */}
      <div className="flex items-center gap-2">
        <button onClick={() => onNavigate("TODAY")} className="px-3 py-1 bg-gray-200 rounded">Today</button>
        <button onClick={() => onNavigate("PREV")} className="px-3 py-1 bg-gray-200 rounded">Back</button>
        <button onClick={() => onNavigate("NEXT")} className="px-3 py-1 bg-gray-200 rounded">Next</button>
        <span className="ml-4 font-semibold text-lg">{label}</span>
      </div>

      {/* Right Side: (Optional - View Switcher or Filter/Search) */}
      <div></div>
    </div>
  );
};

export default CustomCalendarToolbar;
