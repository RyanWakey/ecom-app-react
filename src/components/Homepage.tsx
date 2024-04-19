import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';
import ProductCard from './ProductCard';
import axios from 'axios';
import { Product } from '../types';

const Homepage = () => {
  
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    axios.get(`${baseUrl}/api/products`)
      .then(response => {
        setProducts(response.data as Product[]);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [baseUrl]); // Includes the baseUrl in the dependencies array

  return (
    <>
      <Navbar cartItemCount={0} />
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-4 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
