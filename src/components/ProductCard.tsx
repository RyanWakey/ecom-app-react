import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 flex flex-col items-center">
      <img src={product.imageUrl} alt={product.name} className="h-40 w-full object-contain mb-4" />
      <h2 className="text-lg font-bold mb-2">{product.name}</h2>
      <p className="mb-2">${product.price.toFixed(2)}</p> {}
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductCard;