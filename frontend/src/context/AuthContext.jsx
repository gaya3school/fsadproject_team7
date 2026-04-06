import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleLogin = (email, password) => {
    setUser({
      email,
      name: email.split('@')[0],
      address: '123 Flavor Street, Foodville',
      recipesUpdated: 12,
      recipesSaved: 34,
      recipesLiked: 27
    });
    setIsAuthenticated(true);
    setCurrentPage('discover');
  };

  const handleSignUp = (email, password) => {
    setUser({
      email,
      name: email.split('@')[0],
      address: '123 Flavor Street, Foodville',
      recipesUpdated: 12,
      recipesSaved: 34,
      recipesLiked: 27
    });
    setIsAuthenticated(true);
    setCurrentPage('discover');
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCurrentPage('login');
    setSelectedRecipe(null);
  };

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentPage('recipe');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentPage,
        user,
        selectedRecipe,
        setCurrentPage,
        selectRecipe,
        handleLogin,
        handleSignUp,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
