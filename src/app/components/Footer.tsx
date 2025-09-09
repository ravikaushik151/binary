'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        // <footer className="footer" id='contact'>
        //     <div className="footer-container">

        //         {/* Project Info */}
        //         <div className="footer-column text-center">
        //             <h4 className="footer-title fs-2">Binary Etania</h4>
        //             <p className=''>
        //                 Sy no. 110/1B Hosahalli road,<br /> Sree Narayana Nagar,<br /> Chikkadunnasandra
        //             </p>
        //             <div className="footer-rera d-none">
        //                 <p><strong>RERA NO.</strong></p>
        //                 <p>PRM/KA/RERA/1251/309/PR/123456/006123</p>
        //             </div>
        //         </div>

        //         {/* Developer Info */}
        //         <div className="footer-column d-none">
        //             <h4 className="footer-title">Binary</h4>
        //             <p>
        //                 S.Y. No. 19,
        //                 <br /> Sompura Gate, Sarjapura Road,
        //                 <br />Bengaluru, Karnataka-562125
        //             </p>
        //             <p className="footer-contact">+91 96112 11255</p>
        //             <p>sales@binaryrealty.in</p>
        //         </div>
        //         <div className="footer-column  d-none">
        //             <div className="footer-association mt-0">
        //                 <Image
        //                     src="/img/logo.png"
        //                     alt="logo"
        //                     width={100}
        //                     height={80}
        //                     className="brown-logo mb-4" />
        //                 <p>In Association With</p>
        //                 <div className="footer-social">
        //                     <Link href="https://www.facebook.com/people/Binary-Realty/61565957242898/#"><i className="fab fa-facebook-f"></i></Link>
        //                     <Link href="https://www.instagram.com/binaryrealtytempletree/"><i className="fab fa-instagram"></i></Link>
        //                     <Link href="https://www.linkedin.com/company/binary-realty1/?viewAsMember=true"><i className="fab fa-linkedin-in"></i></Link>
        //                 </div>
        //             </div>
        //         </div>
        //         {/* Get In Touch Form */}
        //         <div className="footer-column text-center w-50">
        //             <h4 className="footer-heading">GET IN TOUCH</h4>
        //             <form className="footer-form">
        //                 <input type="text" placeholder="Name" className="footer-input" />
        //                 <input type="email" placeholder="Email" className="footer-input" />
        //                 <input type="tel" placeholder="Contact Number" className="footer-input" />
        //                 <button type="submit" className="footer-button">SUBMIT</button>
        //             </form>
        //         </div>
        //     </div>
        //     {/* Copyright */}
        //     <div className="footer-bottom">
        //         <p className='d-none'>© {new Date().getFullYear()} Binary Etania. All rights reserved. Digital Partner <a target="_blank" href="https://www.imsolutions.co/" className="text-dark">IM Solutions</a></p>
        //         <p>This is not the official website of developer & property. It belongs to authorized channel partner for information purpose only. All rights for logo & images are reserved to developer. Thank you for visiting our website. This disclaimer (Disclaimer) is applicable to this website and all microsites and websites owned by us. By using or accessing this website you agree with the Disclaimer without any qualification or limitation.</p>
        //     </div>
        // </footer>
        <footer
            className="bg-dark"
           style={{ backgroundColor: "#1e291d !important" }}
            id="contact"
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className=" d-flex align-items-start ">
                            <div className=''>
                                <a href="https://binaryrealty.in/" target='_blank' className='text-start'>
                                    <img
                                        src="/img/logo.png"
                                        className="img-fluid text-start mb-3"
                                        alt="Binary Realty"
                                        style={{ maxWidth: 120 }}
                                    />
                                </a>
                                <address className=" text-white text-start ps-md-5" >
                                    <strong>Binary Etania</strong> <br />

                                    Sy no. 110/1B Hosahalli road,<br /> Sree Narayana Nagar,<br /> Chikkadunnasandra

                                </address>
                                <p
                                    className="text-start  ps-md-5"
                                    style={{ fontSize: "13px !important", fontFamily: "Roboto" }}
                                >
                                    (+91)96112 11255

                                </p>
                                <p
                                    className="text-start  ps-md-5"
                                    style={{ fontSize: "14px !important", fontFamily: "Roboto" }}
                                >
                                    {" "}
                                    sales@binaryrealty.in
                                </p>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-6 text-end d-block me-auto">
                        <div className="px-3">
                            <p className="mb-3">
                                <a
                                    href="./"
                                    className="px-3 text-white text-decoration-none fs-5 "
                                >
                                    Home
                                </a>
                                <a
                                    href="about"
                                    className="px-3 text-white text-decoration-none fs-5 "
                                >
                                    About
                                </a>
                                <a
                                    href="projects"
                                    className="px-3 text-white text-decoration-none fs-5 "
                                >
                                    Projects
                                </a>
                                <a
                                    href="career"
                                    className="px-3 text-white text-decoration-none fs-5 "
                                >
                                    Careers
                                </a>
                                <a
                                    href="blogs"
                                    className="px-3 text-white text-decoration-none fs-5 "
                                >
                                    Blogs
                                </a>
                                <a
                                    href="contact"
                                    className="px-3 text-white text-decoration-none fs-5 "
                                >
                                    Contact
                                </a>
                            </p>
                            <p className="fs-5 mt-5 mb-3 text-end">
                                {" "}
                                Have something to talk about with our <br /> professionals?
                            </p>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: "\n\n                            "
                                }}
                            />
                            <div className="postion-relative mt-3">
                                <div className="row">
                                    <div className="col-md-8 offset-md-4">
                                        <form id="newsletterForm" className="text-end">
                                            <div className="input-group mb-3 text-end">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-control rounded-pill text-white"
                                                    placeholder="Your Email"
                                                    aria-label="Email"
                                                    aria-describedby="basic-addon1"

                                                />
                                                <div className="input-group-prepend">
                                                    <button
                                                        type="submit"
                                                        id="newsletterForm-btn"
                                                        className="btn btn-primary btn-sm footer-button mt-0"
                                                    >
                                                        <img
                                                            src="/images/arrow_outward.png"
                                                            className="w-75 d-block mx-auto"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            <div id="resultMessage" /> {/* Success/Error Message */}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <p className="my-3">
                                <a
                                    href="https://www.facebook.com/people/Binary-Realty/61565957242898/"
                                    className="mx-2 mb-3 social"
                                >
                                    <i className="fa-brands fa-facebook" />
                                </a>
                                <a
                                    href="https://x.com/binary__realty"
                                    className="mx-2 mb-3 social"
                                >
                                    <i className="fa-brands fa-x-twitter" />
                                </a>
                                <a
                                    href="https://www.instagram.com/binaryrealtytempletree/"
                                    className="mx-2 mb-3 social"
                                >
                                    <i className="fa-brands fa-instagram" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/binary-realty1/?viewAsMember=true"
                                    className="mx-2 mb-3 social"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom border-top border-secondary py-3 mt-4">
                <div className="container">
                    <div className="row py-3 align-items-center">
                        <div className="col-md-6 text-start">
                            <p className="text-white fs-6 my-2">
                                Binary Etania © 2025. All rights reserved. Digital Partner{" "}
                                <a
                                    target="_blank"
                                    href="https://www.imsolutions.co/"
                                    className="text-white"
                                >
                                    IM Solutions
                                </a>
                            </p>
                        </div>
                        <div className="col-md-6 text-end">
                            <p className="text-white fs-6 my-2">
                                <a
                                    href="https://binaryrealty.in/cookie-policy" target='_blank'
                                    className="p-2 btn-transparent text-white border-0 border-white rounded-pill text-decoration-none"
                                >
                                    Cookie Policy
                                </a>
                                <a
                                    href="https://binaryrealty.in/terms-of-use" target='_blank'
                                    className="p-2 btn-transparent text-white border-0 border-white rounded-pill text-decoration-none"
                                >
                                    Terms of Use
                                </a>
                                <a
                                    href="https://binaryrealty.in/privacy-policy" target='_blank'
                                    className="p-2 btn-transparent text-white border-0 border-white rounded-pill text-decoration-none"
                                >
                                    Privacy and Security
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
