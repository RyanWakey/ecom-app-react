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


  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const historyResponse = await axios.get<Product[]>('/api/browsing-history');
        setBrowsingHistory(historyResponse.data);

        const recommendedResponse = await axios.get<Product[]>('/api/recommended-products');
        setRecommendedProducts(recommendedResponse.data);

        const dealsResponse = await axios.get<Product[]>('/api/deals');
        setDeals(dealsResponse.data);
      }

      const todayDealsResponse = await axios.get<Product[]>('/api/today-deals');
      setTodayDeals(todayDealsResponse.data);
    };

    fetchData();
  }, [user]);

  return (
    <div className="bg-[#e3e6e6] min-h-screen">
      <TopBannerCarousel />
      <div className="flex flex-col items-center p-4">
        <div className="mt-8 w-full max-w-2xl">
          {user ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
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





           <div className="bg-white p-6 rounded-lg shadow-md">
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

            <div className="bg-white p-6 rounded-lg shadow-md">
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

            <div className="bg-white p-6 rounded-lg shadow-md">
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
            
          </div>

              
          ) : (
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Test2</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
