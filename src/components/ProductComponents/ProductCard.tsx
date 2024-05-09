import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imageUrl = product.images.length > 0
    ? (product.images[0].url.startsWith('http') ? product.images[0].url : `${process.env.REACT_APP_API_BASE_URL}${product.images[0].url}`)
    : 'default-image.png'; // Fallback default image

  const price = parseFloat(product.price.toString());

  return (
    <div className="p-4 flex flex-col items-center justify-between h-full">
      <Link to={`/product/${product.id}`}>
        <img src={imageUrl} alt={product.name} className="h-40 w-full object-contain mb-2" />
      </Link>
      <div className="text-center flex flex-col flex-grow">
        <Link to={`/product/${product.id}`}>
          <h2 className="text-lg font-bold">{product.name}</h2>
        </Link>
        <p className="mb-2">${price.toFixed(2)}</p>
        <p className="mb-4 text-sm text-gray-500">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
      </div>
    </div>
  );
};

export default ProductCard;