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

const colors = ['#FF5733', '#33C1FF']; 

const TopBannerCarousel = () => {

  const [arrowColor, setArrowColor] = useState(colors[0]); // Initial color

    useEffect(() => {
        const intervalId = setInterval(() => {
            setArrowColor(prevColor => {
                const nextIndex = (colors.indexOf(prevColor) + 1) % colors.length;
                return colors[nextIndex];
            });
        }, 2000); // Change color every 2000 milliseconds (2 seconds)

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

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