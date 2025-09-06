'use client';
import { useEffect } from 'react';

import Link from "next/link";
import Amenities from './components/Amenities';
import Image from 'next/image';
import HeroSlider from './components/Home/HeroSlider';
import AmenitiesCarousel from "./components/Home/AmenitiesCarousel";
import AmenitiesCarouselTwo from './components/Home/AmenitiesCarouselTwo';

export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      const getCurrentPath = () => window.location.pathname;
      const setLerp = () => {
        lenis.options.lerp = getCurrentPath() === '/being-here-at-studio' ? 0.1 : undefined;
        console.log('lerp applied:', lenis.options.lerp);
        console.log('Current Path:', getCurrentPath());
      };

      setTimeout(setLerp, 100);

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    const form = document.getElementById("wf-form-Melodies-of-Life-Contact-Form");
    const trigger = document.getElementById("brochure-download-trigger");
    const popup = document.getElementById("popup-form");
    const thankYou = document.getElementById("popup-thankyou");
    const sourceInput = document.getElementById("SourceURL");

    if (sourceInput) {
      sourceInput.value = window.location.href;
    }

    if (trigger && popup) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "flex";
      });
    }

    const closePopup = () => {
      if (popup) popup.style.display = "none";
      if (thankYou) thankYou.style.display = "none";
    };

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(form.action, {
          method: form.method,
          body: new FormData(form),
        })
          .then((res) => {
            if (res.ok) {
              closePopup();
              document.getElementById("brochure-download-link")?.click();
              if (thankYou) thankYou.style.display = "flex";
            } else {
              alert("There was an issue with your submission. Please try again.");
            }
          })
          .catch((err) => console.error("Submission error:", err));
      });
    }

  }, []);



  return (
    <>


      <main className="main-wrapper">
        <HeroSlider />
        <div id="scroll-more">
          <section className="project-info-section">
            <div className="container">
              <div className="row text-center text-white">
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5">Project Size</h6>
                  <p className="mb-0 fs-2 fw-light">2 Acres</p>
                </div>
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5">Possession</h6>
                  <p className="mb-0 fs-2 fw-light">2027</p>
                </div>
                <div className="col-6 col-md-3 border-end border-light mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5">Starting Price</h6>
                  <p className="mb-0 fs-2 fw-light">Rs 98 Lakh*</p>
                </div>
                <div className="col-6 col-md-3 mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5">Available Units</h6>
                  <p className="mb-0 fs-2 fw-light">128</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-1" id='about'>
            <div className="content">
              <h2>About Us</h2>
              <p>At Binary Realty, we don’t just build structures — we shape meaningful spaces that reflect aspirations, enhance lifestyles, and stand the test of time. With every project, we blend innovation with intention, delivering homes defined by design clarity, construction excellence, and long-term value.</p>
              <p>Driven by a team that brings together deep industry experience and a forward-looking mindset, we approach each development as an opportunity to create more than just living spaces — we build communities rooted in trust, quality, and modern urban thinking.
              </p>
              <p>From vision to reality, every detail matters — and at Binary Realty, we ensure each one brings you closer to a better way of living.
              </p>
            </div>
            <div className="image-wrapper">
              <Image
                width={500}
                height={900}
                src="/images/Club-Entrance-View-min_Binary.webp"
                alt="Luxury interior"
              />
            </div>
          </section>
          <div className="section_home-stats">
            <div className="padding-global">
              <div className="container-large">
                <div className="home-stats_components">
                  <div className="home-stats_content-wrapper">
                    <div className="home-stats_text-wrapper">
                      <div className="text-color-grey">
                        <div className="text-size-medium">
                          Enter and see a sprawling canvas of green within the city
                        </div>
                      </div>
                    </div>
                    <div className="home-stats_items">
                      <div
                        id="w-node-cdea1d55-fe63-8f1c-3822-d0c3250461c3-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 mb-2">128</h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular fs-5">Units.</div>
                        </div>
                      </div>
                      <div
                        id="w-node-f6750213-c322-5874-8b4c-dd2586408f82-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 mb-2">
                            2 & 3 <span className="heading-style-h5">BHKS</span>
                          </h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular fs-5">Apartments</div>
                        </div>
                      </div>
                      <div
                        id="w-node-_1989e816-fb39-3880-661b-bed1357559b4-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 mb-2">30+</h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular fs-5">World Class Amenities</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-white p-0">
            <div className="container-fluid ">
              <div className='row align-items-center'>

                <div className='col-md-5 offset-md-1 px-md-5 d-flex align-items-center py-md-5 py-5 ' >
                  <div>
                    <h2 className="display-2 mb-4 text-secondary text-opacity-50 text-capitalize">The Soul of  Etania</h2>
                    <p className="fs-2 ps-5 mb-3 text-black " style={{ fontFamily: "Times New Roman, sans-serif !important" }} >  Every Home here carries a rare</p>
                    <h1 className="display-2 ps-5 text-uppercase mb-0" style={{ letterSpacing: '2px' }}> Aura</h1>
                    <p className='text-secondary   ps-md-5 ps-5 mt-0 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien.</p>
                    <div className=' ps-md-5 ps-5'>
                      <Link href="aura" className="btn btn-dark " >
                        View More
                      </Link>
                    </div>

                  </div>
                </div>
                <div className='offset-md-1 col-md-5 '>
                  <Image src={"/img/Binary-Etania.jpg"} alt="Etania" width={880} height={600} className="img-fluid " />
                </div>
              </div>


            </div>
          </section>

          <section className="py-5 bg-light" id='price'>
            <div className="container">
              <h2 className='text-center'>Price</h2>
              <div className="row justify-content-center g-4">
                {/* 2 BHK Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="pricing-card text-center p-4 rounded-4 shadow-sm bg-white">
                    <div className="bhk-tag border border-success text-success fw-bold py-2 rounded-3 mb-3">
                      2 BHK
                    </div>
                    <h4 className="fw-bold mb-1">₹ 98 Lakh*</h4>
                    <p className="mb-1">Onwards</p>
                    <p className="text-muted mb-3">Size – 1188 Sq.ft.</p>
                    <hr />
                    <a href="#" className="btn btn-dark fw-bold mt-3">
                      Click here
                    </a>
                  </div>
                </div>
                {/* 3 BHK Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="pricing-card text-center p-4 rounded-4 shadow-sm bg-white">
                    <div className="bhk-tag border border-success text-success fw-bold py-2 rounded-3 mb-3">
                      3 BHK
                    </div>
                    <h4 className="fw-bold mb-1">₹ 1.35 Cr*</h4>
                    <p className="mb-1">Onwards</p>
                    <p className="text-muted mb-3">Size – 1639 & 1652 Sq.ft.</p>
                    <hr />
                    <a href="#" className="btn btn-dark fw-bold mt-3">
                      Click here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>




          <div className="same-gap centered-text-section py-5" id='amenities'>
            <div className="container">
              <div className="row">
                <div className="title text-center mb-6">
                  <h2 className="text-dark text-3xl font-semibold">Amenities</h2>
                </div>
              </div>
              <div className="row my-2 py-1">
                <AmenitiesCarousel />
              </div>
              <div className="row my-2 py-1">
                <AmenitiesCarouselTwo />
              </div>
            </div>



          </div>


          <section className="section same-gap " id="specifications" style={{backgroundColor: "#1e291d"}}>
            <div className="container-fluid px-md-3 px-3 " style={{ "background-size": "60%", "background-position": "bottom", "background-repeat": "no-repeat" }}>
              <div className="title text-center">
                <h2 className="" style={{ "font-size": "36px !important","color" : "#738e62" }}>Specifications</h2>
              </div>
              <div className="col-md-11 d-block mx-auto  d-block mx-auto">
                <div className="row  ">
                  <div className="col-6 col-md-3 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/Icon.png" className="img-fluid" />
                      <h3>Structure</h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>RCC framed structure with 6-inch thick outer walls and 4-inch thick internal walls</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/plastering.png" className="img-fluid" />
                      <h3>Plastering</h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>External & Internal single coat cement plaster</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/Icon6.png" className="img-fluid" />
                      <h3>Painting</h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>External: Textured finish, primer, and two coats of emulsion (Asian/reputed)..</li>
                          <li>Internal: Smooth putty, primer, and two coats of emulsion (Asian/reputed).</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/Icon3.png" className="img-fluid" />
                      <h3> Door</h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>The main door is engineered wood with a full-width jamb.<br />
                            Internal doors are engineered wood with a laminated finish.<br />
                            Toilet and utility doors are WPC with high-quality hardware.<br />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/window.png" className="img-fluid" />
                      <h3>Windows</h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>UPVC sliding windows with mosquito mesh</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/flooring.png" className="img-fluid" />
                      <h3>FLOORING</h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>800x800 mm double charged vitrified tiles</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/backup.png" className="img-fluid" />
                      <h3>BACKUP POWER</h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>100% DG Backup power for common areas <br />
                            1 KVA for each apartment
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/Icon2.png" className="img-fluid" />
                      <h3>Electrical</h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>Great White switches / Anchor or equivalent, and fire-resistant wires from Great White / Anchor or an equivalent brand.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-2 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/electrical-point.png" className="img-fluid" />
                      <h3>Electrical POINTS</h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>Points for appliances and 2 extra plugs.<br />
                            TV and phone points in the living and master bedrooms.<br />
                            Geyser and exhaust fan points in toilets.<br />
                            AC points in the living room, master bedroom, and children’s bedroom.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-2 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/elevator.png" className="img-fluid" />
                      <h3>ELEVATOR</h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>6/8 passenger elevator from OTIS, or equivalent.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-2 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/toilets.png" className="img-fluid" />
                      <h3>TOILETS (4’X2’)</h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>Antiskid ceramic tiles of reputed make and dado up to door height</li>

                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-2 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/balcony.png" className="img-fluid" />
                      <h3>UTILITY AND BALCONY</h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>Reputed anti-skid ceramic tiles in the utility area.

                          </li>
                          <li className='ps-3'>  •	Staircase – Natural Stone flooring with edge polish<br />
                            •	Corridor – Reputed anti-skid vitrified tiles.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-2 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/kitchen.png" className="img-fluid" />
                      <h3>Kitchen </h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>Designer modular kitchen electrical points, water purifier/chimney provision, and washing machine space in the utility area.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-2 mb-4">
                    <div className="specifications-box">
                      <img src="/images/specifications/cp-sanitary.png" className="img-fluid" />
                      <h3>CP & SANITARY FITTINGS & FIXTURES </h3>
                      <div className="specifications-box-content">
                        <ul className='list-unstyled'>
                          <li>ISI CP and sanitary fittings from Grohe/Kohler, or equivalent.<br />
                            Soft close seat cover and monolithic sink from TOTO/Kohler or equivalent.

                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Section 2: 360 Lifestyle Cards */}
          {/* <div className="section_biodiversity-benefits" id='amenities'>
            <div className="container-large">
              <div className="biodiversity-benefits_components">
                <div
                  id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                  className="biodiversity-benefits_header-wrap"
                >
                  <h2 data-animate={1} className="heading-style-h2">
                    Amenities
                  </h2>
                </div>
              </div>
            </div>
            <Amenities />


          </div> */}
          <div
            data-w-id="8905ac58-eaf7-356f-bf47-4ad8001e257f"
            className="section_home-masterplan" id='master-plan'
          >
            <div className="padding-global">
              <div className="container-large">
                <div className="home-masterplan_component">
                  <div
                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                    className="biodiversity-benefits_header-wrap"
                  >
                    <h2 data-animate={1} className="heading-style-h2 text-center">
                      The Master Plan
                    </h2>
                  </div>

                  <div
                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                    className="biodiversity-benefits_header-wrap"
                  >
                    <Image
                      width={1600}
                      height={500}
                      src="/images/Master Plan_.avif"
                      loading="lazy"
                      alt=""
                      className="home-masterplan_img "
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="section_home-connectivity" id='location'>
            <div className="padding-global">
              <div className="container-large">
                <div className="home-connectivity_components">
                  <div className="home-connectivity_image-wrapper">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17483.264883338023!2d77.773876!3d12.864455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae73000cbfed1d%3A0x86b4704e1c53785c!2sBinary%20Temple%20Tree!5e1!3m2!1sen!2sin!4v1750827706567!5m2!1sen!2sin"
                      width="100%"
                      height="600"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade" // ✅ Fixed
                    ></iframe>
                  </div>
                  <div
                    id="w-node-ae28a13d-3673-7d72-6c93-35ac2b8ff216-ac1b3e9a"
                    className="home-connectivity_content-wrapper"
                  >
                    <div className="home-connectivity_content">
                      <div className="home-connectivity_heading-wrapper">
                        <h2
                          data-animate={1}
                          className="heading-style-h2 text-color-offwhite"
                        > Located{" "}<span className="text-color-accent">Off Sarjapur Road, </span>{" "} Bangalore.
                        </h2>
                      </div>
                      <div className="home-connectivity_text-wrapper">
                        <div className="text-size-regular text-color-offwhite">
                          A spacious urban corridor. Seamless access to IT hubs like Whitefield and Outer Ring Road. With fast-growing infrastructure and excellent connectivity across East and South Bengaluru, Sarjapura Road is emerging as the city’s next vibrant growth destination.
                        </div>
                      </div>
                    </div>
                    <div className="home-connectivity_distance-wrapper">
                      <div
                        id="w-node-_9441ef5f-b995-4318-be5b-df8ccce3289b-ac1b3e9a"
                        className="home-connectivity_distance"
                      >
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">Wipro SEZ </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">10 mins</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_2e82b6e9-e071-cd09-e477-4c91b9a4b018-ac1b3e9a"
                        className="home-connectivity_distance"
                      >
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">RGA Tech Park</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">12 mins</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_681bb572-5097-8f68-667c-d8add2d0c9a1-ac1b3e9a"
                        className="home-connectivity_distance"
                      >
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">RMZ Ecoworld</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">15 mins</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-connectivity_distance">
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">Outer Ring Road</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">15 mins</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_681bb572-5097-8f68-667c-d8add2d0c9a1-ac1b3e9a"
                        className="home-connectivity_distance"
                      >
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">Sarjapur Main Road</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">8 mins</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-connectivity_distance">
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">HSR Layout</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">20 mins</div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


      </main>
    </>
  );
}
