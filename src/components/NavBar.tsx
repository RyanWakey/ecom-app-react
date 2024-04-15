import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-2 text-white flex justify-between items-center">

      {/* Company Logo */}
      <div className="flex items-center">
        <img src="/images/Emazon.png" alt="Emazon Logo" className="mr-3 h-12" /> {}
        <div className="text-4xl font-bold mr-10"> {}
          
        </div>
      </div>

      <div className="flex border border-gray-300 rounded overflow-hidden">
        {/* Category Dropdown */}
        <select className="bg-white text-gray-700 border-r" style={{ width: '100px' }}>
          <option>All</option>
          <option>Books</option>
          <option>Electronics</option>
          
        </select>

        {/* Search Input */}
        <input
          className="px-64 w-full"
          type="text"
          placeholder="Search Emazon.co.uk"
        />

        {/* Search Button */}
        <button className="bg-orange-400 px-4 py-2">
          <svg className="text-white w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M6 8l-2 2m0 0l2 2m-2-2h13" />
          </svg>
        </button>
      </div>

      <div className="text-lg"> {}
        <a href="/login" className="p-3 hover:underline">Login</a>
        <a href="/cart" className="p-3 hover:underline">Basket (0)</a>
      </div>
    </nav>
  );
};

export default Navbar;