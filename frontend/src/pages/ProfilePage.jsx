import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigation } from '../components/Navigation';

export const ProfilePage = () => {
  const { user, setCurrentPage } = useAuth();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <div className="nb-page nb-active bg-background min-h-screen">
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 md:px-8 py-10">
        <button
          type="button"
          onClick={() => setCurrentPage('discover')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-container mb-8"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Discover
        </button>

        <section className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-surface-container-lowest p-8 shadow-ambient">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-3xl text-primary font-black">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-on-surface-variant">My Kitchen</p>
                  <h1 className="text-4xl font-headline font-bold text-on-surface">{user?.name}</h1>
                  <p className="text-sm text-on-surface-variant mt-1">{user?.email}</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.75rem] bg-surface p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">Recipes updated</p>
                  <p className="text-3xl font-bold text-on-surface">{user?.recipesUpdated}</p>
                </div>
                <div className="rounded-[1.75rem] bg-surface p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">Saved</p>
                  <p className="text-3xl font-bold text-on-surface">{user?.recipesSaved}</p>
                </div>
                <div className="rounded-[1.75rem] bg-surface p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">Liked</p>
                  <p className="text-3xl font-bold text-on-surface">{user?.recipesLiked}</p>
                </div>
              </div>

              <div className="rounded-[2rem] bg-surface p-6">
                <h2 className="text-xl font-headline font-bold text-on-surface mb-3">Your details</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">Name</p>
                    <p className="text-on-surface">{user?.name}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">Email</p>
                    <p className="text-on-surface">{user?.email}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">Address</p>
                    <p className="text-on-surface">{user?.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-surface-container-lowest p-8 shadow-ambient">
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">Newsletter</h2>
              <p className="text-on-surface-variant mb-4">Subscribe for recipe alerts, neighborhood updates, and chef tips.</p>
              <div className="flex flex-col gap-4">
                <input
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-3xl border border-outline-variant bg-white py-4 px-5 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button
                  type="button"
                  onClick={handleSubscribe}
                  className="rounded-full bg-primary text-white py-4 font-semibold hover:bg-primary-container transition-colors"
                >
                  Subscribe
                </button>
                {subscribed && (
                  <p className="text-sm text-primary">Thanks for subscribing! We'll send updates soon.</p>
                )}
              </div>
            </div>

            <div className="rounded-[2rem] bg-surface-container-lowest p-8 shadow-ambient">
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">Quick actions</h2>
              <button
                type="button"
                onClick={() => setCurrentPage('upload')}
                className="w-full rounded-full bg-primary text-white py-4 font-semibold hover:bg-primary-container transition-colors mb-4"
              >
                Upload a new recipe
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage('neighborhood')}
                className="w-full rounded-full border border-outline-variant bg-white text-on-surface py-4 font-semibold hover:bg-surface-container transition-colors"
              >
                View neighborhood updates
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
