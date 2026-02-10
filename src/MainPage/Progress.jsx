import React, { useEffect, useState } from "react";
import { FaChartLine, FaTrophy, FaHistory, FaFire } from "react-icons/fa";

const Progress = () => {
  const [stats, setStats] = useState({ streak: 0, count: 0 });

  useEffect(() => {
    const currentUserEmail = localStorage.getItem("user_email");

    if (currentUserEmail) {
      const savedStreak = localStorage.getItem(`streak_${currentUserEmail}`) || 0;
      let count = 0;
      
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key && key.includes("quiz_") && key.includes(currentUserEmail) && localStorage.getItem(key) === "completed") {
          count++;
        }
      }
      setStats({ streak: Number(savedStreak), count: count });
    }
  }, []);


  const points = [
    { x: 0, y: 80 }, 
    { x: 50, y: 75 }, 
    { x: 100, y: 85 },
    { x: 150, y: 60 }, 
    { x: 200, y: 70 }, 
    { x: 250, y: 40 },
    { x: 300, y: Math.max(100 - (stats.count * 10), 10) }, // কুইজ বাড়লে গ্রাফের শেষ মাথা উপরে উঠবে
  ];
  const pathData = points.map(p => `${p.x},${p.y}`).join(" ");

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-left">
      <h2 className="text-3xl font-black text-purple-700 mb-8 uppercase tracking-tight">Detailed Progress</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaChartLine className="text-purple-600"/> Skill Mastery
          </h3>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-gray-600 mb-2 text-sm uppercase">Quizzes Completed: {stats.count}</p>
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full transition-all duration-1000" style={{ width: `${Math.min(stats.count * 20, 100)}%` }}></div>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-600 mb-2 text-sm uppercase">Learning Streak: {stats.streak} Days</p>
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full transition-all duration-1000" style={{ width: `${Math.min(stats.streak * 10, 100)}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><FaTrophy className="text-yellow-500"/> Achievements</h3>
          <div className="flex gap-4">
            <div className={`p-4 rounded-2xl border-2 ${stats.count > 0 ? 'bg-purple-50 border-purple-100' : 'bg-gray-50 border-transparent opacity-30'}`}>
              <span className="text-3xl">🥇</span>
              <p className="text-[10px] font-black mt-1 text-center">STARTER</p>
            </div>
            <div className={`p-4 rounded-2xl border-2 ${stats.streak >= 3 ? 'bg-orange-50 border-orange-100' : 'bg-gray-50 border-transparent opacity-30'}`}>
              <span className="text-3xl">🔥</span>
              <p className="text-[10px] font-black mt-1 text-center">3-DAY</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-6">Activity Monitor</h3>
          <div className="relative w-full h-48 border-l-2 border-b-2 border-gray-200 mt-4 flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
            <svg viewBox="0 -10 300 120" className="w-full h-full overflow-visible">
              
              <polyline fill="none" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points={pathData} className="transition-all duration-1000" />
             
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="4" fill="white" stroke="#7c3aed" strokeWidth="2" className="transition-all duration-1000" />
              ))}
            </svg>
            <div className="absolute -bottom-8 w-full flex justify-between px-2 text-[10px] font-black text-gray-400">
              <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
            </div>
          </div>
        </div>

        
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 text-left">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><FaHistory className="text-blue-500"/> Recent History</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <FaFire className="text-orange-500" />
              <p className="text-[11px] font-black text-gray-700 uppercase">Streak Updated To {stats.streak} Days</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></div>
              <p className="text-[11px] font-black text-gray-700 uppercase">Quiz Successfully Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;