"use client";
import React, { useEffect, useState } from "react";
import { Mail, Lock, User, EyeOff, CheckCircle2, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { useAppContext } from "@/context/AppContext";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const router = useRouter();
  const {
    loading,
    error,
    setLoading,
    setError,
    setAuth,
    apiBaseUrl,
    isAuthenticated,
    authReady,
  } =
    useAppContext();

  const API_BASE_URL = apiBaseUrl;

  useEffect(() => {
    if (authReady && isAuthenticated) {
      router.replace("/");
    }
  }, [authReady, isAuthenticated, router]);

  if (authReady && isAuthenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="flex flex-col md:flex-row max-w-6xl w-full items-center gap-16">
        {/* LEFT SIDE: LOGO + FARM ILLUSTRATION */}
        <div className="hidden md:flex flex-col w-1/2">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-surface p-2 rounded-xl shadow-sm border border-border-light">
              <img
                src="/logo.png"
                alt="AgriShare"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-success">Agri</span>
              <span className="text-success">Share</span>
            </h1>
          </div>

          <div className="relative">
            <img
              src="/farm.png"
              alt="Modern Farming Illustration"
              className="rounded-[40px] w-full shadow-lg border-4 border-surface"
            />
            {/* Optional Floating Badge to match the 'AI Insight' vibe in your dashboard */}
            <div className="absolute -bottom-6 -right-6 bg-surface p-4 rounded-2xl shadow-xl border border-border-light flex items-center gap-3">
              <div className="bg-success/10 p-2 rounded-full text-success">
                <CheckCircle2 size={20} />
              </div>
              <div className="text-sm">
                <p className="font-bold text-text-primary">Verified Equipment</p>
                <p className="text-text-tertiary text-xs">Trusted by 10k+ Farmers</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: SIGN UP FORM */}
        <div className="bg-surface p-8 md:p-12 rounded-[48px] shadow-2xl border border-border-light w-full max-w-lg">
          <header className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">
              Join the{" "}
              <span className="text-text-primary">AgriShare Community!</span>
            </h1>
            <p className="text-text-tertiary mt-3 text-sm leading-relaxed max-w-xs md:max-w-none">
              Access or share top-tier farm equipment. Hassle-free rentals for
              modern farming.
            </p>
          </header>

          <form
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();

              // Validation
              if (!fullName.trim()) {
                toast.error("Full name is required");
                return;
              }
              if (!email.trim()) {
                toast.error("Email is required");
                return;
              }
              if (password.length < 8) {
                toast.error("Password must be at least 8 characters");
                return;
              }
              if (password !== confirmPassword) {
                toast.error("Passwords do not match");
                return;
              }
              if (!acceptTerms) {
                toast.error("Please accept terms and conditions");
                return;
              }

              setLoading(true);
              setError(null);

              try {
                const response = await axios.post(
                  `${API_BASE_URL}/users/register`,
                  {
                    fullName,
                    email,
                    password,
                  }
                );

                const payload = response?.data?.data;
                if (!response?.data?.success || !payload?.token) {
                  throw new Error(response?.data?.message || "Signup failed");
                }

                setAuth({ token: payload.token, user: payload.user });
                toast.success("Account created successfully!");
                router.push("/");
              } catch (err) {
                const message =
                  err?.response?.data?.message || err?.message || "Signup failed";
                setError(message);
                toast.error(message);
              } finally {
                setLoading(false);
              }
            }}
          >
            {/* FULL NAME */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-primary ml-1">
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-primary-accent p-1.5 rounded-xl text-text-primary shadow-sm transition-transform group-focus-within:scale-110">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="e.g., Jane D. Farmer"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-14 pr-4 py-4 bg-background border border-border-light rounded-[22px] focus:bg-surface focus:ring-4 focus:ring-primary-accent/20 focus:border-primary-accent outline-none transition-all placeholder:text-text-tertiary font-medium"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-primary ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-primary-accent p-1.5 rounded-xl text-text-primary shadow-sm transition-transform group-focus-within:scale-110">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="e.g., j.farmer@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-14 pr-4 py-4 bg-background border border-border-light rounded-[22px] focus:bg-surface focus:ring-4 focus:ring-primary-accent/20 focus:border-primary-accent outline-none transition-all placeholder:text-text-tertiary font-medium"
                />
              </div>
            </div>

            {/* PASSWORD ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-primary ml-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-primary-accent p-1.5 rounded-xl text-text-primary shadow-sm">
                    <Lock size={16} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-10 py-4 bg-background border border-border-light rounded-[22px] focus:bg-surface focus:ring-4 focus:ring-primary-accent/20 focus:border-primary-accent outline-none transition-all text-sm font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-secondary transition-colors"
                  >
                    <EyeOff size={18} />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-text-primary ml-1">
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-primary-accent p-1.5 rounded-xl text-text-primary shadow-sm">
                    <Lock size={16} />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-background border border-border-light rounded-[22px] focus:bg-surface focus:ring-4 focus:ring-primary-accent/20 focus:border-primary-accent outline-none transition-all text-sm font-medium"
                  />
                </div>
              </div>
            </div>

            {/* TERMS CHECKBOX */}
            <div className="flex items-center gap-3 py-2">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-6 h-6 rounded-lg border-2 border-border-light text-primary-accent focus:ring-primary-accent transition-all cursor-pointer accent-primary-accent"
                />
              </div>
              <label className="text-xs md:text-sm text-text-tertiary font-medium">
                I agree to the{" "}
                <span className="text-text-primary font-bold underline decoration-primary-accent underline-offset-4 cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-text-primary font-bold underline decoration-primary-accent underline-offset-4 cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>

            {error && (
              <div className="p-3 bg-error/10 border border-error/30 rounded-[22px] text-error text-sm font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-accent hover:bg-primary-accent-dark disabled:bg-primary-accent-light disabled:cursor-not-allowed text-text-primary py-4 rounded-[22px] font-black text-lg shadow-xl transition-all hover:-translate-y-1 active:scale-[0.97] flex items-center justify-center gap-2"
            >
              {loading && <Loader size={20} className="animate-spin" />}
              {loading ? "Creating Account..." : "Create Your Account"}
            </button>
          </form>

          <footer className="mt-10 text-center">
            <p className="text-text-secondary font-semibold">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-primary-accent-dark font-black hover:text-primary-accent underline underline-offset-4 ml-1"
              >
                Log In
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
