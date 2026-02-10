import React, { useState } from "react";
import { FaUser, FaMoon, FaSun, FaEnvelope } from "react-icons/fa";

const Settings = () => {
  const [userName, setUserName] = useState("ANANYA");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`p-8 min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <h2 className={`text-3xl font-black mb-8 uppercase tracking-tight ${isDarkMode ? 'text-purple-400' : 'text-purple-700'}`}>Settings</h2>

      <div className="max-w-3xl space-y-6">
       
        <div className={`p-8 rounded-[32px] shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaUser className="text-purple-600"/> Personal Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Full Name</label>
              <input 
                type="text" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)}
                className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'}`}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Email Address</label>
              <div className={`flex items-center gap-2 p-3 rounded-xl border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-500'}`}>
                <FaEnvelope size={14} />
                <span className="text-sm font-medium">ananya@example.com</span>
              </div>
            </div>
          </div>

          <button className="mt-6 px-8 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all shadow-md active:scale-95">
            Update Profile
          </button>
        </div>

        
        <div className={`p-8 rounded-[32px] shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isDarkMode ? <FaMoon className="text-blue-400" /> : <FaSun className="text-yellow-500" />}
              <span className="font-bold text-lg">Appearance</span>
            </div>
            
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none ${isDarkMode ? 'bg-purple-600' : 'bg-gray-300'}`}
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2 font-medium">Switch between light and dark themes</p>
        </div>

        
        <div className={`p-6 rounded-2xl border border-dashed ${isDarkMode ? 'border-gray-700 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
          <p className="text-xs text-center font-bold uppercase tracking-widest">Version 1.0.2 • CoDivas Platform</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;