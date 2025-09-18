'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const specifications = [
 {
  title: "Structure",
  icon: "/images/specifications/Icon.png",
  points: [
   "RCC framed structure with 6-inch thick outer walls and 4-inch thick internal walls",
  ],
 },
 {
  title: "Plastering",
  icon: "/images/specifications/plastering.png",
  points: ["External & Internal single coat cement plaster"],
 },
 {
  title: "Painting",
  icon: "/images/specifications/Icon6.png",
  points: [
   "External: Textured finish, primer, and two coats of emulsion (Asian/reputed).",
   "Internal: Smooth putty, primer, and two coats of emulsion (Asian/reputed).",
  ],
 },
 {
  title: "Door",
  icon: "/images/specifications/Icon3.png",
  points: [
   "Main door: engineered wood with full-width jamb",
   "Internal doors: engineered wood with laminated finish",
   "Toilet/utility doors: WPC with high-quality hardware",
  ],
 },
 {
  title: "Windows",
  icon: "/images/specifications/window.png",
  points: ["UPVC sliding windows with mosquito mesh"],
 },
 {
  title: "Flooring",
  icon: "/images/specifications/flooring.png",
  points: ["800x800 mm double charged vitrified tiles"],
 },
 {
  title: "Backup Power",
  icon: "/images/specifications/backup.png",
  points: ["100% DG Backup power for common areas", "1 KVA for each apartment"],
 },
 {
  title: "Electrical",
  icon: "/images/specifications/Icon2.png",
  points: [
   "Great White switches / Anchor or equivalent",
   "Fire-resistant wires from Great White / Anchor or equivalent brand",
  ],
 },
 {
  title: "Electrical Points",
  icon: "/images/specifications/electrical-point.png",
  points: [
   "Points for appliances and 2 extra plugs",
   "TV and phone points in living & master bedrooms",
   "Geyser & exhaust fan points in toilets",
   "AC points in living, master & children’s bedroom",
  ],
 },
 {
  title: "Elevator",
  icon: "/images/specifications/elevator.png",
  points: ["6/8 passenger elevator from OTIS, or equivalent"],
 },
 {
  title: "Toilets (4’x2’)",
  icon: "/images/specifications/toilets.png",
  points: [
   "Antiskid ceramic tiles of reputed make",
   "Dado up to door height",
  ],
 },
 {
  title: "Utility & Balcony",
  icon: "/images/specifications/balcony.png",
  points: [
   "Reputed anti-skid ceramic tiles in utility area",
   "Staircase – Natural Stone flooring with edge polish",
   "Corridor – Reputed anti-skid vitrified tiles",
  ],
 },
 {
  title: "Kitchen",
  icon: "/images/specifications/kitchen.png",
  points: [
   "Designer modular kitchen electrical points",
   "Water purifier/chimney provision",
   "Washing machine space in utility area",
  ],
 },
 {
  title: "CP & Sanitary Fittings & Fixtures",
  icon: "/images/specifications/cp-sanitary.png",
  points: [
   "ISI CP and sanitary fittings from Grohe/Kohler, or equivalent",
   "Soft close seat cover and monolithic sink from TOTO/Kohler or equivalent",
  ],
 },
 // 👉 continue adding your rest items here...
];

export default function Specifications() {
 return (
  <section className="section same-gap d-md-none" id="specifications" style={{ backgroundColor: "#1e291d" }}>
   <div className="container-fluid px-md-3 px-3">
    <div className="title text-center">
     <h2 className="text-white" style={{ fontSize: "36px" }}>Specifications</h2>
    </div>

   

    {/* ✅ Mobile Slider */}
    <div className="d-block d-md-none">
     <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
   
      pagination={{ clickable: true }}
     >
      {specifications.map((spec, index) => (
       <SwiperSlide className='' key={index}>
        <div className="specifications-box text-center border py-3 my-3 px-3 ">
         <img src={spec.icon} alt={spec.title} className="img-fluid mx-auto"  style={{ maxHeight: "100px" }} />
         <h3>{spec.title}</h3>
         <div className="specifications-box-content  text-start">
          <ul className="list-unstyled text-white">
           {spec.points.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
         </div>
        </div>
       </SwiperSlide>
      ))}
     </Swiper>
    </div>
   </div>
  </section>
 );
}
