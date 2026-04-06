import React from 'react';
import { useAuth } from './context/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { LandingPage } from './pages/LandingPage';
import { ProfilePage } from './pages/ProfilePage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import './index.css';

function App() {
  const { isAuthenticated, currentPage } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="w-full min-h-screen bg-background text-on-surface font-body selection:bg-primary-fixed">
        <LoginPage />
      </div>
    );
  }

  if (currentPage === 'recipe') {
    return <RecipeDetailPage />;
  }

  if (currentPage === 'profile') {
    return <ProfilePage />;
  }

  return <LandingPage />;
}

export default App;
