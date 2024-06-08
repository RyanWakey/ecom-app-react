import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomDropdown from './Dropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useAuth } from '../../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StylingModules/styles.css';

interface HeaderProps {
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount = 0 }) => {
  const categoryOptions = ["All", "Books", "Electronics", "LongLongLongLong"];
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handleSelect = (eventKey: string | null) => {
    if (eventKey === 'logout') {
      logout();
    } else if (eventKey) {
      navigate(eventKey);
    }
  };

  return (
    <header>
      {/* Top Navigation Bar */}
      <nav style={{ backgroundColor: '#131921' }}  className="p-1.5 text-white flex justify-between items-center">
        {/* Company Logo */}
        <div className="flex items-center">
          <img src="/images/Emazon.png" alt="Emazon Logo" className="ml-3 h-10" />
        </div>

        {/* Search Bar and Category Dropdown */}
        <div className="flex border border-gray-500 rounded overflow-hidden text-sm ml-12">
          <CustomDropdown options={categoryOptions} />
          <input className="px-72 py-1 text-xs w-full" type="text" placeholder="Search Emazon.co.uk" />
          <button className="bg-yellow-500 px-2.5 py-1">
            <img src="/images/MagnifyingGlass.png" alt="Search" className="h-4 w-8" />
          </button>
        </div>


         {/* Profile and Basket Icon */}
         <div className="flex items-center mr-2">
          {user ? (
            <Dropdown>
              <Dropdown.Toggle 
                as="div" 
                className="flex items-center bg-transparent border-none p-0 caret-off"
              >
                <button
                  type="button"
                  className="bg-transparent border-none p-0 flex items-center"
                  data-toggle="dropdown"
                >
                  <div className="flex flex-col items-start text-white mr-2">
                    <span className="font-semibold text-sm">Hello, {user.name}</span>
                    <span className="font-normal text-sm">Accounts & Information</span>
                  </div>
                </button>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="/profile" >Your Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="/orders">Your Orders</Dropdown.Item>
                <Dropdown.Item eventKey="/wishlist"> Your Wishlist</Dropdown.Item>
                <Dropdown.Item eventKey="/settings">Account Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <Link to="/register" className="hover:underline mr-4">Register</Link>
              <Link to="/login" className="hover:underline mr-4">Login</Link>
            </>
          )}
          <div className="relative h-10">
            <img src="/images/CartIcon.png" alt="Basket" className="h-full" />
            <span className="absolute -top-0.5 -right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {cartItemCount}
            </span>
            <span className="ml-2 flex items-center -mt-3 text-sm">Basket</span>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation Bar */}
      <div className="flex justify-between items-center p-1.5 bg-gray-800 text-white">
        <div className="flex items-center ml-4">
          {/* Drawer Toggle */}
          <button onClick={toggleDrawer} className="relative flex items-center focus:outline-none">
            {/* Hamburger Icon */}
            <div className="flex flex-col items-start space-y-1">
              <span className="block w-4 h-0.5 bg-white"></span>
              <span className="block w-4 h-0.5 bg-white"></span>
              <span className="block w-4 h-0.5 bg-white"></span>
            </div>
            {/* All Text */}
            <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-sm text-white font-bold">All</span>
          </button>

          {/* Secondary Navigation Links */}
          <nav className="flex space-x-3 text-sm font-semibold text-white text-opacity-80 ml-10">
            <Link to="/deals" className="hover:text-yellow-500">Today's Deals</Link>
            <Link to="/buy-again" className="hover:text-yellow-500">Buy Again</Link>
            <Link to="/browsing-history" className="hover:text-yellow-500">Browsing History</Link>
            <Link to="/products" className="hover:text-yellow-500">Products</Link>
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
            <Link to="/deals" className="hover:text-blue-500">Today's Deals</Link>
            <Link to="/buy-again" className="hover:text-blue-500">Buy Again</Link>
            <Link to="/browsing-history" className="hover:text-blue-500">Browsing History</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

