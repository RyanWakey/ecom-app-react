import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../types';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Destructure and type the ID
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImage, setCurrentImage] = useState<string>('');
  

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/api/products/${id}`)
        .then((response) => {
          const productData = response.data as Product;
          setProduct(productData);
          // Set the first image or a default
          const firstImage = productData.images.length > 0
            ? productData.images[0].url.startsWith('http')
              ? productData.images[0].url
              : `${process.env.REACT_APP_API_BASE_URL}${productData.images[0].url}`
            : 'default-image.png'; // Default image
  
          setCurrentImage(firstImage);
        })
        .catch((error) => {
          console.error('Error fetching product:', error);
        });
    }
  }, [id]);

  // Return early if the product is not yet loaded
  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

 
  return (
    <div className="flex flex-col lg:flex-row mt-10 mx-4">
      {/* Image container */}
      <div className="lg:w-2/5 xl:w-1/3 mr-10 flex-shrink-0">
        <img src={currentImage} alt={product.name} className="w-full h-auto object-contain" />
      </div>

      {/* Product information container */}
      <div className="flex-grow lg:w-1/3 xl:w-1/4 px-4 lg:-ml-6">
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
        <div className="mt-12 lg:w-1/4 xl:w-1/6 2xl:w-1/6 lg:ml-auto p-6 border border-gray-300 rounded-lg">
          <div className="mb-3 text-xl font-bold">£{product.price}</div>

          <div className="text-xs text-gray-700 mb-1">
            Or fastest delivery Tomorrow, date Month. Order within hours mins. <a href="#" className="text-blue-600">Details</a>
          </div>
          
            {product.stock > 0 ? (
               <div className="text-green-500 mb-1">In Stock</div>
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

            <div className="text-sm text-gray-600">
              <p className="mb-1">Dispatches from <span className="text-black">Amazon</span></p>
              <p className="mb-1">Sold by <span className="text-black">Fusion5 Direct</span></p>
              <p className="mb-1">Returns <span className="text-black">Returnable within 30 days of receipt</span></p>
              <p className="mb-1">Payment <span className="text-black">Secure transaction</span></p>
            </div>
          </div>
        </div>
    );
    
  };
  
  export default ProductDetails;