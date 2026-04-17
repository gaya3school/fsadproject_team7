import React from 'react';

export const RecipeCard = ({ recipe, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(recipe)}
      className="group text-left recipe-card-shadow rounded-[2rem] overflow-hidden bg-surface-container-lowest hover:scale-[1.02] transition-transform duration-300 focus:outline-none"
      aria-label={`Open recipe ${recipe.title}`}
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-headline font-bold text-on-surface">{recipe.title}</h3>
          <span className="text-sm font-label text-primary">⭐ {recipe.rating}</span>
        </div>
        <p className="text-sm text-on-surface-variant mb-4">{recipe.description}</p>
        <div className="flex items-center justify-between text-xs text-on-surface-variant">
          <span className="inline-flex items-center gap-2">👤 {recipe.author}</span>
          <span className="inline-flex items-center gap-2">⏱️ {recipe.time} min</span>
        </div>
        <div className="mt-5 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors group-hover:bg-primary/20">
          View recipe
        </div>
      </div>
    </button>
  );
};
