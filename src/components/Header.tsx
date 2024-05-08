// Header.tsx
import React, { useState } from 'react';
import Dropdown from './Dropdown';

// Interface for props
interface HeaderProps {
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount = 0 }) => {
  const categoryOptions = ["All", "Books", "Electronics", "LongLongLongLong"];
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <header>
      {/* Top Navigation Bar */}
      <nav className="bg-gray-900 p-1 py-2 text-white flex justify-between items-center">
        {/* Company Logo */}
        <div className="flex items-center">
          <img src="/images/Emazon.png" alt="Emazon Logo" className="ml-3 h-10" />
        </div>

        {/* Search Bar and Category Dropdown */}
        <div className="flex border border-gray-500 rounded overflow-hidden text-sm">
          <Dropdown options={categoryOptions} />
          <input className="px-48 w-full text-xs" type="text" placeholder="Search Emazon.co.uk" />
          <button className="bg-yellow-500 px-2 py-2">
            <img src="/images/MagnifyingGlass.png" alt="Search" className="h-6 w-10" />
          </button>
        </div>

        {/* Profile and Basket Icon */}
        <div className="flex items-center mr-2">
          <a href="/register" className="hover:underline mr-4">Register</a>
          <a href="/login" className="hover:underline mr-4">Login</a>
          <div className="relative h-10">
            <img src="/images/CartIcon.png" alt="Basket" className="h-full" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {cartItemCount}
            </span>
            <span className="ml-2 flex items-center -mt-3 text-sm">Basket</span>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation Bar */}
      <div className="flex justify-between items-center p-1.5 bg-gray-800 text-white">
        <div className="flex items-center">
          {/* Drawer Toggle */}
          <button
            onClick={toggleDrawer}
            className="mr-4 p-2 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none lg:hidden"
          >
            <span>☰</span> {/* Hamburger Icon */}
          </button>

          {/* Secondary Navigation Links */}
          <nav className="hidden lg:flex space-x-6">
            <a href="/deals" className="hover:text-yellow-500">Today's Deals</a>
            <a href="/buy-again" className="hover:text-yellow-500">Buy Again</a>
            <a href="/browsing-history" className="hover:text-yellow-500">Browsing History</a>
          </nav>
        </div>
      </div>

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
    </header>
  );
};

export default Header;
