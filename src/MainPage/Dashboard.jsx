import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { FaBook, FaChartLine, FaCog, FaThLarge } from "react-icons/fa";

const Dashboard = () => {
  const [streak, setStreak] = useState(0);
  const [quizzesTaken, setQuizzesTaken] = useState(0);
  const [purchasedCount, setPurchasedCount] = useState(0);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    
    const currentUserEmail = localStorage.getItem("user_email");
    const savedName = localStorage.getItem("user_name");
    
    if (savedName) setUserName(savedName);

    if (currentUserEmail) {
      
      const savedStreak = localStorage.getItem(`streak_${currentUserEmail}`) || 0;
      setStreak(Number(savedStreak));

      let qCount = 0;
      let pCount = 0;

      
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        
        
        if (key && key.includes("quiz") && key.includes(currentUserEmail)) {
          if (localStorage.getItem(key) === "completed") qCount++;
        }

        
        if (key && key.startsWith("purchased_") && key.endsWith(`_${currentUserEmail}`)) {
          pCount++;
        }
      }
      setQuizzesTaken(qCount);
      setPurchasedCount(pCount);
    }
  }, []);

  
  const progressPercentage = purchasedCount > 0 ? Math.min(purchasedCount * 25, 100) : 0;

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar - Quizzes এবং Logout মেনু সরিয়ে দেওয়া হয়েছে */}
      <aside className="w-64 bg-white shadow-md flex flex-col p-6 text-left border-r border-gray-100">
        <h1 className="text-2xl font-bold text-purple-700 mb-10 uppercase tracking-tighter">CoDivas</h1>
        <nav className="flex flex-col gap-4">
          <Link className="flex items-center gap-3 text-purple-600 font-bold bg-purple-50 p-3 rounded-xl" to="/dashboard">
            <FaThLarge /> Dashboard
          </Link>
          <Link className="flex items-center gap-3 text-gray-600 hover:text-purple-600 font-semibold p-3 transition-all" to="/courses">
            <FaBook /> My Courses
          </Link>
          <Link className="flex items-center gap-3 text-gray-600 hover:text-purple-600 font-semibold p-3 transition-all" to="/progress">
            <FaChartLine /> Progress
          </Link>
          <Link className="flex items-center gap-3 text-gray-600 hover:text-purple-600 font-semibold p-3 transition-all" to="/settings">
            <FaCog /> Settings
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8 text-left">
        <header className="mb-10">
          <h2 className="text-3xl font-black text-purple-700 uppercase tracking-tight">
              WELCOME BACK, {userName}!
          </h2>
          <p className="text-gray-500 font-medium">Here's what's happening with your learning today.</p>
        </header>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-purple-500">
            <h3 className="text-gray-400 font-bold text-xs uppercase tracking-widest">Purchased Courses</h3>
            <p className="text-4xl font-black text-purple-700 mt-2">{purchasedCount}</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-green-500">
            <h3 className="text-gray-400 font-bold text-xs uppercase tracking-widest">Quizzes Taken</h3>
            <p className="text-4xl font-black text-green-600 mt-2">{quizzesTaken}</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-orange-500">
            <h3 className="text-gray-400 font-bold text-xs uppercase tracking-widest">Current Streak</h3>
            <p className="text-4xl font-black text-orange-500 mt-2">{streak} Days</p>
          </div>
        </div>

        
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 max-w-2xl">
          <h3 className="text-lg font-bold mb-6 text-gray-800 flex items-center gap-2">
            <FaChartLine className="text-purple-600"/> Learning Mastery
          </h3>
          <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-purple-600 h-full transition-all duration-1000" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-[10px] text-gray-400 mt-3 font-bold uppercase tracking-wider text-right">
            Progress: {progressPercentage}%
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;