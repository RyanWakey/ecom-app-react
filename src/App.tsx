import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/NavBar'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Navbar cartItemCount={0} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;