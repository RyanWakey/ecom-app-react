import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/TopNavBar'; 
import SecondaryNav from './components/SecondaryNav'; 
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Existing Top Navigation Bar */}
        <Navbar cartItemCount={0} />

        {/* New Secondary Navigation Bar */}
        <SecondaryNav />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};


export default App;