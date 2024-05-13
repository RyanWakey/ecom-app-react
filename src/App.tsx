import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductDetails from './components/ProductComponents/ProductDetails';
import AllProductsPage from './components/ProductComponents/AllProductsPage';
import Header from './components/NavigationRelated/Header';
import Footer from './components/NavigationRelated/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header across all pages */}
        <Header cartItemCount={0} />
        
        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<AllProductsPage />} /> 
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
