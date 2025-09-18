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
    imgMobile: '/images/PHONE-BANNER-01.avif',
    link: '/homes',
    linkStyle: { left: "10.63%", top: "78.98%", width: "15.01%", height: "6.76%" }
  },

  {
    title: 'Luxury Meets Serenity',
    img: '/images/WEBSITE-BANNER-02.avif',
    imgMobile: '/images/PHONE-BANNER-02.avif',
    link: '/luxury',
    linkStyle: { left: "74.15%", top: "79.07%", width: "15.22%", height: "6.48%" }
  },
  {
    title: 'Fresh Living',
    img: '/images/WEBSITE-BANNER-03.avif',
    imgMobile: '/images/PHONE-BANNER-01.avif',
    link: '/living',
    linkStyle: { left: "10.53%", top: "79.17%", width: "15.22%", height: "6.48%" }
  },
];

export default function HomeHeroSlider() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="overflow-hidden position-relative p-0 hero-slider d-none d-md-block">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade, Pagination]}
          pagination={{ clickable: true }}
          effect="fade"
          loop
          autoplay={{ delay: 5000 }}
          className="custom-swiper"
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (
                prevRef.current &&
                nextRef.current &&
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="position-relative">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={1980}
                  height={824}
                  className="img-fluid"
                  priority={i === 0}
                />
                {/* ✅ Slide-specific link */}
                <a
                  href="#"
                  data-bs-toggle="modal" data-bs-target="#enquireNowModal"
                  title={slide.title}
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    ...slide.linkStyle
                  }}
                />
              </div>
            </SwiperSlide>
          ))}

          {/* ✅ Custom navigation buttons */}
          <div ref={prevRef} className="swiper-button-prev text-white" />
          <div ref={nextRef} className="swiper-button-next text-white" />
        </Swiper>


      </div>
      <div className="overflow-hidden position-relative p-0 hero-slider  d-md-none">
        <div className="position-relative">
          <Image
            src="/images/mobile-banner.avif"
            alt="mobile slide"
            width={412}
            height={732}
            className="img-fluid"
            priority 
            fetchPriority="high"
          />
          {/* ✅ Slide-specific link */}
          <a

            href="#"
            data-bs-toggle="modal" data-bs-target="#enquireNowModal"
            title='mobile slide'
            style={{
              position: "absolute",
              zIndex: 2,
              left: "33.67%", top: "49.45%", width: "32.44%", height: "4.38%"
            }}
          />
        </div>
      </div>
    </>
  );
}
