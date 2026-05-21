import React, { useState } from "react";
import { Link } from "react-router";
import { FaBook, FaChartLine, FaCog, FaThLarge } from "react-icons/fa";
import { Code2 } from "lucide-react";

const Dashboard = () => {
  const currentUserEmail = localStorage.getItem("user_email");

  const [userName] = useState(
    () => localStorage.getItem("user_name") ?? "User"
  );

  const [streak] = useState(() => {
    return Number(localStorage.getItem(`streak_${currentUserEmail}`) || 0);
  });

  const [quizzesTaken] = useState(() => {
    let qCount = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.includes("quiz") && key.includes(currentUserEmail || "")) {
        if (localStorage.getItem(key) === "completed") qCount++;
      }
    }
    return qCount;
  });

  const [purchasedCount] = useState(() => {
    let pCount = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("purchased_") && key.endsWith(`_${currentUserEmail}`)) {
        pCount++;
      }
    }
    return pCount;
  });

  const progressPercentage = purchasedCount > 0 ? Math.min(purchasedCount * 25, 100) : 0;

  return (
    <div className="min-h-screen flex bg-[#0d0d0f]">

      {/* Sidebar */}
      <aside className="w-64 bg-[#111114] flex flex-col p-6 text-left border-r border-white/10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group mb-10 w-fit">
          <Code2 className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-extrabold tracking-tight text-white">Co</span>
          <span className="text-2xl font-extrabold tracking-tight text-purple-400 group-hover:text-purple-300 transition-colors">Divas</span>
        </Link>

        <nav className="flex flex-col gap-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 text-white font-bold bg-purple-600/20 border border-purple-500/30 p-3 rounded-xl"
          >
            <FaThLarge className="text-purple-400" /> Dashboard
          </Link>
          <Link
            to="/courses"
            className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 font-semibold p-3 rounded-xl transition-all"
          >
            <FaBook className="text-gray-500" /> My Courses
          </Link>
          <Link
            to="/progress"
            className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 font-semibold p-3 rounded-xl transition-all"
          >
            <FaChartLine className="text-gray-500" /> Progress
          </Link>
          <Link
            to="/settings"
            className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 font-semibold p-3 rounded-xl transition-all"
          >
            <FaCog className="text-gray-500" /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 text-left relative overflow-hidden">

        {/* Glow blob */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-700/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Header */}
        <header className="mb-10 relative z-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-400/10 border border-purple-400/20 rounded-full px-4 py-1 mb-4">
            Your Learning Hub
          </span>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">
            Welcome Back, <span className="text-purple-400">{userName}!</span>
          </h2>
          <p className="text-gray-500 font-medium mt-1">
            Here's what's happening with your learning today.
          </p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 relative z-10">
          <div className="bg-[#18181c] border border-white/10 p-6 rounded-3xl border-b-4 border-b-purple-500 hover:border-purple-500/40 transition-all">
            <h3 className="text-gray-500 font-bold text-xs uppercase tracking-widest">Purchased Courses</h3>
            <p className="text-4xl font-black text-purple-400 mt-2">{purchasedCount}</p>
          </div>
          <div className="bg-[#18181c] border border-white/10 p-6 rounded-3xl border-b-4 border-b-green-500 hover:border-green-500/40 transition-all">
            <h3 className="text-gray-500 font-bold text-xs uppercase tracking-widest">Quizzes Taken</h3>
            <p className="text-4xl font-black text-green-400 mt-2">{quizzesTaken}</p>
          </div>
          <div className="bg-[#18181c] border border-white/10 p-6 rounded-3xl border-b-4 border-b-orange-500 hover:border-orange-500/40 transition-all">
            <h3 className="text-gray-500 font-bold text-xs uppercase tracking-widest">Current Streak</h3>
            <p className="text-4xl font-black text-orange-400 mt-2">{streak} Days</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-[#18181c] border border-white/10 p-8 rounded-3xl max-w-2xl relative z-10">
          <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
            <FaChartLine className="text-purple-400" /> Learning Mastery
          </h3>
          <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden border border-white/10">
            <div
              className="bg-purple-600 h-full transition-all duration-1000 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-[10px] text-gray-500 mt-3 font-bold uppercase tracking-wider text-right">
            Progress: {progressPercentage}%
          </p>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;