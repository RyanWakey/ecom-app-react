import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductDetails from './components/ProductComponents/ProductDetails';
import AllProductsPage from './components/ProductComponents/AllProductsPage';
import Header from './components/NavigationRelatedComponents/Header';
import Footer from './components/NavigationRelatedComponents/Footer';
import Login from './components/AuthenticationComponents/Login';
import Register from './components/AuthenticationComponents/Register';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Header across all pages */}
          <Header cartItemCount={0} />
          
          {/* Main Content */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/products" element={<AllProductsPage />} />
              {/* Protected routes */}
              {/* <Route element={<ProtectedRoute />}>
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/order-history" element={<OrderHistory />} />
              </Route> */}
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
