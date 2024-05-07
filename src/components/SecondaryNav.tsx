import React, { useState } from 'react';

const SecondaryNav: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <div>
      {/* Header Navbar */}
      <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <div className="flex items-center">
          {/* Drawer Toggle */}
          <button
            onClick={toggleDrawer}
            className="mr-4 p-2 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none lg:hidden"
          >
            <span>☰</span> {/* Hamburger Icon */}
          </button>

          {/* Logo */}
          <a href="/" className="text-lg font-bold mr-6">Emazon</a>

          {/* Main Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <a href="/deals" className="hover:text-yellow-500">Today's Deals</a>
            <a href="/buy-again" className="hover:text-yellow-500">Buy Again</a>
            <a href="/browsing-history" className="hover:text-yellow-500">Browsing History</a>
          </nav>
        </div>
      </header>

      {/* Drawer/Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 ${drawerOpen ? 'block' : 'hidden'}`}
        onClick={toggleDrawer}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-64 bg-white p-4 text-black"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          <nav className="flex flex-col space-y-2">
            <a href="/deals" className="hover:text-blue-500">Today's Deals</a>
            <a href="/buy-again" className="hover:text-blue-500">Buy Again</a>
            <a href="/browsing-history" className="hover:text-blue-500">Browsing History</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;