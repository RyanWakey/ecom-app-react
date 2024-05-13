import React from 'react';
import TopBannerCarousel from './TopBannerCarousel'; 

const Homepage = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <TopBannerCarousel />
    </div>
  );
};

export default Homepage;