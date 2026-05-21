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
      localStorage.setItem("user_name", user.name);
      localStorage.setItem("user_email", user.email);
      localStorage.setItem("isLoggedIn", "true");
      setError("");
      document.getElementById('login').close();
      window.location.href = "/dashboard";
    } else {
      setError("Account not found! Please check your email/password.");
    }
  };

  return (
    <dialog id="login" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-md rounded-2xl p-8 bg-[#18181c] border border-white/10 text-white">

        {/* Close */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-400 hover:bg-white/20 hover:text-white">
            ✕
          </button>
        </form>

        {/* Header */}
        <h2 className="text-2xl font-bold text-white mb-2">
          Welcome <span className="text-purple-400">Back</span>
        </h2>
        <p className="text-gray-500 mb-6">
          Login to continue learning
        </p>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm mb-4 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
            {error}
          </p>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin} autoComplete="off">
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

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
              Remember me
            </label>
            <span
              className="text-purple-400 cursor-pointer hover:underline"
              onClick={() => {
                document.getElementById("login").close();
                document.getElementById("forgetPass").showModal();
              }}
            >
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="btn w-full bg-purple-600 text-white hover:bg-purple-500 border-none shadow-lg shadow-purple-900/40 transition-all"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          New here?
          <button
            className="text-purple-400 font-semibold ml-1 hover:underline"
            onClick={() => {
              document.getElementById('login').close();
              window.location.href = "/signup";
            }}
          >
            Create an account
          </button>
        </p>

      </div>

      {/* Click outside to close */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Login;