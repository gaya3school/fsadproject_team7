import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const Navigation = () => {
  const { user, handleLogout, setCurrentPage, currentPage } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto bg-surface dark:bg-inverse-surface shadow-ambient">
      <div className="flex items-center gap-8">
        <button
          type="button"
          onClick={() => setCurrentPage('discover')}
          className="text-2xl font-black text-primary dark:text-primary-fixed tracking-tight"
        >
          NextoBite
        </button>
        <div className="hidden md:flex gap-6">
          <button
            type="button"
            onClick={() => setCurrentPage('discover')}
            className={`font-headline font-medium text-sm ${currentPage === 'discover' ? 'text-primary border-b-2 border-primary pb-1' : 'text-tertiary hover:text-primary'} transition-all duration-300 ease-in-out`}
          >
            Discover
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('trending')}
            className={`font-headline font-medium text-sm ${currentPage === 'trending' ? 'text-primary border-b-2 border-primary pb-1' : 'text-tertiary hover:text-primary'} transition-all duration-300 ease-in-out`}
          >
            Trending
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('neighborhood')}
            className={`font-headline font-medium text-sm ${currentPage === 'neighborhood' ? 'text-primary border-b-2 border-primary pb-1' : 'text-tertiary hover:text-primary'} transition-all duration-300 ease-in-out`}
          >
            Neighborhood
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('upload')}
            className={`font-headline font-medium text-sm ${currentPage === 'upload' ? 'text-primary border-b-2 border-primary pb-1' : 'text-tertiary hover:text-primary'} transition-all duration-300 ease-in-out`}
          >
            Upload
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('profile')}
            className={`font-headline font-medium text-sm ${currentPage === 'profile' ? 'text-primary border-b-2 border-primary pb-1' : 'text-tertiary hover:text-primary'} transition-all duration-300 ease-in-out`}
          >
            My Kitchen
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 relative">
        <button className="p-2 text-tertiary hover:bg-surface-container rounded-full transition-all" type="button">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button
          type="button"
          onClick={() => setShowUserMenu(!showUserMenu)}
          className="p-2 text-tertiary hover:bg-surface-container rounded-full transition-all relative"
        >
          <span className="material-symbols-outlined">person</span>
          {showUserMenu && (
            <div className="absolute right-0 mt-32 w-52 bg-surface-container rounded-lg shadow-ambient">
              <div className="p-4">
                <p className="text-sm font-headline text-on-surface mb-4">{user?.email}</p>
                <button
                  onClick={handleLogout}
                  type="button"
                  className="w-full px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-primary-container transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};
