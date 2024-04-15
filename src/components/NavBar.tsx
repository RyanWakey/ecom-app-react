import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <img src="/images/emazon.png" alt="Emazon Logo" style={{ height: '60px', marginRight: '20px' }} />
        <div className="text-3xl font-bold">
          <a href="/" style={{ lineHeight: '60px' }}>Emazon</a>  {/* Align text height with logo */}
        </div>
      </div>

      <div className="flex-grow">
        <input
          type="text"
          placeholder="Search..."
          className="rounded p-2 w-full max-w-xl" // Increased width
        />
        <button className="bg-blue-500 hover:bg-blue-700 rounded p-2 ml-2">Search</button>
      </div>

      <div>
        <a href="/login" className="p-2 hover:underline">Login</a>
        <a href="/cart" className="p-2 hover:underline">Cart (0)</a>
      </div>
    </nav>
  );
};

export default Navbar;