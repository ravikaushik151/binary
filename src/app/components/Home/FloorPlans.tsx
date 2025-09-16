'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FloorPlans() {
  const floorPlans = [
    "/images/floor-plan/Unit_1-8_North_Facing_FF_.avif",
    "/images/floor-plan/Unit_1-8_North_Facing_SF_.avif",
    "/images/floor-plan/Unit_9-11-13-14_East_Facing_FF_.avif",
    "/images/floor-plan/Unit_9-11-13-14_East_Facing_SF_.avif",
    "/images/floor-plan/Unit_10-12-15_East_Facing_FF_.avif",
    "/images/floor-plan/Unit_10-12-15_East_Facing_SF_.avif",
    "/images/floor-plan/Unit_16_East_Facing_.avif",
  ];

  return (
    <section className="gallery-section same-gap bg-white blog" id="blog">
      <div className="container">
        <div className="title text-center mb-4">
          <h2
            className="text-dark"
            style={{
              fontSize: "2.25rem",
              fontWeight: 500,
            }}
          >
            Floor Plans
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {floorPlans.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="gallery-item text-center pb-5 px-2">
                <img
                  src={src}
                  alt={`floor plan ${index + 1}`}
                  className="img-fluid mb-3  shadow-sm  p-1"
                  style={{  objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
