import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 

const banners = [
    { src: '/images/JoinEmazonPrimeBanner.png', alt: 'First Banner' },
    { src: '/images/JoinEmazonPrimeBanner.png', alt: 'Second Banner' },
];
  

const TopBannerCarousel = () => {
    return (
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img src={banner.src} alt={banner.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default TopBannerCarousel;
