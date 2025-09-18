"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

// import "swiper/css";
// import "swiper/css/navigation";

const amenities = [
 { img: "/images/amenities/EntryExit.png", title: " Entry/Exit" },
 { img: "/images/amenities/Unit Apartment Block.png", title: "Unit Apartment Block" },
 { img: "/images/amenities/Club House.png", title: " Club House" },
 { img: "/images/amenities/Banquet Hall.png", title: "Banquet Hall" },
 { img: "/images/amenities/Gym.png", title: "Gym" },
 { img: "/images/amenities/Store Room.png", title: "Store Room" },
 { img: "/images/amenities/Indoor Badminton Court.png", title: "Indoor Badminton Court" },
 { img: "/images/amenities/Indoor Games.png", title: "Indoor Games" },
 { img: "/images/amenities/Landscape.png", title: "Landscape Entry" },
 { img: "/images/amenities/Toddlers Pit.png", title: "Toddlers Pit" },
 { img: "/images/amenities/Traditional Strategic Games.png", title: "Traditional Strategic Games" },
 { img: "/images/amenities/Sand Pit with Play Equipment.png", title: "Sand Pit with Play Equipment" },
 { img: "/images/amenities/Flexi Court.png", title: "Flexi Court" },
 { img: "/images/amenities/Gallery Seating.png", title: " Gallery Seating" },
 { img: "/images/amenities/Cricket Pitch.png", title: "Cricket Pitch" },
 { img: "/images/amenities/Under Tree Sit-Out Area.png", title: "Under Tree Sit-Out Area" },
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
    className="p-2"
   >
    {amenities.map((item, i) => (
     <SwiperSlide key={i}>
      <div className="text-center px-1 border mb-1 d-flex justify-content-center align-items-center h-100 mb-3">
       <div>
        <Image
         src={item.img}
         alt={item.title}
         width={75}
         height={75}
         className="mx-auto img-fluid"
        />
        <h5 className="my-2  lh-sm">{item.title}</h5>
       </div>

      </div>

     </SwiperSlide>
    ))}
   </Swiper>
  </>
 );
}
