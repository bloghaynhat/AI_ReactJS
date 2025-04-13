// src/components/DetailedReport.js
import React from 'react';

const customers = [
  {
    name: 'Elizabeth Lee',
    company: 'AvatarSystems',
    orderValue: '$559',
    orderDate: '10/07/2023',
    status: 'New',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
  },
  {
    name: 'Carlos Garcia',
    company: 'SnoozeShift',
    orderValue: '$574',
    orderDate: '24/07/2023',
    status: 'New',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop',
  },
  {
    name: 'Elizabeth Bailey',
    company: 'Prime Time Telecom',
    orderValue: '$564',
    orderDate: '08/08/2023',
    status: 'In progress',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop',
  },
  {
    name: 'Ryan Brown',
    company: 'OmniTech Corporation',
    orderValue: '$541',
    orderDate: '31/08/2023',
    status: 'In progress',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
  },
  {
    name: 'Ryan Young',
    company: 'DataStream Inc',
    orderValue: '$576',
    orderDate: '01/05/2023',
    status: 'Completed',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=50&h=50&fit=crop',
  },
  {
    name: 'Hailey Adams',
    company: 'FlowRush',
    orderValue: '$522',
    orderDate: '10/08/2023',
    status: 'Completed',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=50&h=50&fit=crop',
  },
];

const DetailedReport = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">DETAILED REPORT</h3>
        <div className="space-x-2">
          <button className="border px-4 py-2 rounded-lg">Import</button>
          <button className="border px-4 py-2 rounded-lg">Export</button>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600">
            <th className="py-2">
              <input type="checkbox" />
            </th>
            <th className="py-2">CUSTOMER NAME</th>
            <th className="py-2">COMPANY</th>
            <th className="py-2">ORDER VALUE</th>
            <th className="py-2">ORDER DATE</th>
            <th className="py-2">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="border-t">
              <td className="py-4">
                <input type="checkbox" />
              </td>
              <td className="py-4 flex items-center space-x-2">
                <img src={customer.avatar} alt={customer.name} className="w-8 h-8 rounded-full" />
                <span>{customer.name}</span>
              </td>
              <td className="py-4">{customer.company}</td>
              <td className="py-4">{customer.orderValue}</td>
              <td className="py-4">{customer.orderDate}</td>
              <td className="py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    customer.status === 'New'
                      ? 'bg-blue-100 text-blue-600'
                      : customer.status === 'In progress'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-green-100 text-green-600'
                  }`}
                >
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600">69 results</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-lg">←</button>
          <button className="px-3 py-1 bg-pink-500 text-white rounded-lg">1</button>
          <button className="px-3 py-1 border rounded-lg">2</button>
          <button className="px-3 py-1 border rounded-lg">3</button>
          <button className="px-3 py-1 border rounded-lg">...</button>
          <button className="px-3 py-1 border rounded-lg">10</button>
          <button className="px-3 py-1 border rounded-lg">11</button>
          <button className="px-3 py-1 border rounded-lg">→</button>
        </div>
      </div>
    </div>
  );
};

export default DetailedReport;