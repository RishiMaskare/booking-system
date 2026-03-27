"use client";
import { useState } from "react";
import { Mail, Lock, EyeOff } from "lucide-react";
// yoooooo
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen items-center justify-center bg-[#F8F9FA] p-4">
      <div className="flex flex-col md:flex-row max-w-6xl w-full items-center gap-12">
        {/* LEFT SIDE: LOGO + FARM ILLUSTRATION */}
        <div className="hidden md:flex flex-col w-1/2">
          {/* LOGO SECTION - Using your image file */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="AgriShare Logo"
              className="w-20 h-16 object-contain"
            />
            <h1><span className="text-[#15803d] text-3xl font-bold">Agri</span><span className="text-yellow-400 text-3xl font-bold">Share</span></h1>
          </div>

          <img
            src="/farm.png" 
            alt="Farm scenery"
            className="rounded-4xl w-full shadow-sm"
          />
        </div>

        {/* RIGHT SIDE: LOGIN FORM */}
        <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-50 w-full max-w-120">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome Back to <span className="text-[#15803d]">AgriShare!</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Securely access your account.
            </p>
          </header>

          <form className="flex flex-col gap-6">
            {/* EMAIL */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all placeholder:text-gray-500"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-11 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all placeholder:text-gray-500"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <EyeOff size={20} />
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <button
                  type="button"
                  className="text-xs font-bold text-yellow-500 hover:text-yellow-600"
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFCC00] hover:bg-[#F5C200] text-gray-900 py-3.5 rounded-2xl font-bold shadow-lg shadow-yellow-200/50 transition-all active:scale-[0.98]"
            >
              Login
            </button>
          </form>

          {/* DIVIDER */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-400 font-medium tracking-wider">
                or login with
              </span>
            </div>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors font-semibold text-gray-700">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
                alt="G"
              />
              Sign in with Google
            </button>
          </div>

          <p className="text-center mt-8 text-gray-600 text-sm">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-yellow-500 font-bold hover:underline ml-1"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
