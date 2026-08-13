import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'motion/react';

interface AuthScreenProps {
  onSuccess: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export function AuthScreen({ onSuccess, theme, toggleTheme }: AuthScreenProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;
      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });
        if (signUpError) throw signUpError;
        // Sometimes signup doesn't auto-login if email confirmation is required.
        // For our case, let's assume auto-login works or show a message.
        // Just calling onSuccess and letting the session listener handle it is safer, but we can call onSuccess.
      }
      onSuccess();
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 relative">
      {/* Theme Toggle (optional to keep consistent with WelcomeScreen) */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-2 rounded-full bg-zinc-200/50 dark:bg-white/10 hover:bg-zinc-300/50 dark:hover:bg-white/20 transition-colors z-10 text-zinc-700 dark:text-white"
        title="Toggle theme"
      >
        <span className="text-xl">{theme === 'dark' ? '🌙' : '☀️'}</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sage-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2 text-center text-zinc-900 dark:text-white">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-center mb-8">
              {isLogin 
                ? 'Sign in to continue your journey' 
                : 'Start your smoke-free quest today'}
            </p>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-500">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-zinc-400" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all text-zinc-900 dark:text-white placeholder-zinc-400"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-zinc-400" />
                  </div>
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all text-zinc-900 dark:text-white placeholder-zinc-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-sage-500 to-sage-600 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-sage-500/25 active:scale-[0.98] mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>{isLogin ? 'Sign In' : 'Sign Up'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError(null);
                }}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-sage-600 dark:hover:text-sage-400 transition-colors"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
