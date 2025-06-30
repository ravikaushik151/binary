'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules'; // ← Add Pagination
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination'; // ← Import Pagination styles
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        title: 'Discover Homes Embraced by Nature',
        subtitle: 'Binary Verdance, Sarjapur Road',
        desc: 'Experience tranquility amidst 60% open green spaces',
        button: 'Enquire Now',
        href: '#contact',
        img: '/images/web-banner.webp',
    },
    {
        title: 'Where Luxury Meets Serenity',
        subtitle: 'Premium 2 & 3 BHK Apartments at Sarjapur Road',
        desc: '',
        button: 'Book Your Site Visit',
        href: '#contact',
        img: '/images/web-banner.webp',
    },
    {
        title: 'A Breath of Fresh Living',
        subtitle: 'Modern living surrounded by nature, thoughtfully designed for peaceful lifestyles.',
        desc: '',
        button: 'Explore More',
        href: '#about',
        img: '/images/web-banner.webp',
    },
];

export default function HomeHeroSlider() {
    return (
        <div className="overflow-hidden position-relative">
            <Swiper
                modules={[Autoplay, Navigation, EffectFade, Pagination]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                pagination={{ clickable: true }} // ← Enable indicators
                effect="fade"
                loop
                autoplay={{ delay: 5000 }}
                className="custom-swiper"
            >

                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="position-relative text-white d-flex align-items-center" style={{ height: '100vh' }}>
                            <Image
                                src={slide.img}
                                alt={slide.title}
                                layout="fill"
                                objectFit="cover"
                                className="z-n1"
                            />
                            <div className="container position-relative z-1">
                                <div className="text-start">
                                    <h1 className="display-3 fw-bold mb-3">{slide.title}</h1>
                                    {slide.subtitle && <h4 className="mb-3 fw-light">{slide.subtitle}</h4>}
                                    {slide.desc && <p className="mb-4 lead">{slide.desc}</p>}
                                    <Link href={slide.href} className="btn btn-outline-light px-4 py-2">
                                        {slide.button}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Swiper Nav Buttons */}
                <div className="swiper-button-prev text-white" />
                <div className="swiper-button-next text-white" />
            </Swiper>
        </div>
    );
}

