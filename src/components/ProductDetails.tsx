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
      <div className="flex flex-col lg:flex-row mt-10 mx-4 ">
        {/* Placeholder for additional images (simulated with padding) */}
        <div className="w-0 lg:w-1/12 xl:w-1/6 2xl:w-1/4 flex-shrink-0"></div>
    
        {/* Image container */}
        <div className="lg:w-2/5 xl:w-1/3 2xl:w-2/6 flex-shrink-0">
          <img src={imageUrl} alt={product.name} className="w-full h-auto object-contain" />
        </div>
    
        {/* Product information container */}
        <div className="flex-grow lg:w-1/3 xl:w-1/4 2xl:w-1/6 px-4 lg:px-8 lg:-ml-6">
          <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
          <p className="mb-3">£{product.price}</p>
          <div className="mb-3">
            <ul className="list-disc ml-5 space-y-2">
              {product.description.split("\n\n").map((paragraph, index) => (
                <li key={index} className="text-sm">{paragraph.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Buying options container */}
        <div className="lg:w-1/4 xl:w-1/6 2xl:w-1/6 lg:ml-auto p-6 border border-gray-300 rounded-lg">
          <div className="mb-3 text-xl font-bold">£{product.price}</div>
            {product.stock > 0 ? (
              <div className="text-green-500">In Stock</div>
            ) : (
              <div className="text-red-500">Out of Stock</div>
            )}

            <div className="mb-3">
              Quantity:
              <select className="ml-2" disabled={!product.stock}>
                <option value="1">1</option>
              </select>
            </div>

            <div className="flex flex-col space-y-4 my-4">
              <button className="bg-yellow-400 text-black py-2 px-4 rounded" disabled={!product.stock}>Add to Basket</button>
              <button className="bg-yellow-600 text-white py-2 px-4 rounded" disabled={!product.stock}>Buy Now</button>
            </div>

            <div className="mb-3">
              <span className="icon-placeholder">🏠</span>
              Deliver to {/* </div>{user.username} - {user.address} */ }
            </div>

            <div className="text-sm">
              <p>Returns</p>
              <p>Returnable within 30 days of receipt</p>
              <p>Payment</p>
              <p>Secure transaction</p>
            </div>
          </div>
        </div>
    );
    
  };
  
  export default ProductDetails;