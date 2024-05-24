import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import TopBannerCarousel from './TopBannerCarousel';

const Homepage: React.FC = () => {
  const { user } = useAuth();

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
