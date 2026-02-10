import React, { useState } from "react";
import { useNavigate } from "react-router"; 

const Signup = () => {
  const navigate = useNavigate();
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
    localStorage.setItem("user_email", email); // saving unique id

    alert("You've created your account successfully!");
    window.location.href = "/dashboard"; 
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      <div className="flex flex-col justify-center py-10 px-8 lg:px-16 bg-white">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-purple-700 mb-4 text-left">Start Your Journey with CoDivas</h1>
        <p className="text-gray-600 text-lg max-w-md mb-10 text-left">Learn computer science with interactive courses and quizzes.</p>
        <img src="https://i.ibb.co.com/VcBCxSdX/undraw-programming-j1zw-2.png" alt="Coding" className="max-w-md w-full" />
      </div>

      <div className="flex flex-col justify-center px-8 lg:px-20 bg-white">
        <h2 className="text-3xl font-bold text-purple-700 mb-2 text-left">Create an Account</h2>
        <p className="text-gray-500 mb-8 text-left">
          Join thousands of learners today
        </p>
        <form onSubmit={handleSignup} className="space-y-4 max-w-md" autoComplete="off">
          <input type="text" placeholder="Full Name" required onChange={(e) => setFullName(e.target.value)} className="input input-bordered w-full focus:border-purple-500" />
          <input type="email" placeholder="Email Address" required onChange={(e) => setEmail(e.target.value)} className="input input-bordered w-full focus:border-purple-500" />
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full focus:border-purple-500" />
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" required />
            I agree to the Terms & Conditions
          </label>
          <button type="submit" className="btn w-full bg-purple-600 text-white hover:bg-purple-700 border-none">Sign Up</button>
        </form>
        <p className="text-gray-600 mt-6 text-left">
          Already have an account?
          <button 
            className="text-purple-600 font-semibold ml-1 hover:underline" 
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