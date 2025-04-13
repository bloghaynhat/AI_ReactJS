// // Dashboard.jsx
// import React, { useState } from 'react';
// import { Download, Upload, Search, Bell, User } from 'lucide-react';

// const users = [
//   {
//     name: 'Elizabeth Lee',
//     company: 'AvatarSystems',
//     value: '$359',
//     date: '10/07/2023',
//     status: 'New',
//     img: 'https://source.unsplash.com/40x40/?woman,face'
//   },
//   {
//     name: 'Carlos Garcia',
//     company: 'SmoozeShift',
//     value: '$747',
//     date: '24/07/2023',
//     status: 'New',
//     img: 'https://source.unsplash.com/40x40/?man,face'
//   },
//   {
//     name: 'Elizabeth Bailey',
//     company: 'Prime Time Telecom',
//     value: '$564',
//     date: '08/08/2023',
//     status: 'In-progress',
//     img: 'https://source.unsplash.com/40x40/?woman,portrait'
//   },
//   {
//     name: 'Ryan Brown',
//     company: 'OmniTech Corporation',
//     value: '$541',
//     date: '31/08/2023',
//     status: 'In-progress',
//     img: 'https://source.unsplash.com/40x40/?man,portrait'
//   },
//   {
//     name: 'Ryan Young',
//     company: 'DataStream Inc.',
//     value: '$769',
//     date: '01/05/2023',
//     status: 'Completed',
//     img: 'https://source.unsplash.com/40x40/?man,face,happy'
//   },
//   {
//     name: 'Hailey Adams',
//     company: 'FlowRush',
//     value: '$922',
//     date: '10/06/2023',
//     status: 'Completed',
//     img: 'https://source.unsplash.com/40x40/?woman,face,happy'
//   },
// ];

// const StatusBadge = ({ status }) => {
//   const base = 'text-xs font-semibold px-2 py-1 rounded-full';
//   const color = {
//     'New': 'bg-blue-100 text-blue-600',
//     'In-progress': 'bg-yellow-100 text-yellow-600',
//     'Completed': 'bg-green-100 text-green-600'
//   };
//   return <span className={`${base} ${color[status]}`}>{status}</span>;
// };

// const Dashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.company.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen flex font-sans text-gray-800">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-lg p-6 space-y-6">
//         <div className="text-pink-600 font-bold text-2xl">Logo</div>
//         <nav className="space-y-2">
//           <a href="#" className="flex items-center space-x-2 text-pink-600 font-medium">
//             <span className="bg-pink-100 p-1 rounded">🏠</span>
//             <span>Dashboard</span>
//           </a>
//           <a href="#" className="flex items-center space-x-2 hover:text-pink-500">
//             <span>📁</span>
//             <span>Projects</span>
//           </a>
//           <a href="#" className="flex items-center space-x-2 hover:text-pink-500">
//             <span>👥</span>
//             <span>Teams</span>
//           </a>
//           <a href="#" className="flex items-center space-x-2 hover:text-pink-500">
//             <span>📊</span>
//             <span>Analytics</span>
//           </a>
//           <a href="#" className="flex items-center space-x-2 hover:text-pink-500">
//             <span>💬</span>
//             <span>Messages</span>
//           </a>
//           <a href="#" className="flex items-center space-x-2 hover:text-pink-500">
//             <span>⚙️</span>
//             <span>Integrations</span>
//           </a>
//         </nav>
//         <div className="mt-auto bg-blue-100 rounded p-4 text-center">
//           <div className="font-bold mb-2">V2.0 is available</div>
//           <button className="text-white bg-pink-600 px-4 py-2 rounded-full text-sm">Try now</button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-50 p-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-pink-600">Dashboard</h1>
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="border border-gray-300 rounded px-2 py-1 text-sm"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search className="w-5 h-5 text-gray-400" />
//             <Bell className="w-5 h-5 text-gray-400" />
//             <User className="w-6 h-6 text-pink-600" />
//           </div>
//         </div>

//         {/* Overview Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//           <div className="bg-white p-4 rounded shadow">
//             <p className="text-sm text-gray-400">Turnover</p>
//             <h2 className="text-2xl font-bold">$92,405</h2>
//             <p className="text-green-500 text-sm mt-1">▲ 5.39% period of change</p>
//           </div>
//           <div className="bg-white p-4 rounded shadow">
//             <p className="text-sm text-gray-400">Profit</p>
//             <h2 className="text-2xl font-bold">$32,218</h2>
//             <p className="text-green-500 text-sm mt-1">▲ 5.39% period of change</p>
//           </div>
//           <div className="bg-white p-4 rounded shadow">
//             <p className="text-sm text-gray-400">New customer</p>
//             <h2 className="text-2xl font-bold">298</h2>
//             <p className="text-green-500 text-sm mt-1">▲ 6.84% period of change</p>
//           </div>
//         </div>

//         {/* Report Table */}
//         <div className="bg-white p-6 rounded shadow">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">Detailed report</h2>
//             <div className="flex gap-2">
//               <button className="flex items-center gap-1 text-sm text-white bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded">
//                 <Upload className="w-4 h-4" /> Import
//               </button>
//               <button className="flex items-center gap-1 text-sm text-pink-600 border border-pink-600 hover:bg-pink-50 px-3 py-1 rounded">
//                 <Download className="w-4 h-4" /> Export
//               </button>
//             </div>
//           </div>
//           <table className="w-full text-left text-sm">
//             <thead>
//               <tr className="text-gray-500 border-b">
//                 <th className="py-2"><input type="checkbox" /></th>
//                 <th className="py-2">CUSTOMER NAME</th>
//                 <th className="py-2">COMPANY</th>
//                 <th className="py-2">ORDER VALUE</th>
//                 <th className="py-2">ORDER DATE</th>
//                 <th className="py-2">STATUS</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.map((user, index) => (
//                 <tr key={index} className="border-b hover:bg-gray-50">
//                   <td className="py-3"><input type="checkbox" /></td>
//                   <td className="py-3 flex items-center gap-2">
//                     <img src={user.img} alt={user.name} className="w-8 h-8 rounded-full" />
//                     {user.name}
//                   </td>
//                   <td className="py-3">{user.company}</td>
//                   <td className="py-3">{user.value}</td>
//                   <td className="py-3">{user.date}</td>
//                   <td className="py-3"><StatusBadge status={user.status} /></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           <div className="flex justify-end mt-4 space-x-1">
//             {[1, 2, 3, 4, 5].map((n) => (
//               <button
//                 key={n}
//                 className={`w-8 h-8 rounded-full text-sm font-semibold ${n === 1 ? 'bg-pink-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
//               >
//                 {n}
//               </button>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
