'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [
  { 
    title: 'Discover Homes', 
    img: '/images/WEBSITE-BANNER-01.avif',
    imgMobile: '/images/PHONE-BANNER-01.avif'
  },
  { 
    title: 'Luxury Meets Serenity', 
    img: '/images/WEBSITE-BANNER-02.avif', 
    imgMobile: '/images/PHONE-BANNER-02.avif' 
  },
  { 
    title: 'Fresh Living', 
    img: '/images/WEBSITE-BANNER-03.avif', 
    imgMobile: '/images/PHONE-BANNER-01.avif' 
  },
];

export default function HomeHeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="overflow-hidden position-relative p-0 hero-slider">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade, Pagination]}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        autoplay={{ delay: 5000 }}
        className="custom-swiper"
        onBeforeInit={(swiper) => {
          // Assign custom navigation refs
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <picture>
              <source media="(max-width: 767px)" srcSet={slide.imgMobile} />
              <source media="(min-width: 768px)" srcSet={slide.img} />
              <Image
                src={slide.img}
                alt={slide.title}
                width={1980}
                height={824}
                className="img-fluid"
                priority={i === 0}
              />
            </picture>
          </SwiperSlide>
        ))}

        {/* Custom buttons must be inside Swiper for refs to bind */}
        <div ref={prevRef} className="swiper-button-prev text-white" />
        <div ref={nextRef} className="swiper-button-next text-white" />
      </Swiper>
    </div>
  );
}
