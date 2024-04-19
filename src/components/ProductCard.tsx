import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Check if the imageUrl is a full URL, if not, prepend the base URL
  const imageUrl = product.imageUrl.startsWith('http') ? product.imageUrl : `${process.env.REACT_APP_API_BASE_URL}${product.imageUrl}`;

  return (
    <div className="border-2 border-gray-300 p-4 flex flex-col items-center justify-between h-full">
      <img src={imageUrl} alt={product.name} className="h-40 w-full object-contain mb-2" />
      <div className="text-center flex flex-col flex-grow">
        <h2 className="text-lg font-bold mb-1">{product.name}</h2>
        <p className="mb-2">${product.price}</p>
        <p className="mb-4 text-sm text-gray-500">In Stock</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded self-center mt-auto">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
