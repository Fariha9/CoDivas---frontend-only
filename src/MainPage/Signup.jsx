import React, { useState } from "react";


const Signup = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("all_users") || "[]");

    const newUser = { name: fullName, email: email, password: password };
    existingUsers.push(newUser);

    localStorage.setItem("all_users", JSON.stringify(existingUsers));
    localStorage.setItem("user_name", fullName);
    localStorage.setItem("user_email", email);

    alert("You've created your account successfully!");
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#0d0d0f]">

      {/* Left */}
      <div className="flex flex-col justify-center py-10 px-8 lg:px-16 bg-[#0d0d0f] relative overflow-hidden">
        {/* Glow blob */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-700/20 rounded-full blur-[100px] pointer-events-none" />

        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-400/10 border border-purple-400/20 rounded-full px-4 py-1 mb-6 w-fit">
           Learn. Build. Grow.
        </span>

        <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
          Start Your Journey
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600">
            with CoDivas
          </span>
        </h1>

        <p className="text-gray-500 text-lg max-w-md mb-10">
          Learn computer science with interactive courses and quizzes.
        </p>

        
      </div>

      {/* Right */}
      <div className="flex flex-col justify-center px-8 lg:px-20 bg-[#111114] relative overflow-hidden">
        {/* Glow blob */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-700/15 rounded-full blur-[100px] pointer-events-none" />

        <h2 className="text-3xl font-bold text-white mb-2 relative z-10">
          Create an <span className="text-purple-400">Account</span>
        </h2>
        <p className="text-gray-500 mb-8 relative z-10">
          Join thousands of learners today
        </p>

        <form onSubmit={handleSignup} className="space-y-4 max-w-md relative z-10" autoComplete="off">
          <input
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) => setFullName(e.target.value)}
            className="input w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="input w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="input w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500 focus:outline-none"
          />
          <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" required />
            I agree to the Terms & Conditions
          </label>
          <button
            type="submit"
            className="btn w-full bg-purple-600 text-white hover:bg-purple-500 border-none shadow-lg shadow-purple-900/40 transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-500 mt-6 text-left relative z-10">
          Already have an account?
          <button
            className="text-purple-400 font-semibold ml-1 hover:underline"
            onClick={() => document.getElementById('login').showModal()}
          >
            Login
          </button>
        </p>
      </div>

    </div>
  );
};

export default Signup;