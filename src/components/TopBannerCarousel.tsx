import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './StylingModules/TopBannerCarousel.module.css';

const banners = [
  { src: '/images/TheBoysADBanner.jpg', alt: 'First Banner' },
  { src: '/images/JoinEmazonPrimeBanner.jpg', alt: 'Second Banner' },
];

const filters = ['invert(100%) brightness(0)', 'invert(50%) sepia(1) hue-rotate(200deg) saturate(3)'];

const TopBannerCarousel = () => {
  const [arrowFilter, setArrowFilter] = useState(filters[0]); // Initial filter

  useEffect(() => {
    const intervalId = setInterval(() => {
      setArrowFilter(prevFilter => {
        const nextIndex = (filters.indexOf(prevFilter) + 1) % filters.length;
        return filters[nextIndex];
      });
    }, 3000); // Change filter every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // Update CSS variable for arrow filter
    document.documentElement.style.setProperty('--arrow-filter', arrowFilter);
  }, [arrowFilter]);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <img src={banner.src} alt={banner.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e6e9ec]"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopBannerCarousel;
