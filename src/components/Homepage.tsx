import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import TopBannerCarousel from './TopBannerCarousel';
import axios from 'axios';
import { Product } from '../types';

const Homepage: React.FC = () => {
  const { user } = useAuth();
  const [browsingHistory, setBrowsingHistory] = useState<Product[]>([]);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [deals, setDeals] = useState<Product[]>([]);
  const [todayDeals, setTodayDeals] = useState<Product[]>([]);
  
  //const [popularCategories, setPopularCategories] = useState<Category[]>([]);
  const [techEssentials, setTechEssentials] = useState<Product[]>([]);
  const [gardenEssentials, setGardenEssentials] = useState<Product[]>([]);
  const [mustHaveProducts, setMustHaveProducts] = useState<Product[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        // axios.get('/api/browsing-history').then(response => setBrowsingHistory(response.data));
        // axios.get('/api/recommended-products').then(response => setRecommendedProducts(response.data));
        // axios.get('/api/deals').then(response => setDeals(response.data));
      }
      // axios.get('/api/today-deals').then(response => setTodayDeals(response.data));
      // axios.get('/popular-categories').then(response => setPopularCategories(response.data));
      // axios.get('/tech-essentials').then(response => setTechEssentials(response.data));
      // axios.get('/garden-essentials').then(response => setGardenEssentials(response.data));
      // axios.get('/must-have-products').then(response => setMustHaveProducts(response.data));
    };

    fetchData();
  }, [user]);

  return (
    <div className="bg-[#e3e6e6] min-h-screen relative">
      <TopBannerCarousel />
      <div className="relative flex flex-col items-center z-10">
        <div className="relative -mt-72 w-full px-4 max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {user ? (
            <>
              <div className="bg-white p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Pick up where you left off</h2>
                <div className="space-y-4">
                  {browsingHistory.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <img src={item.images[0]?.url} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                      <p>{item.name}</p>
                    </div>
                  ))}
                  <a href="/browsing-history" className="text-blue-600 hover:underline">See more</a>
                </div>
              </div>

              <div className="bg-white p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Products that might interest you</h2>
                <div className="space-y-4">
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className="flex items-center">
                      <img src={product.images[0]?.url} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                      <p>{product.name}</p>
                    </div>
                  ))}
                  <a href="/recommended-products" className="text-blue-600 hover:underline">See more</a>
                </div>
              </div>

              <div className="bg-white p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Continue shopping deals</h2>
                <div className="space-y-4">
                  {deals.map((deal) => (
                    <div key={deal.id} className="flex items-center">
                      <img src={deal.images[0]?.url} alt={deal.name} className="w-16 h-16 object-cover mr-4" />
                      <p>{deal.name} - {deal.price} USD</p>
                    </div>
                  ))}
                  <a href="/deals" className="text-blue-600 hover:underline">See more deals</a>
                </div>
              </div>

              <div className="bg-white p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Today's Deals</h2>
                <div className="space-y-4">
                  {todayDeals.map((deal) => (
                    <div key={deal.id} className="flex items-center">
                      <img src={deal.images[0]?.url} alt={deal.name} className="w-16 h-16 object-cover mr-4" />
                      <p>{deal.name} - {deal.price} USD</p>
                    </div>
                  ))}
                  <a href="/today-deals" className="text-blue-600 hover:underline">Shop all Deals</a>
                </div>
              </div> 
            </>
          ) : (
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Please log in to see personalized content</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;