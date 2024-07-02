import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import TopBannerCarousel from './TopBannerCarousel';
import axios from '../api/axios';
import { Product, Category } from '../types';

const Homepage: React.FC = () => {
  const { user } = useAuth();
  const [browsingHistory, setBrowsingHistory] = useState<Product[]>([]);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [deals, setDeals] = useState<Product[]>([]);
  const [todayDeals, setTodayDeals] = useState<Product[]>([]);
  
  const [techEssentials, setTechEssentials] = useState<Product[]>([]);
  const [gardenEssentials, setGardenEssentials] = useState<Category[]>([]);
  const [mustHaveProducts, setMustHaveProducts] = useState<Product[]>([]);
  const [beautyWellness, setBeautyWellness] = useState<Product[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        // axios.get('/api/browsing-history').then(response => setBrowsingHistory(response.data));
        // axios.get('/api/recommended-products').then(response => setRecommendedProducts(response.data));
        // axios.get('/api/deals').then(response => setDeals(response.data));
      }
      // axios.get('/api/today-deals').then(response => setTodayDeals(response.data));
      // axios.get('/tech-essentials').then(response => setTechEssentials(response.data));
      const gardenEssentialsResponse = await axios.get('/api/garden-essentials-subcategories');
      setGardenEssentials(gardenEssentialsResponse.data.data);
      // axios.get('/must-have-products').then(response => setMustHaveProducts(response.data));
      // axios.get('/api/beauty-wellness').then(response => setBeautyWellness(response.data));
    };

    fetchData();
  }, [user]); // Depend on `user`, only re-run when `user` changes

  const renderProductSection = (title: string, products: Product[], link: string) => (
    <div className="bg-white p-6 shadow-md flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center">
            <img src={product.images[0]?.url} alt={product.name} className="w-16 h-16 object-cover mr-4" />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <a href={link} className="text-blue-600 hover:text-orange-500 no-underline">See more</a>
      </div>
    </div>
  );
  
  const renderCategorySection = (title: string, categories: Category[], link: string) => (
    <div className="bg-white p-6 shadow-md flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={category.image_url} alt={category.name} className="w-full h-24 object-cover" />
            <p className="mt-2 text-center">{category.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto text-center">
        <a href={link} className="text-blue-600 hover:text-orange-500 no-underline">Shop now</a>
      </div>
    </div>
  );
  

  return (
    <div className="bg-[#e3e6e6] min-h-screen relative">
      <TopBannerCarousel />
      <div className="relative flex flex-col items-center z-10">
        <div className="relative -mt-72 w-full px-4 max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {user ? (
            <>
              {renderProductSection('Pick up where you left off', browsingHistory, '/browsing-history')}
              {renderProductSection('Products that might interest you', recommendedProducts, '/recommended-products')}
              {renderProductSection('Continue shopping deals', deals, '/deals')}
              {renderProductSection('Today\'s Deals', todayDeals, '/today-deals')}
              {renderCategorySection('Garden Essentials', gardenEssentials, '/garden-essentials')}
              {renderProductSection('Popular Categories', techEssentials, '/popular-categories')}
              {renderProductSection('Must-have Products', mustHaveProducts, '/must-have-products')}
              {renderProductSection('Beauty and Wellness', beautyWellness, '/beauty-wellness')}
            </>
          ) : (
            <>
              {renderCategorySection('Garden Essentials', gardenEssentials, '/garden-essentials')}
              {renderProductSection('Popular Categories', techEssentials, '/popular-categories')}
              {renderProductSection('Must-have Products', mustHaveProducts, '/must-have-products')}
              {renderProductSection('Beauty and Wellness', beautyWellness, '/beauty-wellness')}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;