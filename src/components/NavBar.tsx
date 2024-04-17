import React from 'react';
import Dropdown from './Dropdown';

// Interface for props
interface NavbarProps {
  cartItemCount?: number; // cartItemCount is now optional with a default value set in the component
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount }) => {
  const categoryOptions = ["All", "Books", "Electronics", "LongLongLongLong"];
  
  return (
    <nav className="bg-gray-800 p-1 py-2 text-white flex justify-between items-center">
      {/* Company Logo */}
      <div className="flex items-center">
        <img src="/images/Emazon.png" alt="Emazon Logo" className="ml-3 h-10" />
      </div>

      {/* Search Bar and Category Dropdown */}
      <div className="flex border border-gray-500 rounded overflow-hidden text-sm">
        <Dropdown options={categoryOptions} />
        <input className="px-48 w-full text-xs" type="text" placeholder="Search Emazon.co.uk" />
        <button className="bg-orange-400 px-4 py-2">
          {/* Search Icon */}
        </button>
      </div>

       {/* Profile and Basket Icon */}
      <div className="flex items-center">
        <a href="/login" className="hover:underline">Login</a>
        <div className="relative h-10"> {/* Set the height of the container for the basket image */}
          <img src="/images/CartIcon.png" alt="Basket" className="h-full " /> {/* Image will fill the height of its container */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            {cartItemCount}
          </span>
          <span className="align-middle">Basket</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
