import React, { useState, useEffect } from 'react';
import ProductCard from './../ProductComponents/ProductCard';
import axios from 'axios';
import { Product } from '../../types';

const Homepage = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get(`${baseUrl}/api/products`)
      .then((response) => {
        console.log('Fetched products:', response.data);
        setProducts(response.data as Product[]);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, [baseUrl]);

  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-4 gap-0 border border-gray-300">
        {products.map((product) => (
          <div key={product.id}className="border-b border-r border-gray-300">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
