"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const amenities = [
 { img: "/images/amenities/Pe friendly.png", title: "Pet Park" },
 { img: "/images/amenities/Pathway Canopied with Trees.png", title: "Sensory Path" },
 { img: "/images/amenities/bell.png", title: "Bell Temple" },
 { img: "/images/amenities/Structure.png", title: "Hugging Pillar" },
 { img: "/images/amenities/Gym.png", title: "Indoor Gym" },
 { img: "/images/amenities/indoorgames.png", title: "Indoor Games" },
 { img: "/images/amenities/Outdoor gym.png", title: "Outdoor Gym" },
 { img: "/images/amenities/Meditation court.png", title: "Meditation" },
 { img: "/images/amenities/citizen.webp", title: "Elders Court" },
];

export default function AmenitiesCarousel() {
 return (
  <>

   <Swiper
    modules={[Autoplay, Navigation]}
    spaceBetween={20}
    slidesPerView={5}
    
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    loop={true}
    breakpoints={{
     320: { slidesPerView: 2 },
     640: { slidesPerView: 2 },
     1024: { slidesPerView: 6 },
    }}
    className=""
   >
    {amenities.map((item, i) => (
     <SwiperSlide key={i}>
      <div className="text-center p-3 border mb-1">
       <Image
        src={item.img}
        alt={item.title}
        width={75}
        height={75}
        className="mx-auto img-fluid"
       />
       <h5 className="mt-2">{item.title}</h5>
      </div>
     </SwiperSlide>
    ))}
   </Swiper>
  </>
 );
}
