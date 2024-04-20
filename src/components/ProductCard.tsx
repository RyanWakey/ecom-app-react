import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imageUrl = product.imageUrl.startsWith('http') ? product.imageUrl : `${process.env.REACT_APP_API_BASE_URL}${product.imageUrl}`;

  return (
    <div className="border-2 border-gray-300 p-4 flex flex-col items-center justify-between h-full">
      {/* Wrap the image and product name in Link components */}
      <Link to={`/product/${product.id}`}>
        <img src={imageUrl} alt={product.name} className="h-40 w-full object-contain mb-2" />
      </Link>
      <div className="text-center flex flex-col flex-grow">
        <Link to={`/product/${product.id}`}>
          <h2 className="text-lg font-bold mb-1">{product.name}</h2>
        </Link>
        <p className="mb-2">${product.price}</p>
        <p className="mb-4 text-sm text-gray-500">In Stock</p>
        {/* Removed Add to Cart button as per your request */}
      </div>
    </div>
  );
};

export default ProductCard;