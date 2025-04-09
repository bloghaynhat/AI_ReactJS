// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Chefify Logo" className="w-6 h-6" />
        <span className="text-pink-600 font-bold text-lg">Chefify</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-4 text-sm text-gray-600">
        <a href="#" className="hover:text-pink-600">What to cook</a>
        <a href="#" className="hover:text-pink-600">Recipes</a>
        <a href="#" className="hover:text-pink-600">Ingredients</a>
        <a href="#" className="hover:text-pink-600">Occasions</a>
        <a href="#" className="hover:text-pink-600">About Us</a>
      </nav>

      {/* Buttons */}
      <div className="flex items-center space-x-2 ml-4">
        <button className="px-4 py-1 text-sm text-pink-600 border border-pink-600 rounded-full hover:bg-pink-50">
          Login
        </button>
        <button className="px-4 py-1 text-sm text-white bg-pink-600 rounded-full hover:bg-pink-700">
          Subscribe
        </button>
      </div>
    </header>
  );
};

const Banner = () => {
  return (
    <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(/banner.jpg)' }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg text-center">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
          Recipe of the day
        </div>
        <h2 className="mt-6 text-pink-600 font-bold text-xl">Salad Caprese</h2>
        <p className="text-gray-600 text-sm mt-2">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
        </p>
        <div className="mt-4 flex flex-col items-center">
          <img src="/avatar.jpg" alt="Author" className="w-10 h-10 rounded-full mb-1" />
          <span className="text-sm font-medium text-gray-700">Salad Caprese</span>
        </div>
        <button className="mt-4 px-5 py-2 bg-pink-600 text-white rounded-full text-sm hover:bg-pink-700">
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
    { title: 'Italian-style tomato salad', image: '/recipe1.jpg', time: '14 minutes' },
    { title: 'Spaghetti with vegetables and shrimp', image: '/recipe2.jpg', time: '15 minutes', isNew: true },
    { title: 'Lotus delight salad', image: '/recipe3.jpg', time: '20 minutes' },
    { title: 'Snack cakes', image: '/recipe4.jpg', time: '21 minutes', isNew: true },
  ];

  const videoRecipes = [
    { title: 'Salad with cabbage and shrimp', image: '/recipe5.jpg', time: '32 minutes' },
    { title: 'Salad of cove beans, shrimp and potatoes', image: '/recipe6.jpg', time: '20 minutes' },
    { title: 'Sunny-side up fried egg', image: '/recipe7.jpg', time: '15 minutes' },
    { title: 'Lotus delight salad', image: '/recipe8.jpg', time: '20 minutes' },
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
