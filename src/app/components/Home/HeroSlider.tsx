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
    { title: 'Discover Homes', img: '/images/WEBSITE BANNER.jpg' },
    { title: 'Luxury Meets Serenity', img: '/images/WEBSITE BANNER.jpg' },
    { title: 'Fresh Living', img: '/images/WEBSITE BANNER.jpg' },
];

export default function HomeHeroSlider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="overflow-hidden position-relative p-0 hero-slider">
            <Swiper
                modules={[Autoplay, Navigation, EffectFade, Pagination]}
                navigation={true}   // ✅ Let Swiper render arrows
                pagination={{ clickable: true }}
                effect="fade"
                loop
                autoplay={{ delay: 5000 }}
                className="custom-swiper"
            >

                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <Image src={slide.img} alt={slide.title} width={1980} height={824} className="img-fluid" />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ✅ Custom buttons outside Swiper */}
            <div ref={prevRef} className="swiper-button-prev text-white" />
            <div ref={nextRef} className="swiper-button-next text-white" />
        </div>
    );
}
