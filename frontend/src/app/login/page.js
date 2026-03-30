"use client";
import { useEffect, useState } from "react";
import { Mail, Lock, EyeOff, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { useAppContext } from "@/context/AppContext";
// yoooooo
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="flex h-screen items-center justify-center bg-background p-4">
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
            <h1><span className="text-success text-3xl font-bold">Agri</span><span className="text-primary-accent text-3xl font-bold">Share</span></h1>
          </div>

          <img
            src="/farm.png" 
            alt="Farm scenery"
            className="rounded-4xl w-full shadow-sm"
          />
        </div>

        {/* RIGHT SIDE: LOGIN FORM */}
        <div className="bg-surface p-10 rounded-[40px] shadow-2xl border border-border-light w-full max-w-120">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-text-primary">
              Welcome Back to <span className="text-success">AgriShare!</span>
            </h1>
            <p className="text-text-tertiary text-sm mt-1">
              Securely access your account.
            </p>
          </header>

          <form 
            className="flex flex-col gap-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              setError(null);

              try {
                const response = await axios.post(`${API_BASE_URL}/users/login`, {
                  email,
                  password,
                });
                const payload = response?.data?.data;

                if (!response?.data?.success || !payload?.token) {
                  throw new Error(response?.data?.message || "Login failed");
                }

                setAuth({ token: payload.token, user: payload.user });
                toast.success("Login successful!");
                router.push("/");
              } catch (err) {
                const message =
                  err?.response?.data?.message || err?.message || "Login failed";
                setError(message);
                toast.error(message);
              } finally {
                setLoading(false);
              }
            }}
          >
            {/* EMAIL */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-text-secondary">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-accent-dark w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  className="w-full pl-11 pr-4 py-3 border border-border-light rounded-2xl focus:ring-2 focus:ring-primary-accent focus:border-transparent outline-none transition-all placeholder:text-text-tertiary"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-text-secondary">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-accent-dark w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  className="w-full pl-11 pr-11 py-3 border border-border-light rounded-2xl focus:ring-2 focus:ring-primary-accent focus:border-transparent outline-none transition-all placeholder:text-text-tertiary"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-secondary"
                >
                  <EyeOff size={20} />
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <button
                  type="button"
                  className="text-xs font-bold text-primary-accent-dark hover:text-primary-accent"
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-error/10 border border-error/30 rounded-2xl text-error text-sm font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-accent hover:bg-primary-accent-dark disabled:bg-primary-accent-light disabled:cursor-not-allowed text-text-primary py-3.5 rounded-2xl font-bold shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {loading && <Loader size={20} className="animate-spin" />}
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* DIVIDER */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border-light"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-surface px-4 text-text-tertiary font-medium tracking-wider">
                or login with
              </span>
            </div>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-border-light rounded-2xl hover:bg-surface-hover transition-colors font-semibold text-text-secondary">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
                alt="G"
              />
              Sign in with Google
            </button>
          </div>

          <p className="text-center mt-8 text-text-secondary text-sm">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-primary-accent-dark font-bold hover:underline ml-1"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
