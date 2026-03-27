"use client";
import React, { useState } from "react";
import { Mail, Lock, User, EyeOff, CheckCircle2 } from "lucide-react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
// Hiii 
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F9FA] p-4">
      <div className="flex flex-col md:flex-row max-w-6xl w-full items-center gap-16">
        
        {/* LEFT SIDE: LOGO + FARM ILLUSTRATION */}
        <div className="hidden md:flex flex-col w-1/2">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
               <img src="/logo.png" alt="AgriShare" className="w-10 h-10 object-contain" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-[#15803d]">Agri</span>
              <span className="text-[#15803d]">Share</span>
            </h1>
          </div>
          
          <div className="relative">
            <img
              src="/farm.png"
              alt="Modern Farming Illustration"
              className="rounded-[40px] w-full shadow-lg border-4 border-white"
            />
            {/* Optional Floating Badge to match the 'AI Insight' vibe in your dashboard */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <CheckCircle2 size={20} />
              </div>
              <div className="text-sm">
                <p className="font-bold text-gray-800">Verified Equipment</p>
                <p className="text-gray-500 text-xs">Trusted by 10k+ Farmers</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: SIGN UP FORM */}
        <div className="bg-white p-8 md:p-12 rounded-[48px] shadow-2xl shadow-gray-200/50 border border-gray-50 w-full max-w-lg">
          <header className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Join the <span className="text-gray-900">AgriShare Community!</span>
            </h1>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed max-w-xs md:max-w-none">
              Access or share top-tier farm equipment. Hassle-free rentals for modern farming.
            </p>
          </header>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* FULL NAME */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-800 ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#FFCC00] p-1.5 rounded-xl text-gray-900 shadow-sm transition-transform group-focus-within:scale-110">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="e.g., Jane D. Farmer"
                  className="w-full pl-14 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-[22px] focus:bg-white focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-gray-400 font-medium"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-800 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#FFCC00] p-1.5 rounded-xl text-gray-900 shadow-sm transition-transform group-focus-within:scale-110">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="e.g., j.farmer@email.com"
                  className="w-full pl-14 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-[22px] focus:bg-white focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-gray-400 font-medium"
                />
              </div>
            </div>

            {/* PASSWORD ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800 ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-[#FFCC00] p-1.5 rounded-xl text-gray-900 shadow-sm">
                    <Lock size={16} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-10 py-4 bg-gray-50 border border-gray-200 rounded-[22px] focus:bg-white focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all text-sm font-medium"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <EyeOff size={18} />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800 ml-1">Confirm Password</label>
                <div className="relative group">
                  <div className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-[#FFCC00] p-1.5 rounded-xl text-gray-900 shadow-sm">
                    <Lock size={16} />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-[22px] focus:bg-white focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all text-sm font-medium"
                  />
                </div>
              </div>
            </div>

            {/* TERMS CHECKBOX */}
            <div className="flex items-center gap-3 py-2">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  className="w-6 h-6 rounded-lg border-2 border-gray-200 text-[#FFCC00] focus:ring-[#FFCC00] transition-all cursor-pointer accent-[#FFCC00]" required
                />
              </div>
              <label className="text-xs md:text-sm text-gray-500 font-medium">
                I agree to the <span className="text-gray-900 font-bold underline decoration-yellow-400 underline-offset-4 cursor-pointer">Terms of Service</span> and <span className="text-gray-900 font-bold underline decoration-yellow-400 underline-offset-4 cursor-pointer">Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFCC00] hover:bg-[#F5C200] text-gray-900 py-4 rounded-[22px] font-black text-lg shadow-xl shadow-yellow-200 transition-all hover:-translate-y-1 active:scale-[0.97]"
            >
              Create Your Account
            </button>
          </form>

          <footer className="mt-10 text-center">
            <p className="text-gray-600 font-semibold">
              Already have an account?{" "}
              <a href="/login" className="text-yellow-600 font-black hover:text-yellow-700 underline underline-offset-4 ml-1">
                Log In
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}