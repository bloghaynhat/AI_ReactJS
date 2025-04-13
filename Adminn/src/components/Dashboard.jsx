// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import OverviewCards from './OverviewCards';
import DetailedReport from './DetailedReport';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">DASHBOARD</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-lg px-4 py-2 focus:outline-none"
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>
        <OverviewCards />
        <DetailedReport />
      </div>
    </div>
  );
};

export default Dashboard;