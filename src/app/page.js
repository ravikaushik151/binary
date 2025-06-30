'use client';
import { useEffect } from 'react';

import Link from "next/link";
import Amenities from './components/Amenities';
import Image from 'next/image';
import HeroSlider from './components/Home/HeroSlider';
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
                  <p className="mb-0 fs-2 fw-light">80 Acres</p>
                </div>
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5">Possession</h6>
                  <p className="mb-0 fs-2 fw-light">2029</p>
                </div>
                <div className="col-6 col-md-3 border-end border-light mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5">Starting Price</h6>
                  <p className="mb-0 fs-2 fw-light">Rs 98 Lack*</p>
                </div>
                <div className="col-6 col-md-3 mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5">Available Units</h6>
                  <p className="mb-0 fs-2 fw-light">2 &amp; 3 BHK</p>
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
                          <h2 className="heading-style-h1">1000+</h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular">Trees</div>
                        </div>
                      </div>
                      <div
                        id="w-node-f6750213-c322-5874-8b4c-dd2586408f82-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1">
                            2 & 3 <span className="heading-style-h5">BHKS</span>
                          </h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular">Miyawaki Forest</div>
                        </div>
                      </div>
                      <div
                        id="w-node-_1989e816-fb39-3880-661b-bed1357559b4-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1">30+</h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular">World Class Amenities</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                    <p className="text-muted mb-3">Size – 1180 to 1200 Sq.ft.</p>
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
                    <p className="text-muted mb-3">Size – 1630 to 1660 Sq.ft.</p>
                    <hr />
                    <a href="#" className="btn btn-dark fw-bold mt-3">
                      Click here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Section 2: 360 Lifestyle Cards */}
          <div className="section_biodiversity-benefits" id='amenities'>
            <div className="padding-global">
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
                  <div
                    id="w-node-e51eebe9-017b-be74-9093-7c6dbea5d495-ac1b3eca"
                    className="biodiversity-benefits_items"
                  >
                    <div className="biodiversity-benefits_image-wrapper">
                      <div className="biodiversity-benefits_image w-embed">
                        <svg
                          width={50}
                          height={50}
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="air"
                            d="M30 1H20M28 5H22M30 49H20M28 45H22M27 5V45M23 5V31.5M23 35.5V41M31 19.5H46.5C47.163 19.5 47.799 19.237 48.268 18.768C48.737 18.299 49 17.663 49 17C49 15.619 47.881 14.5 46.5 14.5C45.692 14.5 45 14.5 45 14.5M31 30.5H46.5C47.163 30.5 47.799 30.763 48.268 31.232C48.737 31.701 49 32.337 49 33C49 34.381 47.881 35.5 46.5 35.5C45.692 35.5 45 35.5 45 35.5M29.846 10.901H38.3C39.239 10.901 40 10.14 40 9.201C40 8.262 39.239 7.5 38.3 7.5C38.119 7.5 38 7.5 38 7.5M29.846 39.099H38.3C39.239 39.099 40 39.86 40 40.799C40 41.738 39.239 42.5 38.3 42.5C38.119 42.5 38 42.5 38 42.5M5 12C5 13.1046 4.10457 14 3 14C1.89543 14 1 13.1046 1 12C1 10.8954 1.89543 10 3 10C4.10457 10 5 10.8954 5 12ZM19.423 9.401C19.423 10.5056 18.5276 11.401 17.423 11.401C16.3184 11.401 15.423 10.5056 15.423 9.401C15.423 8.29643 16.3184 7.401 17.423 7.401C18.5276 7.401 19.423 8.29643 19.423 9.401ZM15 28.074C15 29.1786 14.1046 30.074 13 30.074C11.8954 30.074 11 29.1786 11 28.074C11 26.9694 11.8954 26.074 13 26.074C14.1046 26.074 15 26.9694 15 28.074ZM8 41.099C8 42.2036 7.10457 43.099 6 43.099C4.89543 43.099 4 42.2036 4 41.099C4 39.9944 4.89543 39.099 6 39.099C7.10457 39.099 8 39.9944 8 41.099Z"
                            stroke="#1E291D"
                            strokeWidth="1.5"
                            strokeMiterlimit={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="biodiversity-benefits_text-wrapper">
                      <div className="text-color-dark-rainforest">
                        <h5 className="heading-style-h5">A Breath of Fresh Air</h5>
                      </div>
                      <div className="biodiversity-benefits_text">
                        <div className="text-color-dark-rainforest">
                          <div className="text-size-small-2">
                            An abundance of trees helps absorb carbon dioxide from the
                            air, purifying the atmosphere.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_91ca4f9c-c42a-1f93-46d6-06f3b53f6ede-ac1b3eca"
                    className="biodiversity-benefits_items"
                  >
                    <div className="biodiversity-benefits_image-wrapper">
                      <div className="biodiversity-benefits_image w-embed">
                        <svg
                          width={50}
                          height={41}
                          viewBox="0 0 50 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="light"
                            d="M1 40H7.74296C8.53905 40 9.30202 39.6909 9.86523 39.142C10.4275 38.5922 10.7442 37.8474 10.7442 37.0702C10.7442 33.7067 10.7442 28.2201 10.7442 24.8566C10.7442 24.0794 10.4275 23.3346 9.86523 22.7848C9.30202 22.236 8.53905 21.9268 7.74296 21.9268C4.87915 21.9268 1 21.9268 1 21.9268M10.7442 25.7317C10.7442 25.7317 12.2292 25.3455 13.8603 24.9203C16.5926 24.2098 19.4798 24.3115 22.1526 25.2142C24.5682 26.0313 27.4807 27.0149 29.2123 27.5999C30.1867 27.93 31.2478 27.9167 32.2135 27.5628C33.5455 27.0748 35.4924 26.3624 36.8682 25.8592C37.8329 25.5063 38.9194 25.8478 39.4904 26.6839L39.4914 26.6848C39.7428 27.0539 39.8266 27.5076 39.7223 27.9385C39.618 28.3694 39.3355 28.7395 38.9408 28.9592C36.9306 30.0807 33.6429 31.9146 33.6429 31.9146M15.6162 37.9539C15.6162 37.9539 24.6364 38.5684 29.1645 38.8766C30.7957 38.9879 32.4122 38.518 33.716 37.5544C37.3925 34.8396 45.0845 29.157 48.2806 26.7961C49.0767 26.2073 49.2365 25.101 48.6372 24.321L48.6353 24.3191C48.4112 24.0262 48.0195 23.9073 47.6638 24.0233C45.6916 24.6644 39.4894 26.6829 39.4894 26.6829M14.6418 28.5854C14.6418 28.5854 18.2647 26.9759 21.4627 28.5854M25.3604 20.0244L31.2069 20.9756M27.3092 22.7192L29.2581 23.0369M25.3604 16.3565C25.3604 14.9097 24.7485 13.5285 23.6698 12.5373C22.3085 11.3331 21.4627 9.59141 21.4627 7.65854C21.4627 3.98398 24.5195 1 28.2836 1C32.0478 1 35.1045 3.98398 35.1045 7.65854C35.1045 9.56288 34.2841 11.2808 32.9696 12.4955C31.8529 13.5447 31.2225 14.9924 31.2225 16.5049C31.2069 16.5058 31.2069 16.5077 31.2069 16.5077C31.2069 16.9091 31.0256 17.2915 30.7109 17.5512C30.3971 17.8109 29.982 17.9222 29.5757 17.8566C28.4707 17.6768 27.0578 17.4466 26.1808 17.3039C25.7073 17.2269 25.3604 16.8273 25.3604 16.3584V16.3565Z"
                            stroke="#222A33"
                            strokeWidth="1.5"
                            strokeMiterlimit={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="biodiversity-benefits_text-wrapper">
                      <div className="text-color-dark-rainforest">
                        <h5 className="heading-style-h5">Shine a Light</h5>
                      </div>
                      <div className="biodiversity-benefits_text-two">
                        <div className="text-color-dark-rainforest">
                          <div className="text-size-small-2">
                            Alternate street lights will be smart poles that run on
                            solar power and reduce energy consumption.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_5088ab87-c65b-e4c4-76ce-e39d7e8521f9-ac1b3eca"
                    className="biodiversity-benefits_items"
                  >
                    <div className="biodiversity-benefits_image-wrapper">
                      <div className="biodiversity-benefits_image w-embed">
                        <svg
                          width={50}
                          height={43}
                          viewBox="0 0 50 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="stream"
                            d="M29.474 4C32.414 8.273 37.086 17.166 37.086 20.414C37.086 27.084 31.67 32.5 25 32.5C18.33 32.5 12.914 27.084 12.914 20.414C12.914 15.371 19.822 6.111 23.193 1.893C23.623 1.33 24.291 1 25 1M33.5 21.957C33.5 25.292 30.792 28 27.457 28M41 36C41 37.104 33.831 38 25 38C16.169 38 9 37.104 9 36M39.395 33C45.226 33.913 49 35.365 49 37C49 39.76 38.246 42 25 42C11.754 42 1 39.76 1 37C1 35.365 4.774 33.913 10.605 33"
                            stroke="#222A33"
                            strokeWidth="1.5"
                            strokeMiterlimit={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="biodiversity-benefits_text-wrapper">
                      <div className="text-color-dark-rainforest">
                        <h5 className="heading-style-h5">A Steady Stream of Life</h5>
                      </div>
                      <div className="biodiversity-benefits_text-one">
                        <div className="text-color-dark-rainforest">
                          <div className="text-size-small-2">
                            Water collection and treatment enable the reuse of water to
                            nurture the soil and the trees.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_29e40762-160f-2c2d-333d-5c958b683456-ac1b3eca"
                    className="biodiversity-benefits_items-copy"
                  >
                    <div className="biodiversity-benefits_image-wrapper">
                      <div className="biodiversity-benefits_image w-embed">
                        <svg
                          width={44}
                          height={44}
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="water"
                            d="M25.3283 15.426C26.8991 17.7063 28.4288 20.3727 28.4288 22.1068C28.4288 25.666 25.5368 28.5565 21.9737 28.5565C18.4106 28.5565 15.5186 25.666 15.5186 22.1068C15.5186 19.415 19.2079 14.4736 21.0083 12.2222C21.2387 11.9219 21.5952 11.746 21.9737 11.746M25.2012 22.2679C25.2012 24.0475 23.7548 25.4927 21.9737 25.4927M21.9737 1.85786C33.0949 1.85786 42.1239 10.8794 42.1239 21.9912L38.6195 18.4898M21.9737 42.1246C10.8526 42.1246 1.82353 33.1031 1.82353 21.9912L5.32791 25.4927M36.8673 40.3739C36.8673 40.3739 35.8011 40.05 35.1151 38.6232M36.7955 30.007C37.0242 29.6988 37.386 29.5168 37.7697 29.5168C38.1534 29.5168 38.5153 29.6988 38.7439 30.007C40.2569 31.9231 43 35.6855 43 37.7741C43 40.6584 40.6564 43 37.7697 43C34.883 43 32.5394 40.6584 32.5394 37.7741C32.5394 35.6855 35.2825 31.9231 36.7955 30.007ZM5.25607 1.4902C5.48473 1.18208 5.84656 1 6.23029 1C6.61402 1 6.97584 1.18208 7.20451 1.4902C8.71752 3.40638 11.4606 7.16869 11.4606 9.25731C11.4606 12.1416 9.11702 14.4832 6.23029 14.4832C3.34355 14.4832 1 12.1416 1 9.25731C1 7.16869 3.74305 3.40638 5.25607 1.4902Z"
                            stroke="#222A33"
                            strokeWidth="1.5"
                            strokeMiterlimit={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="biodiversity-benefits_text-wrapper">
                      <div className="text-color-dark-rainforest">
                        <h5 className="heading-style-h5">The Water Recycle</h5>
                      </div>
                      <div className="biodiversity-benefits_text-three">
                        <div className="text-color-dark-rainforest">
                          <div className="text-size-small-2">
                            The water you consume gets treated onsite and is reused to
                            irrigate the landscapes.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Amenities />
          </div>
          <div
            data-w-id="8905ac58-eaf7-356f-bf47-4ad8001e257f"
            className="section_home-masterplan" id='master-plan'
          >
            <div className="padding-global">
              <div className="container-large">
                <div className="home-masterplan_component">
                  <div className="home-masterplan_left">
                    <h2
                      data-animate={1}
                      className="heading-style-h2 text-color-dark-rainforest"
                    >
                      The Master Plan
                    </h2>
                  </div>
                  <div
                    id="w-node-_0c32365e-28ce-9e1d-b95e-bd08d9997641-ac1b3e9a"
                    className="home-masterplan_right"
                  >
                    <Image
                      width={500}
                      height={700}
                      src="/images/Masterplan-for-website.png"
                      loading="lazy"
                      alt=""
                      className="home-masterplan_img"
                    />
                    <div className="margin-top margin-small">
                      <div className="max-width-small">
                        <div className="text-style-muted">
                          <div className="disclamer-text">
                            Note: The sizes mentioned above are consolidated for ease of
                            categorization and may have minor variations.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-masterplan_legend">
                    <div className="heading-style-h5">Legend</div>
                    <div className="home-highlights_legend-grid">
                      <div
                        id="w-node-be4663ad-c0a0-253c-f46e-d6c640bbbb11-ac1b3e9a"
                        className="home-highlights_points-grid"
                      >
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">9</div>
                          </div>
                          <div className="home-highlights_text">Clubhouse</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">10</div>
                          </div>
                          <div className="home-highlights_text">Community Seating</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">11</div>
                          </div>
                          <div className="home-highlights_text">Box Cricket</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">12</div>
                          </div>
                          <div className="home-highlights_text">Parking</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">13</div>
                          </div>
                          <div className="home-highlights_text">Bird Watching Zone</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">14</div>
                          </div>
                          <div className="home-highlights_text">Amphitheatre</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">15</div>
                          </div>
                          <div className="home-highlights_text">Multipurpose Lawn</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">16</div>
                          </div>
                          <div className="home-highlights_text">Senior Citizen Park</div>
                        </div>
                      </div>
                      <div
                        id="w-node-_5bcfc565-769c-8295-15b8-0bc64774afab-ac1b3e9a"
                        className="home-highlights_points-grid"
                      >
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">1</div>
                          </div>
                          <div className="home-highlights_text">Entry/Exit</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">2</div>
                          </div>
                          <div className="home-highlights_text">Entrace Archway</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">3</div>
                          </div>
                          <div className="home-highlights_text">Roundabout</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">4</div>
                          </div>
                          <div className="home-highlights_text">Pet Park</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">5</div>
                          </div>
                          <div className="home-highlights_text">Tennis Court</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">6</div>
                          </div>
                          <div className="home-highlights_text">Multipurpose Court</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">7</div>
                          </div>
                          <div className="home-highlights_text">Open Park</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">8</div>
                          </div>
                          <div className="home-highlights_text">Kids Play Area</div>
                        </div>
                      </div>
                      <div className="home-highlights_points-grid last">
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">17</div>
                          </div>
                          <div className="home-highlights_text">Padel Tennis</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">18</div>
                          </div>
                          <div className="home-highlights_text">Garden Pavilion</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">19</div>
                          </div>
                          <div className="home-highlights_text">Leisure Park</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">20</div>
                          </div>
                          <div className="home-highlights_text">Miyawaki Forest</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">21</div>
                          </div>
                          <div className="home-highlights_text">Avenue Plantation</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">22</div>
                          </div>
                          <div className="home-highlights_text">Outdoor Gym</div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">23</div>
                          </div>
                          <div className="home-highlights_text">Services</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/images/Hightlight-right-leaf-image.svg"
              loading="lazy"
              alt=""
              className="home-highlights_left-leaf"
            />
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
                          A spacious city layout. A direct line to Electronic City. Fast
                          connectivity to most of Bengaluru. Hosa Road is full of
                          opportunities and is primed to be the citys new hub.
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
