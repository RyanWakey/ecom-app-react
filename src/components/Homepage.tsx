import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import TopBannerCarousel from './TopBannerCarousel';
import axios from 'axios';

const Homepage: React.FC = () => {
  const { user } = useAuth();
  const [browsingHistory, setBrowsingHistory] = useState([]);
  const [deals, setDeals] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const historyResponse = await axios.get('/api/browsing-history');
        setBrowsingHistory(historyResponse.data);

        // Fetching deals for the authenticated user
        const dealsResponse = await axios.get('/api/deals');
        setDeals(dealsResponse.data);
      } else {
        // Fetching global deals for non-authenticated users
        const dealsResponse = await axios.get('/api/deals');
        setDeals(dealsResponse.data);

        const categoriesResponse = await axios.get('/api/popular-categories');
        setPopularCategories(categoriesResponse.data);
      }
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
