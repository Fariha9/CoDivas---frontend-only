import { useState } from "react";
import { Link } from "react-router";
import toast from "react-hot-toast";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    const toastId = toast.loading("Sending reset email...");

    setTimeout(() => {
      toast.success("Password reset link sent 📩", { id: toastId });
      setSent(true);
    }, 1500);

    setTimeout(() => {
      document.getElementById("forgetPass").close();
      setSent(false);
      setEmail("");
    }, 2000);
  };

  return (
    <dialog id="forgetPass" className="modal">
      <div className="modal-box max-w-md rounded-2xl p-8">

        {/* Close */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
            ✕
          </button>
        </form>

        {/* Header */}
        <h2 className="text-2xl font-bold text-purple-700 mb-2">
          Reset Password
        </h2>
        <p className="text-gray-500 mb-6">
          Enter your email to receive reset instructions
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!sent ? (
            <>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />

              <button
                type="submit"
                className="btn w-full bg-purple-600 text-white hover:bg-purple-700 border-none transition-all"
              >
                Send Reset Link
              </button>
            </>
          ) : (
            <div className="text-center">
              <p className="text-green-600 font-semibold mb-4">
                ✅ Reset link sent successfully!
              </p>
              <button
                type="button"
                className="btn bg-purple-600 text-white hover:bg-purple-700 w-full"
                onClick={() => {
                  document.getElementById("forgetPass").close();
                  setSent(false);
                }}
              >
                Close
              </button>
            </div>
          )}
        </form>

        <p className="text-center text-gray-600 mt-6">
          Remember your password?
          <Link
            className="text-purple-600 font-semibold ml-1 cursor-pointer hover:underline"
            onClick={() => {
              document.getElementById("forgetPass").close();
              document.getElementById("login").showModal();
            }}
          >
            Login
          </Link>
        </p>

      </div>
    </dialog>
  );
};

export default ForgetPass;
