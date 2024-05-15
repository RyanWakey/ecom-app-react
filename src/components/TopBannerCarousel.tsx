import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './StylingModules/TopBannerCarousel.module.css';

const banners = [
  { src: '/images/TheBoysADBanner.jpg', alt: 'First Banner' },
  { src: '/images/JoinEmazonPrimeBanner.jpg', alt: 'Second Banner' },
];

const filters = ['invert(100%) brightness(0)', 'invert(100%) sepia(1) hue-rotate(200deg) saturate(3)'];

const TopBannerCarousel = () => {
  const [arrowFilter, setArrowFilter] = useState(filters[0]); // Initial filter

  useEffect(() => {
    const intervalId = setInterval(() => {
      setArrowFilter(prevFilter => {
        const nextIndex = (filters.indexOf(prevFilter) + 1) % filters.length;
        return filters[nextIndex];
      });
    }, 5000); // Change filter every 5s

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--arrow-filter', arrowFilter);
  }, [arrowFilter]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <img src={banner.src} alt={banner.alt} style={{ width: '100%', height: '80%' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopBannerCarousel;
