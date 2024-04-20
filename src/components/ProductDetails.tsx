import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams(); // This gets the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the product details", error);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details-container">
      <div className="product-images">
        {/* Render product images here */}
      </div>
      <div className="product-info">
        {/* Render product information here */}
        
        {/* etc. */}
      </div>
    </div>
  );
};

export default ProductDetails;