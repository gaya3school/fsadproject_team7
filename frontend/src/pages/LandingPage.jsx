import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigation } from '../components/Navigation';
import { RecipeCard } from '../components/RecipeCard';

export const LandingPage = () => {
  const { selectRecipe, setCurrentPage, currentPage } = useAuth();

  const [discoverRecipes] = useState([
    {
      id: 21,
      title: 'Paneer Tikka Masala',
      description: 'Grilled paneer in a rich, creamy spiced tomato sauce',
      image: 'https://unsplash.com/photos/a-white-bowl-filled-with-stew-next-to-a-leafy-branch-jmp5ztWNPnU',
      rating: 4.9,
      author: 'Neha Singh',
      time: 35,
      cuisine: 'Indian',
      ingredients: ['Paneer cubes', 'Tomato puree', 'Cream', 'Garam masala', 'Kasuri methi'],
      instructions: [
        'Marinate paneer in yogurt and spices.',
        'Grill until charred and set aside.',
        'Simmer tomato sauce with spices and cream.',
        'Add paneer and finish with fenugreek leaves.'
      ]
    },
    {
      id: 22,
      title: 'Hyderabadi Dum Biryani',
      description: 'Aromatic layered biryani with saffron rice and tender meat',
      image: 'https://images.unsplash.com/photo-1604909157904-714a36cf2012?auto=format&fit=crop&w=1000&q=80',
      rating: 5.0,
      author: 'Ravi Kumar',
      time: 60,
      cuisine: 'Indian',
      ingredients: ['Basmati rice', 'Goat meat', 'Yogurt', 'Fried onions', 'Saffron'],
      instructions: [
        'Marinate meat with spices and yogurt.',
        'Partially cook rice with whole spices.',
        'Layer meat and rice, seal the pot, and dum cook.',
        'Let it rest before serving with raita.'
      ]
    },
    {
      id: 23,
      title: 'Mirchi Bajji',
      description: 'Crispy chili fritters with tangy tamarind chutney',
      image: 'https://images.unsplash.com/photo-1599058917218-ec238fd9d9fa?auto=format&fit=crop&w=1000&q=80',
      rating: 4.7,
      author: 'Priya Reddy',
      time: 25,
      cuisine: 'Indian',
      ingredients: ['Green chilies', 'Besan flour', 'Red chili powder', 'Asafoetida', 'Oil'],
      instructions: [
        'Slit chilies and stuff with salt.',
        'Whisk besan batter with spices.',
        'Dip chilies in batter and deep fry.',
        'Serve hot with chutney.'
      ]
    },
    {
      id: 24,
      title: 'Nimmakaya Pulihora',
      description: 'Tangy lemon rice tossed with curry leaves and peanuts',
      image: 'https://images.unsplash.com/photo-1572441712125-c6b8c7b48532?auto=format&fit=crop&w=1000&q=80',
      rating: 4.8,
      author: 'Anjali Rao',
      time: 20,
      cuisine: 'Indian',
      ingredients: ['Cooked rice', 'Lemon juice', 'Peanuts', 'Curry leaves', 'Mustard seeds'],
      instructions: [
        'Heat oil and temper mustard, chilies, and curry leaves.',
        'Add peanuts and rice.',
        'Toss with lemon juice and turmeric.',
        'Serve warm with papad.'
      ]
    }
  ]);

  const [trendingRecipes] = useState([
    {
      id: 31,
      title: 'Gongura Pachadi',
      description: 'Tangy sorrel chutney with savory spice',
      image: 'https://images.unsplash.com/photo-1620208805635-93d9b827672d?auto=format&fit=crop&w=1000&q=80',
      rating: 4.8,
      author: 'Devi Sharma',
      time: 30,
      cuisine: 'Indian',
      ingredients: ['Gongura leaves', 'Red chilies', 'Garlic', 'Mustard seeds', 'Oil'],
      instructions: [
        'Saute gongura leaves with chilies and garlic.',
        'Temper mustard and add to the paste.',
        'Grind into a coarse chutney.',
        'Serve with hot rice.'
      ]
    },
    {
      id: 32,
      title: 'Pachi Pulusu',
      description: 'Raw tamarind soup with onions and spices',
      image: 'https://images.unsplash.com/photo-1621966091705-43b8f3daeeb3?auto=format&fit=crop&w=1000&q=80',
      rating: 4.7,
      author: 'Sita Reddy',
      time: 20,
      cuisine: 'Indian',
      ingredients: ['Tamarind extract', 'Onions', 'Green chilies', 'Curry leaves', 'Jaggery'],
      instructions: [
        'Mix tamarind water with jaggery and salt.',
        'Add chopped onions, chilies, and curry leaves.',
        'Garnish with coriander.',
        'Serve chilled or at room temperature.'
      ]
    },
    {
      id: 33,
      title: 'Ellipaya Karam',
      description: 'Spicy sesame sauce for rice and snacks',
      image: 'https://images.unsplash.com/photo-1604908177424-6c4fed5f4001?auto=format&fit=crop&w=1000&q=80',
      rating: 4.6,
      author: 'Ramesh Babu',
      time: 15,
      cuisine: 'Indian',
      ingredients: ['Sesame seeds', 'Red chilies', 'Garlic', 'Tamarind paste', 'Salt'],
      instructions: [
        'Dry roast sesame and chilies.',
        'Grind with garlic and tamarind.',
        'Season with salt.',
        'Serve with hot rice.'
      ]
    },
    {
      id: 34,
      title: 'Samosa',
      description: 'Crispy triangular pastry filled with spiced potatoes',
      image: 'https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=1000&q=80',
      rating: 4.9,
      author: 'Raj Kapoor',
      time: 40,
      cuisine: 'Indian',
      ingredients: ['Flour', 'Potatoes', 'Peas', 'Cumin', 'Garam masala'],
      instructions: [
        'Make a crisp dough and prepare potato filling.',
        'Shape into triangles and seal edges.',
        'Deep fry until golden brown.',
        'Serve with chutney.'
      ]
    },
    {
      id: 35,
      title: 'Chicken Tikka',
      description: 'Char-grilled spiced chicken pieces with smoky flavor',
      image: 'https://images.unsplash.com/photo-1514516870923-8c986a7d62aa?auto=format&fit=crop&w=1000&q=80',
      rating: 4.9,
      author: 'Amit Shah',
      time: 45,
      cuisine: 'Indian',
      ingredients: ['Chicken pieces', 'Yogurt', 'Tikka masala', 'Lemon juice', 'Garlic'],
      instructions: [
        'Marinate chicken in spiced yogurt.',
        'Skewer and grill until lightly charred.',
        'Brush with butter and garnish.',
        'Serve with onion and mint chutney.'
      ]
    },
    {
      id: 36,
      title: 'Makki ki Roti',
      description: 'Corn flatbread traditionally served with saag',
      image: 'https://images.unsplash.com/photo-1604908814253-16b9bfe3f14d?auto=format&fit=crop&w=1000&q=80',
      rating: 4.7,
      author: 'Mohan Lal',
      time: 25,
      cuisine: 'Indian',
      ingredients: ['Cornmeal', 'Warm water', 'Salt', 'Ghee'],
      instructions: [
        'Mix cornmeal with hot water and salt.',
        'Flatten into rotis and cook on a hot tawa.',
        'Apply ghee and serve hot.',
        'Pair with sarson ka saag.'
      ]
    },
    {
      id: 37,
      title: 'Sarson ka Saag',
      description: 'Mustard greens curry full of winter warmth',
      image: 'https://images.unsplash.com/photo-1617191518982-4a1da8a6b74f?auto=format&fit=crop&w=1000&q=80',
      rating: 4.8,
      author: 'Barjinder Kaur',
      time: 50,
      cuisine: 'Indian',
      ingredients: ['Mustard greens', 'Spinach', 'Maize flour', 'Ginger', 'Garlic'],
      instructions: [
        'Boil greens and mash well.',
        'Saute aromatics and add mashed greens.',
        'Thicken with maize flour.',
        'Serve with makki ki roti.'
      ]
    },
    {
      id: 38,
      title: 'Masala Dosa',
      description: 'Crispy pancake filled with spiced potato masala',
      image: 'https://images.unsplash.com/photo-1592928302481-0ad2e9b7d7c3?auto=format&fit=crop&w=1000&q=80',
      rating: 4.9,
      author: 'Lakshmi Nair',
      time: 35,
      cuisine: 'Indian',
      ingredients: ['Dosa batter', 'Potatoes', 'Onion', 'Mustard seeds', 'Turmeric'],
      instructions: [
        'Cook potato filling with spices.',
        'Spread dosa batter on a hot griddle.',
        'Place filling and fold.',
        'Serve with coconut chutney and sambar.'
      ]
    }
  ]);

  const [localUpdates] = useState([
    {
      id: 1,
      user: 'Lina Patel',
      update: 'Added a new dairy-free twist to pizza sauce',
      avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      user: 'Mateo Alvarez',
      update: 'Shared a seasonally spiced curry base',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      user: 'Aisha Khan',
      update: 'Improved her gluten-free brownie recipe',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
    }
  ]);

  const [communityRecipes] = useState([
    {
      id: 101,
      title: 'Street Taco Bowl',
      image: 'https://images.unsplash.com/photo-1510626176961-4b37b3e4043f?auto=format&fit=crop&w=1000&q=80',
      description: 'Crispy tacos made into a vibrant bowl with salsa and lime.'
    },
    {
      id: 102,
      title: 'Sunrise Smoothie',
      image: 'https://images.unsplash.com/photo-1509401933614-0a2ae2184f31?auto=format&fit=crop&w=1000&q=80',
      description: 'Bright morning smoothie with berries and coconut milk.'
    },
    {
      id: 103,
      title: 'Spiced Lentil Soup',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
      description: 'Comforting lentil soup with warming Indian spices.'
    },
    {
      id: 104,
      title: 'Avocado Toast',
      image: 'https://images.unsplash.com/photo-1559638747-2b8a546da5ef?auto=format&fit=crop&w=1000&q=80',
      description: 'Toasted bread topped with creamy mashed avocado and chili.'
    }
  ]);

  const sectionTitle = currentPage === 'trending'
    ? 'Trending Now'
    : currentPage === 'neighborhood'
    ? 'Neighborhood Updates'
    : currentPage === 'upload'
    ? 'Upload to the Community'
    : 'Discover Local Flavors';

  const sectionSubtitle = currentPage === 'trending'
    ? 'The recipes your neighbors are loving right now.'
    : currentPage === 'neighborhood'
    ? 'See who locally updated recipes and what they changed.'
    : currentPage === 'upload'
    ? 'Share your latest creation with the community.'
    : 'Explore authentic recipes shared by your neighbors.';

  return (
    <div id="nb-page-landing" className="nb-page nb-active">
      <Navigation />
      <main className="flex flex-col lg:flex-row min-h-screen">
        <aside className="hidden lg:flex flex-col h-screen sticky left-0 top-0 overflow-y-auto bg-surface dark:bg-inverse-surface w-64 p-4 border-r border-surface-variant">
          <h3 className="text-lg font-headline font-bold text-on-surface mb-6">Explore</h3>
          <nav className="space-y-3">
            <button
              type="button"
              onClick={() => setCurrentPage('discover')}
              className={`flex w-full items-center gap-3 px-4 py-3 rounded-full transition-colors ${currentPage === 'discover' ? 'bg-primary/10 text-primary' : 'hover:bg-surface-container text-on-surface-variant'}`}
            >
              <span className="material-symbols-outlined">explore</span>
              <span className="font-label text-sm">Discover</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage('trending')}
              className={`flex w-full items-center gap-3 px-4 py-3 rounded-full transition-colors ${currentPage === 'trending' ? 'bg-primary/10 text-primary' : 'hover:bg-surface-container text-on-surface-variant'}`}
            >
              <span className="material-symbols-outlined">trending_up</span>
              <span className="font-label text-sm">Trending</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage('neighborhood')}
              className={`flex w-full items-center gap-3 px-4 py-3 rounded-full transition-colors ${currentPage === 'neighborhood' ? 'bg-primary/10 text-primary' : 'hover:bg-surface-container text-on-surface-variant'}`}
            >
              <span className="material-symbols-outlined">location_on</span>
              <span className="font-label text-sm">Neighborhood</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage('upload')}
              className={`flex w-full items-center gap-3 px-4 py-3 rounded-full transition-colors ${currentPage === 'upload' ? 'bg-primary/10 text-primary' : 'hover:bg-surface-container text-on-surface-variant'}`}
            >
              <span className="material-symbols-outlined">cloud_upload</span>
              <span className="font-label text-sm">Upload</span>
            </button>
          </nav>
        </aside>

        <div className="flex-1 p-6 md:p-8 overflow-y-auto">
          <section className="mb-12">
            <div className="rounded-[2rem] bg-surface-container-lowest p-8 shadow-ambient border border-surface-variant overflow-hidden">
              <div className="grid gap-6 lg:grid-cols-[1.35fr_0.9fr] items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary w-fit">
                    {currentPage === 'upload'
                      ? 'Share your latest recipe'
                      : currentPage === 'neighborhood'
                      ? 'Local chef activity'
                      : currentPage === 'trending'
                      ? 'Rising flavors'
                      : 'Top picks from your neighborhood'}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight">
                    {sectionTitle}
                  </h1>
                  <p className="text-lg text-on-surface-variant max-w-2xl">{sectionSubtitle}</p>
                </div>
                <div className="rounded-[2rem] p-6 bg-gradient-to-br from-primary-fixed/50 to-secondary-container/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary/90 font-bold mb-4">NextoBite insight</p>
                  <p className="text-on-primary/90 text-base leading-relaxed">
                    Discover curated local recipes and stay connected with your neighborhood chefs. Tap a card to view full recipe details and customize it with the AI tweak tool.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {currentPage === 'neighborhood' && (
            <section className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {localUpdates.map((update) => (
                  <div key={update.id} className="rounded-[2rem] bg-surface-container-lowest p-6 shadow-ambient">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={update.avatar} alt={update.user} className="w-14 h-14 rounded-full object-cover" />
                      <div>
                        <p className="font-headline font-bold text-on-surface">{update.user}</p>
                        <p className="text-sm text-on-surface-variant">Recently updated a local recipe</p>
                      </div>
                    </div>
                    <p className="text-on-surface-variant">{update.update}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[2rem] bg-surface p-6 shadow-ambient">
                <h2 className="text-2xl font-headline font-bold mb-4">Hot Local Updates</h2>
                <p className="text-on-surface-variant">This section shows the latest local recipe improvements from your neighborhood members.</p>
              </div>
            </section>
          )}

          {currentPage === 'upload' && (
            <section className="space-y-8">
              <div className="grid grid-cols-1 xl:grid-cols-[2.2fr_1fr] gap-6">
                <div className="rounded-[2rem] bg-surface-container-lowest p-6 shadow-ambient">
                  <h2 className="text-2xl font-headline font-bold mb-4">Upload Your Recipe</h2>
                  <p className="text-on-surface-variant mb-6">Share your latest creation with the NextoBite community. Upload a photo and describe your recipe.</p>
                  <div className="space-y-4">
                    <input type="text" placeholder="Recipe title" className="w-full rounded-3xl border border-outline-variant bg-white py-3 px-4 focus:outline-none" />
                    <input type="text" placeholder="Short description" className="w-full rounded-3xl border border-outline-variant bg-white py-3 px-4 focus:outline-none" />
                    <input type="file" className="w-full text-sm text-on-surface-variant" />
                    <button type="button" className="w-full rounded-full bg-primary text-white py-4 font-semibold hover:bg-primary-container transition-colors">
                      Upload recipe
                    </button>
                  </div>
                </div>
                <div className="rounded-[2rem] bg-surface p-6 shadow-ambient">
                  <h2 className="text-2xl font-headline font-bold mb-4">Community Uploads</h2>
                  <div className="grid gap-4">
                    {communityRecipes.map((item) => (
                      <div key={item.id} className="rounded-3xl overflow-hidden bg-white shadow-sm">
                        <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                          <p className="font-semibold text-on-surface">{item.title}</p>
                          <p className="text-sm text-on-surface-variant">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {(currentPage === 'discover' || currentPage === 'trending') && (
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-2xl font-headline font-bold text-on-surface">Featured Recipes</h2>
                <p className="text-sm text-on-surface-variant">Tap any card to open the full recipe.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(currentPage === 'trending' ? trendingRecipes : discoverRecipes).map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} onClick={selectRecipe} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};
