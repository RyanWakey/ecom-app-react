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
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Test1 {user.name}!</h1>
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
