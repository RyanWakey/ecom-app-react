import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../types';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Destructure and type the ID
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/products/${id}`)
        .then(response => {
          setProduct(response.data);
        })
        .catch(error => {
          console.error('Error fetching product:', error);
        });
    }
  }, [id]);

  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

  const imageUrl = product.imageUrl.startsWith('http')
    ? product.imageUrl
    : `${process.env.REACT_APP_API_BASE_URL}${product.imageUrl}`;

  
    return (
      <div className="container mx-auto mt-10 flex flex-col md:flex-row">
        {/* Image container */}
        <div className="md:flex md:w-1/3">
          <img src={imageUrl} alt={product.name} className="w-full h-auto object-contain mx-auto" />
        </div>
  
        {/* Product information container */}
        <div className="flex-1 px-4">
          <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
          <p className="mb-3">{product.description}</p>
          <p className="mb-3">Price: ${product.price}</p>
          <p className="mb-3">Stock: {product.stock}</p>
        </div>
  
        {/* Buying options container */}
        <div className="md:w-1/4 p-6">
          <div className="mb-3 text-xl font-bold">${product.price}</div>
          <div className="mb-3">FREE Returns</div>
          <div className="mb-3">In Stock</div>
          <div className="mb-3">
            Quantity:
            <select className="ml-2">
              <option value="1">1</option>

            </select>
          </div>
          <div className="flex flex-col space-y-2 my-4">
            <button className="bg-yellow-400 text-black py-2 px-4 rounded">Add to Basket</button>
            <button className="bg-yellow-600 text-white py-2 px-4 rounded">Buy Now</button>
          </div>
          <p>Dispatches from Emazon</p>
          <p>Sold by Emazon</p>

        </div>
      </div>
    );
  };
  
  export default ProductDetails;