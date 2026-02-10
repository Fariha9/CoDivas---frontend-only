import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const allUsers = JSON.parse(localStorage.getItem("all_users") || "[]");
    const user = allUsers.find(u => u.email === email && u.password === password);

    if (user) {
      // to save user Id
      localStorage.setItem("user_name", user.name);
      localStorage.setItem("user_email", user.email);
      localStorage.setItem("isLoggedIn", "true");
      setError("");
      document.getElementById('login').close();
      
      // to redirect the profile without refresh
      window.location.href = "/dashboard"; 
    } else {
      setError("Account not found! Please check your email/password.");
    }
  };

  return (
    <dialog id="login" className="modal">
      <div className="modal-box max-w-md rounded-2xl p-8">
         {/* Close */}
         <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
            ✕
          </button>
        </form>
        <h2 className="text-2xl font-bold text-purple-700 mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-500 mb-6">
          Login to continue learning
        </p>
        {error && <p className="text-red-500 text-sm mb-4 bg-red-50 p-2 rounded-lg border border-red-200">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin} autoComplete="off">
          <input type="email" placeholder="Email Address" required onChange={(e) => setEmail(e.target.value)} className="input input-bordered w-full" />
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full" />
          <div className="flex justify-between text-sm">
  <label className="flex items-center gap-2">
    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
    Remember me
  </label>

  <span
    className="text-purple-600 cursor-pointer hover:underline"
    onClick={() => {
      document.getElementById("login").close();
      document.getElementById("forgetPass").showModal();
    }}
  >
    Forgot password?
  </span>
</div>
     
     
          <button type="submit" className="btn w-full bg-purple-600 text-white hover:bg-purple-700 border-none">Login</button>
        </form>
      </div>
    </dialog>
  );
};

export default Login;