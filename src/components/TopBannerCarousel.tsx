import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay'; 

import styles from './StylingModules/TopBannerCarousel.module.css';

const banners = [
    { src: '/images/TheBoysADBanner.jpg', alt: 'First Banner' },
    { src: '/images/JoinEmazonPrimeBanner.jpg', alt: 'Second Banner' },
];

const TopBannerCarousel = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{nextEl: `.${styles.swiperButtonNext}`, prevEl: `.${styles.swiperButtonPrev}`}}
        pagination={{ clickable: true, el: `.${styles.swiperPagination}` }}
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