// src/components/OverviewCards.js
import React from 'react';
import { HiOutlineShoppingCart, HiOutlineCurrencyDollar, HiOutlineUserAdd, HiOutlineViewGrid } from 'react-icons/hi';

const OverviewCards = () => {
  return (
    <div className="mb-6">
      {/* Overview Heading */}
      <div className="flex items-center mb-4">
        <HiOutlineViewGrid className="text-pink-500 mr-2" size={24} />
        <h2 className="text-lg font-semibold">OVERVIEW</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">
        {/* Turnover Card */}
        <div className="bg-pink-50 p-6 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h3 className="text-gray-600">TURNOVER</h3>
            <p className="text-2xl font-bold">$92,405</p>
            <p className="text-green-500 text-sm">+ 5.39% period change</p>
          </div>
          <div className="bg-pink-100 p-2 rounded-md">
            <HiOutlineShoppingCart className="text-pink-500" size={24} />
          </div>
        </div>

        {/* Profit Card */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h3 className="text-gray-600">PROFIT</h3>
            <p className="text-2xl font-bold">$32,218</p>
            <p className="text-green-500 text-sm">+ 5.39% period change</p>
          </div>
          <div className="bg-blue-100 p-2 rounded-md">
            <HiOutlineCurrencyDollar className="text-blue-500" size={24} />
          </div>
        </div>

        {/* New Customer Card */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h3 className="text-gray-600">NEW CUSTOMER</h3>
            <p className="text-2xl font-bold">298</p>
            <p className="text-green-500 text-sm">+ 6.84% period change</p>
          </div>
          <div className="bg-blue-100 p-2 rounded-md">
            <HiOutlineUserAdd className="text-blue-500" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;