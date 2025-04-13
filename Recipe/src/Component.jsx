// Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const menuRef = useRef();

  const toggleMobileNav = () => setMobileNavOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileNavOpen(false);
      }
    };
    if (mobileNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileNavOpen]);

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md relative">
      {/* Logo */}
      <a href="/" className="flex items-center space-x-2">
        <img src="https://cdn-icons-png.flaticon.com/512/3176/3176364.png" alt="Chefify Logo" className="w-6 h-6" />
        <span className="text-pink-600 font-bold text-lg">Chefify</span>
      </a>

      {/* Search Bar */}
      <div className="flex-1 mx-6 hidden md:block">
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4 text-sm text-gray-600">
        <a href="#what-to-cook" className="hover:text-pink-600">What to cook</a>
        <a href="#recipes" className="hover:text-pink-600">Recipes</a>
        <a href="#ingredients" className="hover:text-pink-600">Ingredients</a>
        <a href="#occasions" className="hover:text-pink-600">Occasions</a>
        <a href="#about-us" className="hover:text-pink-600">About Us</a>
      </nav>

      {/* Buttons */}
      <div className="hidden md:flex items-center space-x-2 ml-4">
        <button className="px-4 py-1 text-sm text-pink-600 border border-pink-600 rounded-full hover:bg-pink-50">
          Login
        </button>
        <button className="px-4 py-1 text-sm text-white bg-pink-600 rounded-full hover:bg-pink-700">
          Subscribe
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={toggleMobileNav} className="md:hidden z-20 text-pink-600">
        {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Nav */}
      {mobileNavOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-md md:hidden z-10"
        >
          <nav className="flex flex-col p-4 space-y-2 text-sm text-gray-700">
            {[
              { label: 'What to cook', href: '#what-to-cook' },
              { label: 'Recipes', href: '#recipes' },
              { label: 'Ingredients', href: '#ingredients' },
              { label: 'Occasions', href: '#occasions' },
              { label: 'About Us', href: '#about-us' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileNavOpen(false)}
                className="hover:text-pink-600"
              >
                {label}
              </a>
            ))}
            <div className="flex gap-2 pt-4">
              <button className="flex-1 py-2 text-pink-600 border border-pink-600 rounded-full hover:bg-pink-50">
                Login
              </button>
              <button className="flex-1 py-2 text-white bg-pink-600 rounded-full hover:bg-pink-700">
                Subscribe
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const Banner = () => {
  return (
    <section className="relative h-[500px] w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589308078054-8328e9f9fd5c?auto=format&fit=crop&w=1470&q=80)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content Card */}
      <div className="relative z-10 max-w-md bg-white bg-opacity-90 p-6 rounded-2xl shadow-xl text-center">
        <div className="inline-block bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Recipe of the day
        </div>
        <h2 className="text-2xl font-bold text-pink-600 mb-2">Salad Caprese</h2>
        <p className="text-sm text-gray-700 mb-4">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
        </p>

        {/* Author */}
        <div className="flex items-center justify-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Salad Caprese"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm text-gray-800">Salad Caprese</span>
        </div>

        <button className="px-4 py-2 text-sm text-white bg-pink-600 rounded-full hover:bg-pink-700">
          View now →
        </button>
      </div>
    </section>
  );
};

const RecipeCard = ({ title, image, time, isNew = false }) => (
  <div className="relative bg-white rounded-xl shadow hover:shadow-lg transition-all duration-200 overflow-hidden">
    {isNew && (
      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
        New
      </div>
    )}
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h4 className="text-sm font-semibold text-gray-800 mb-1">{title}</h4>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>{time}</span>
        <button className="text-pink-500 hover:text-pink-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v12l7-3 7 3V5a2 2 0 00-2-2H5z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-6">
    <h2 className="text-2xl font-bold text-pink-600">{title}</h2>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

const RecipeSections = () => {
  const summerRecipes = [
    { 
      title: 'Italian-style tomato salad', 
      image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80', 
      time: '14 minutes' 
    },
    { 
      title: 'Spaghetti with vegetables and shrimp', 
      image: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=800&q=80', 
      time: '15 minutes', 
      isNew: true 
    },
    { 
      title: 'Lotus delight salad', 
      image: 'https://images.unsplash.com/photo-1604908177522-bb4f3fcfc502?auto=format&fit=crop&w=800&q=80', 
      time: '20 minutes' 
    },
    { 
      title: 'Snack cakes', 
      image: 'https://images.unsplash.com/photo-1613141411346-4b6803f20ed3?auto=format&fit=crop&w=800&q=80', 
      time: '21 minutes', 
      isNew: true 
    },
  ];
  
  const videoRecipes = [
    { 
      title: 'Salad with cabbage and shrimp', 
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', 
      time: '32 minutes' 
    },
    { 
      title: 'Salad of cove beans, shrimp and potatoes', 
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', 
      time: '20 minutes' 
    },
    { 
      title: 'Sunny-side up fried egg', 
      image: 'https://images.unsplash.com/photo-1603048298542-e9c1a04e14b4?auto=format&fit=crop&w=800&q=80', 
      time: '15 minutes' 
    },
    { 
      title: 'Lotus delight salad', 
      image: 'https://images.unsplash.com/photo-1600628422018-021b979a01da?auto=format&fit=crop&w=800&q=80', 
      time: '20 minutes' 
    },
  ];
  

  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="This Summer Recipes" 
          subtitle="We have all your Independence Day sweets covered." 
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {summerRecipes.map((r, index) => (
            <RecipeCard key={index} {...r} />
          ))}
        </div>

        <SectionHeader 
          title="Recipes With Videos" 
          subtitle="Cooking Up Culinary Creations with Step-by-Step Videos" 
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videoRecipes.map((r, index) => (
            <RecipeCard key={index} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <p className="text-sm mb-4">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-full text-gray-800"
            />
            <button className="px-4 py-2 bg-pink-500 rounded-r-full text-sm">Send</button>
          </div>
        </div>

        {/* Learn More */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Learn More</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">Our Cooks</a></li>
            <li><a href="#" className="hover:underline">See Our Features</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Shop</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">Gift Subscription</a></li>
            <li><a href="#" className="hover:underline">Send Us Feedback</a></li>
          </ul>
        </div>

        {/* Recipes */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Recipes</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">What to Cook This Week</a></li>
            <li><a href="#" className="hover:underline">Pasta</a></li>
            <li><a href="#" className="hover:underline">Dinner</a></li>
            <li><a href="#" className="hover:underline">Healthy</a></li>
            <li><a href="#" className="hover:underline">Vegetarian</a></li>
            <li><a href="#" className="hover:underline">Vegan</a></li>
            <li><a href="#" className="hover:underline">Christmas</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        <div className="flex justify-center items-center space-x-2">
          <img src="/logo.png" alt="Chefify Logo" className="w-5 h-5" />
          <span className="font-bold">Chefify</span>
        </div>
        <p className="mt-2">© 2023 Chefify Company · <a href="#" className="underline">Terms of Service</a> · <a href="#" className="underline">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export { Header, Banner, RecipeSections, Footer };
