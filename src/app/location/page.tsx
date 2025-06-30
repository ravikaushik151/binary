import Image from "next/image";
import Link from "next/link";
export default function Location() {
    return (
        <>
            <div id="carouselExampleDark" className="header-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="image-container">
                            <Image
                                src="/img/banner (1).png"
                                height={2880}
                                width={1920}
                                className="img-fluid masterpiece rounded-4"
                                alt="masterpiece"
                            />
                            <div className="overlay2 ">
                                <div className="text-white d-block">
                                    {" "}
                                    <p className="text-center d-block fs-1 mb-0 text-uppercase">
                                        {" "}
                                        Location
                                    </p>
                                    <p className="text-center d-block fs-6 ">
                                        <Link
                                            className="text-white text-decoration-none"
                                            href={"/"}
                                        >
                                            {" "}
                                            Home
                                        </Link>{" "}
                                        / Location{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="TOP" className="section_amenities-hero">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="amenities-hero_components">
                            <div className="amenities-hero_content-wrapper">
                                <div className="amenities-hero_heading-wrapper">
                                    <div className="text-color-dark-rainforest">
                                        <h1
                                            data-animate={2}
                                            className="heading-style-h2 text-center"
                                        >
                                            Welcome to <strong>Binary</strong>, where vision meets
                                            reality.
                                        </h1>
                                    </div>
                                </div>
                                <div className="amenities-hero_text-head text-center">
                                    <div className="text-color-green">
                                        <div className="text-size-regular">
                                            Join us on our journey as we continue to shape the
                                            skylines of tomorrow and create spaces where dreams
                                            thrive.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section_home-connectivity px-5" id='location'>
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
        </>
    );
}
