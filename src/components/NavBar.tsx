import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {
            <img src="/images/emazon.png" alt="Emazon Logo" />
        }
        <div className="text-2xl font-bold">
          <a href="/">Emazon</a>
        </div>

        {
            // Search bar
        }
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="rounded p-2"
          />
          <button className="bg-blue-500 hover:bg-blue-700 rounded p-2 ml-2">Search</button>
        </div>

        {
            // Profile and Cart 
        }
        <div>
          <a href="/login" className="p-2 hover:underline">Login</a>
          <a href="/cart" className="p-2 hover:underline">Cart (0)</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;