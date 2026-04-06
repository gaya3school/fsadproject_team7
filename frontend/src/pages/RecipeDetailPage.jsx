import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigation } from '../components/Navigation';

export const RecipeDetailPage = () => {
  const { selectedRecipe, setCurrentPage } = useAuth();
  const [preference, setPreference] = useState('');
  const [tweakResult, setTweakResult] = useState('');

  if (!selectedRecipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="max-w-xl rounded-3xl bg-surface-container-lowest p-10 shadow-ambient">
          <h2 className="text-2xl font-headline font-bold mb-4">No recipe selected</h2>
          <p className="text-on-surface-variant mb-6">Please go back and choose a recipe to view the full details.</p>
          <button
            type="button"
            onClick={() => setCurrentPage('landing')}
            className="bg-primary text-white font-bold rounded-full px-6 py-3 hover:bg-primary-container transition-colors"
          >
            Back to Recipes
          </button>
        </div>
      </div>
    );
  }

  const handleTweak = () => {
    if (!preference) {
      setTweakResult('Please select a dietary preference first.');
      return;
    }

    const adaptations = {
      Vegan: 'Replace dairy and eggs with plant-based alternatives and add more herbs for savory depth.',
      Keto: 'Reduce the carbs, keep the healthy fats, and swap grains for leafy greens and nuts.',
      'Low-Spice': 'Keep the flavors bright while reducing chili and strong spices to gentle warmth.',
      'Gluten-Free': 'Swap wheat-based ingredients for gluten-free flour and fresh vegetable-based alternatives.'
    };

    setTweakResult(adaptations[preference]);
  };

  return (
    <div id="nb-page-recipe" className="nb-page nb-active bg-background min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <section className="flex-1 rounded-[2rem] bg-surface-container-lowest p-6 shadow-ambient">
            <button
              type="button"
              onClick={() => setCurrentPage('landing')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-container mb-6"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to recipes
            </button>

            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              className="w-full rounded-[1.75rem] object-cover max-h-[420px] mb-6"
            />

            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-4xl font-headline font-bold text-on-surface mb-3">
                    {selectedRecipe.title}
                  </h1>
                  <p className="text-base text-on-surface-variant max-w-2xl">{selectedRecipe.description}</p>
                </div>
                <div className="rounded-3xl bg-primary text-on-primary px-5 py-3 text-sm font-semibold">
                  ⭐ {selectedRecipe.rating}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-on-surface-variant">
                <div className="rounded-3xl bg-surface py-4 px-5">
                  <p className="font-bold text-on-surface">Prep time</p>
                  <p>{selectedRecipe.time} min</p>
                </div>
                <div className="rounded-3xl bg-surface py-4 px-5">
                  <p className="font-bold text-on-surface">Chef</p>
                  <p>{selectedRecipe.author}</p>
                </div>
                <div className="rounded-3xl bg-surface py-4 px-5">
                  <p className="font-bold text-on-surface">Cuisine</p>
                  <p>{selectedRecipe.cuisine}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 mt-8">
                <div className="rounded-[2rem] bg-surface p-6">
                  <h2 className="text-2xl font-headline font-bold mb-4">Ingredients</h2>
                  <ul className="space-y-3 text-on-surface-variant">
                    {selectedRecipe.ingredients.map((ingredient) => (
                      <li key={ingredient} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] bg-surface p-6">
                  <h2 className="text-2xl font-headline font-bold mb-4">AI Chef Tweak Tool</h2>
                  <p className="text-sm text-on-surface-variant mb-4">Adapt this recipe to your dietary preferences with one click.</p>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Select dietary preference</label>
                  <select
                    value={preference}
                    onChange={(e) => setPreference(e.target.value)}
                    className="w-full rounded-3xl border border-outline-variant bg-white py-3 px-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">Choose preference</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Keto">Keto</option>
                    <option value="Low-Spice">Low-Spice</option>
                    <option value="Gluten-Free">Gluten-Free</option>
                  </select>
                  <button
                    type="button"
                    onClick={handleTweak}
                    className="mt-6 w-full rounded-full bg-primary text-white py-4 font-semibold hover:bg-primary-container transition-colors"
                  >
                    Tweak It!
                  </button>
                  {tweakResult && (
                    <div className="mt-6 rounded-3xl bg-background p-4 border border-surface-container-highest text-sm text-on-surface-variant">
                      <p className="font-semibold text-on-surface mb-2">Suggested adaptation</p>
                      <p>{tweakResult}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-[2rem] bg-surface p-6 mt-6">
                <h2 className="text-2xl font-headline font-bold mb-4">Cooking instructions</h2>
                <ol className="list-decimal list-inside space-y-3 text-on-surface-variant">
                  {selectedRecipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
