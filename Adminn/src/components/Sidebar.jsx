// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg h-screen p-6">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-bold text-pink-500">LOGO</h2>
      </div>
      <nav className="space-y-4">
        <a href="#" className="flex items-center space-x-2 text-pink-500 font-semibold">
          <span>📊</span>
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600">
          <span>📈</span>
          <span>Projects</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600">
          <span>👥</span>
          <span>Teams</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600">
          <span>📊</span>
          <span>Analytics</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600">
          <span>✉️</span>
          <span>Messages</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600">
          <span>🔗</span>
          <span>Integrations</span>
        </a>
      </nav>
      <div className="mt-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1617957681922-1e489c0b656d?w=150&h=150&fit=crop"
            alt="Version Update"
            className="mb-4"
          />
          <p className="text-sm text-gray-600">V2.0 IS AVAILABLE</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Try now</button>
        </div>
        <p className="text-xs text-gray-500 mt-4">Made with ❤️ by Visily</p>
      </div>
    </div>
  );
};

export default Sidebar;