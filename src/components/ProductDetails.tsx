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
    <>
      <div className="container mx-auto mt-10 flex flex-col md:flex-row">
        <div className="md:flex-1">
          <img src={imageUrl} alt={product.name} className="w-full h-80 object-contain mb-4" />
        </div>
        <div className="md:flex-1 md:ml-10">
          <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
          <p className="text-lg font-semibold mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <p className="mb-4">Stock: {product.stock}</p>
          {}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
