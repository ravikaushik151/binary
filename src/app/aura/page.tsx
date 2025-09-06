import Image from "next/image";
import Link from "next/link";
export default function Aura() {
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
                                        About us
                                    </p>
                                    <p className="text-center d-block fs-6 my-3">
                                        <Link
                                            className="text-white text-decoration-none"
                                            href={"./"}
                                        >
                                            {" "}
                                            Home
                                        </Link>{" "}
                                        / About Us{" "}
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
                        <div className="row align-items-center">
                            {/* Left Image */}
                            <div className="col-md-6 mb-4 mb-md-0 order-1 order-md-1">
                                <Image
                                    src="/images/Aura1.png" // replace with your actual image path
                                    alt="Architecture"
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded shadow my-5"
                                />
                            </div>

                            {/* Right Text */}
                            <div className="col-md-6 order-2 order-md-2">
                                <h1 className="display-1 fw-bold">A</h1>
                                <h3 className="fw-normal">
                                    Architecture that <br /> inspires and endures.
                                </h3>
                                <p className="text-muted">
                                    Design crafted not just to look timeless, but to live timeless.
                                </p>
                            </div>

                        </div>
                        <div className="row align-items-center">
                            {/* Left Text */}
                            <div className="col-md-6 mb-4 mb-md-0 order-2 order-md-1">
                                <h1 className="display-1 fw-bold">U</h1>
                                <h3 className="fw-normal">
                                    Utmost Privacy with <br /> no common walls.
                                </h3>
                                <p className="text-muted">
                                    Silence and solitude, the rarest luxuries in city life.
                                </p>
                            </div>

                            {/* Right Image */}
                            <div className="col-md-6 text-center order-1 order-md-2">
                                <Image
                                    src="/images/Aura2.png" // replace with your actual image
                                    alt="Privacy"
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded shadow my-5"
                                />
                            </div>
                        </div>
                        <div className="row align-items-center">
                            {/* Left Image */}
                            <div className="col-md-6 mb-4 mb-md-0 order-1 order-md-1">
                                <Image
                                    src="/images/Aura3.png" // replace with your actual image
                                    alt="Retreat"
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded shadow my-5"
                                />
                            </div>

                            {/* Right Text */}
                            <div className="col-md-6 order-2 order-md-2">
                                <h1 className="display-1 fw-bold">R</h1>
                                <h3 className="fw-normal">
                                    Retreat that soothes <br /> your soul.
                                </h3>
                                <p className="text-muted">
                                    A sanctuary where every corner feels like an escape.
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            {/* Left Text */}
                            <div className="col-md-6 mb-4 mb-md-0 order-2 order-md-1">
                                <h1 className="display-1 fw-bold">A</h1>
                                <h3 className="fw-normal">
                                    Aeration that breathes <br /> life into every corner.
                                </h3>
                                <p className="text-muted">
                                    Homes that open to light, breeze, and freshness every day.
                                </p>
                            </div>

                            {/* Right Image */}
                            <div className="col-md-6 text-center order-1 order-md-2">
                                <Image
                                    src="/images/Aura4.png" // replace with your actual image
                                    alt="Aeration"
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded shadow my-5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
