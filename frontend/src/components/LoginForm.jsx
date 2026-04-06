import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const LoginForm = () => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (password === confirmPassword) {
        handleLogin(email, password);
      } else {
        alert('Passwords do not match');
      }
    } else {
      handleLogin(email, password);
    }
  };

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-0 ambient-shadow rounded-lg overflow-hidden bg-surface-container-lowest">
      {/* Left Side: Narrative Illustration & Branding */}
      <div className="lg:col-span-5 bg-primary relative overflow-hidden hidden lg:flex flex-col justify-between p-12 text-on-primary">
        {/* Branding */}
        <div className="z-10">
          <span className="text-3xl font-black tracking-tight mb-2 block">NextoBite</span>
          <p className="font-headline text-lg opacity-90">The Culinary Curator</p>
        </div>

        {/* Abstract Culinary Illustration Container */}
        <div className="relative z-10 py-12">
          <img
            alt="Person cooking"
            className="rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_lSa7p2FySTeJgtaQG7Vit73GIWBY-C1-Ae0-V_FAotgcxR_XH4FnxID7CM366rUK01ETYMTdVLZbwddhJShV_BsUbX8XNwQ_nIlXDq7Aqxj6tN_b5w0c_95UifG-nUQU11MuAesF1Zlhf9Usuy0Kn_O28XncJUYp_N_bQMQCqAfRHabAENtUG3WlxuFG1O7rOYBwfdz0HY3XKz_l6jNUneiG_NoD-IbGl9Blw8Y6gPb8IthZjHhUhsAOFEFmEiDm3Qn1JucWTjy1"
          />
          <div className="mt-12 space-y-4">
            <h2 className="text-4xl font-bold leading-tight">Your neighborhood flavors, curated by AI.</h2>
            <p className="text-on-primary/80 font-medium max-w-xs">Join 10,000+ foodies sharing authentic recipes and local hidden gems.</p>
          </div>
        </div>

        {/* Decorative Maillard Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-40"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-on-primary-container/20 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side: Authentication Forms */}
      <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center bg-surface-container-lowest">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-8 text-center">
          <span className="text-primary text-3xl font-black tracking-tight">NextoBite</span>
        </div>

        <div className="max-w-md mx-auto w-full">
          {/* Form Tabs */}
          <div className="flex gap-8 mb-10 border-b border-outline-variant/20">
            <button
              onClick={() => setIsSignUp(false)}
              className={`pb-4 text-lg font-headline font-bold border-b-2 transition-colors ${
                !isSignUp
                  ? 'border-primary text-on-surface'
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`pb-4 text-lg font-headline font-bold border-b-2 transition-colors ${
                isSignUp
                  ? 'border-primary text-on-surface'
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2 px-1">
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                  mail
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-container-highest border-none rounded-lg py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="chef@nextobite.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2 px-1">
                Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                  lock
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface-container-highest border-none rounded-lg py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary"
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
              {!isSignUp && (
                <div className="flex justify-end mt-2">
                  <button type="button" className="text-xs font-label font-semibold text-primary hover:underline">
                    Forgot password?
                  </button>
                </div>
              )}
            </div>

            {isSignUp && (
              <div>
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2 px-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                    verified_user
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-surface-container-highest border-none rounded-lg py-4 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-primary text-white font-headline font-bold py-4 rounded-full ambient-shadow hover:bg-primary-container active:scale-[0.98] transition-all duration-200"
              >
                {isSignUp ? 'Create Account' : 'Enter Kitchen'}
              </button>
            </div>
          </form>

          {/* Social Login Section */}
          <div className="mt-10">
            <div className="relative flex items-center mb-8">
              <div className="flex-grow border-t border-outline-variant/30"></div>
              <span className="flex-shrink mx-4 text-xs font-label text-outline font-medium">OR CONTINUE WITH</span>
              <div className="flex-grow border-t border-outline-variant/30"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-surface-container-high hover:bg-surface-container-highest transition-colors font-label font-bold text-on-surface text-sm"
              >
                <img
                  alt="Google"
                  className="w-4 h-4 opacity-70"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp1KtnD5vm2atAXfoEZTxdleZ6DWB7pb0oKbXId4T0kVy_8JyO33LrjEiy_N0pAaTn6_FftXBZGLaZ6OO8NE0Jn8Oo-YoKkRh1qFPFoYO8A-nmJq9eAypjki_kiCymGecTh7DXjB0AA2sudGIihEzZUjibTKyyzUmF8G-Gd5SLnXrvtWoDSX7Httt95cHVvhm27NC9z0347bLni-fa6Vzjjt-Rsi4ZvBf7QVjwKaw1Ew5w9IjVL_YgTwrcKkm2Mzg1lItZ4kbN1oaR"
                />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-surface-container-high hover:bg-surface-container-highest transition-colors font-label font-bold text-on-surface text-sm"
              >
                <span className="material-symbols-outlined text-sm">ios</span>
                Apple ID
              </button>
            </div>
          </div>

          {/* Footnote */}
          <p className="mt-10 text-center text-xs font-label text-on-surface-variant leading-relaxed">
            By entering, you agree to NextoBite's{' '}
            <button type="button" className="text-primary font-bold hover:underline">
              Terms of Service
            </button>{' '}
            and{' '}
            <button type="button" className="text-primary font-bold hover:underline">
              Privacy Policy
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
