import React from 'react';
import { LoginForm } from '../components/LoginForm';

export const LoginPage = () => {
  return (
    <div id="nb-page-login" className="nb-page nb-active">
      <main className="flex-grow flex items-center justify-center p-4 md:p-8 min-h-screen bg-background">
        <LoginForm />
      </main>

      {/* Simple Transactional Footer */}
      <footer className="w-full py-8 px-8 flex flex-col items-center justify-center gap-4 bg-transparent">
        <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60">
          © 2024 NextoBite. Curating neighborhood flavors with AI.
        </p>
        <div className="flex gap-6">
          <button
            type="button"
            className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Help Center
          </button>
          <button
            type="button"
            className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Language
          </button>
        </div>
      </footer>
    </div>
  );
};
