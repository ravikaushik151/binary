"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

// import "swiper/css";
// import "swiper/css/navigation";

const amenitiesTwo = [
 { img: "/images/amenities/Pool Deck.png", title: "Pool Deck" },
 { img: "/images/amenities/Changing Room.png", title: " Changing Room" },
 { img: "/images/amenities/Elders Pool.png", title: "Elders Pool" },
 { img: "/images/amenities/Kids Pool.png", title: " Kids Pool" },
 { img: "/images/amenities/Pool Sit-out-area.png", title: "Pool Sit-out Area" },
 { img: "/images/amenities/Outdoor gym.png", title: "Outdoor Gym" },
 { img: "/images/amenities/Outdoor Seating With Gazebo.png", title: "Outdoor Seating With Gazebo" },
 { img: "/images/amenities/Sensory Path.png", title: "Sensory Path" },
 { img: "/images/amenities/Built-In Seaters.png", title: "Built-In Seaters" },
 { img: "/images/amenities/Butterfly Garden.png", title: "Butterfly Garden" },
 { img: "/images/amenities/Outdoor Co-working Space.png", title: "Outdoor Co-working Space" },
 { img: "/images/amenities/Yoga Deck.png", title: "Yoga Deck" },
 { img: "/images/amenities/Lush Greenery plants.png", title: "Lush Greenery Plants" },
 { img: "/images/amenities/Entry Seating Area.png", title: " Entry Seating Area" },
 { img: "/images/amenities/Security Room.png", title: "Security Room" },
 { img: "/images/amenities/Jogging Track.png", title: "Jogging Track" },

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
    className="p-2"
   >
    {amenitiesTwo.map((item, i) => (
     <SwiperSlide key={i}>
      <div className="text-center px-1 border  d-flex justify-content-center align-items-center h-100 ">
       <div>
          <Image
        src={item.img}
        alt={item.title}
        width={75}
        height={75}
        className="mx-auto img-fluid"
       />
       <h5 className="my-2 lh-sm">{item.title}</h5>
      </div>
       </div>
     
     </SwiperSlide>
    ))}
   </Swiper>

  </>

 );
}
