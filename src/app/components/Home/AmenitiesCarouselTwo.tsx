"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const amenitiesTwo = [
 { img: "/images/amenities/Sheltered Seating.png", title: "Gallery Seating" },
 { img: "/images/amenities/tolder-pit.png", title: "Toddlers Pit" },
 { img: "/images/amenities/flexi-court.png", title: "Flexi Court" },
 { img: "/images/amenities/Toddler_s pool.png", title: "Kids Pool" },
 { img: "/images/amenities/Event Lawn.png", title: "Event Plaza" },
 { img: "/images/amenities/Clubhouse.png", title: "Club House" },
 { img: "/images/amenities/Multipurpose Lawn.png", title: "Banquet Hall" },
 { img: "/images/amenities/Pergola.png", title: "Banquet Lawn" },
 { img: "/images/amenities/Cafeteria.webp", title: "Food Pavillion" },
];

export default function AmenitiesCarouselTwo() {
 return (
  <>


   <Swiper
    modules={[Autoplay, Navigation]}
    spaceBetween={20}
    slidesPerView={5}
    
    autoplay={{ delay: 2500, reverseDirection: true, disableOnInteraction: false }}
    loop={true}
    dir="vertical"   // 👈 Makes it scroll in reverse
    breakpoints={{
     320: { slidesPerView: 2 },
     640: { slidesPerView: 2 },
     1024: { slidesPerView: 6 },
    }}
    className="mb-5"
   >
    {amenitiesTwo.map((item, i) => (
     <SwiperSlide key={i}>
      <div className="text-center p-3 border  mb-1">
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
