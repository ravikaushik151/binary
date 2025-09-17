'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    // Handle change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle submit (shared for both forms)
    const handleSubmit = async (e, subject, isDownload = false) => {
        e.preventDefault();
        setLoading(true);
        setResult("");

        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, subject }),
            });

            const data = await res.json();
            if (data.success) {
                setResult("✅ Email sent successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });

                // If it's the download brochure form, trigger PDF download
                if (isDownload) {
                    const link = document.createElement("a");
                    link.href = "/sample.pdf"; // put sample.pdf in /public folder
                    link.download = "sample.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            } else {
                setResult("❌ Failed to send email.");
            }
        } catch (err) {
            setResult("❌ Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>

            {/*
                <div className="mt-4">
                    <button className="btn btn-success me-3" data-bs-toggle="modal" data-bs-target="#downloadBrochureModal">
                    Download Brochure
                 </button>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#enquireNowModal">
                    Enquire Now
                    </button>
                </div>
          */}
            <footer className="" style={{ backgroundColor: "#1e291d" }} id="contact">
                <div className="container">
                    <div className="row">
                        {/* Left side */}
                        <div className="col-md-6 d-block">
                            <div className="px-md-5">
                                <div className="text-center text-md-start ps-md-5">
                                    <a href="https://binaryrealty.in/" target="_blank" className="d-inline-block">
                                        <img
                                            src="/img/logo.png"
                                            className="img-fluid mb-3"
                                            alt="Binary Realty"
                                            style={{ maxWidth: 120 }}
                                        />
                                    </a>
                                </div>

                                <address className="text-white text-center text-md-start ps-md-5">
                                    <strong>Binary Etania</strong> <br />
                                    Sy no. 110/1B Hosahalli road,<br /> Sree Narayana Nagar,<br /> Chikkadunnasandra
                                </address>

                                <p
                                    className="text-center text-md-start ps-md-5"
                                    style={{ fontSize: "13px", fontFamily: "Roboto" }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px" }} className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 640 640"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" /></svg>
                                     (+91) 96112 11255
                                </p>

                                <p
                                    className="text-center text-md-start ps-md-5"
                                    style={{ fontSize: "14px", fontFamily: "Roboto" }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px" }} className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" /></svg>   sales@binaryrealty.in
                                </p>
                            </div>
                        </div>


                        {/* Right side */}
                        <div className="col-md-6 text-end d-block me-md-auto mx-auto">
                            <div className="px-md-3 ">
                                <p className="mb-3">
                                    <a href="./" className="px-md-3 px-1 text-white text-decoration-none fs-5">Home</a>
                                    <a href="about" className="px-md-3 px-1 text-white text-decoration-none fs-5">About</a>
                                    <a href="projects" className="px-md-3 px-1 text-white text-decoration-none fs-5">Projects</a>
                                    <a href="career" className="px-md-3 px-1 text-white text-decoration-none fs-5">Careers</a>
                                    <a href="blogs" className="px-md-3 px-1 text-white text-decoration-none fs-5">Blogs</a>
                                    <a href="contact" className="px-md-3 px-1 text-white text-decoration-none fs-5">Contact</a>
                                </p>
                                <p className="fs-md-5 fs-4 mt-5 mb-3 text-end m-center">
                                    Have something to talk about with our <br /> professionals?
                                </p>

                                {/* Newsletter form */}
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
                                                                alt="send"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                {/* Social links */}
                                <p className="my-3">
                                    <a href="https://www.facebook.com/people/Binary-Realty/61565957242898/" className="mx-2 mb-3 social">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px" }} className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 640 640"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" /></svg>
                                    </a>
                                    <a href="https://x.com/binary__realty" className="mx-2 mb-3 social">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px" }} className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" /></svg>
                                    </a>
                                    <a href="https://www.instagram.com/binaryrealtytempletree/" className="mx-2 mb-3 social">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px" }} className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" /></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/company/binary-realty1/?viewAsMember=true" className="mx-2 mb-3 social text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px" }} className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" /></svg>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="footer-bottom border-top border-secondary py-3 mt-4">
                    <div className="container">
                        <div className="row py-3 align-items-center">
                            <div className="col-md-6 text-start">
                                <p className="text-white fs-6 my-2">
                                    Binary Etania © 2025. All rights reserved. Digital Partner{" "}
                                    <a target="_blank" href="https://www.imsolutions.co/" className="text-white">
                                        IM Solutions
                                    </a>
                                </p>
                            </div>
                            <div className="col-md-6 text-end">
                                <p className="text-white fs-6 my-2">
                                    <a href="https://binaryrealty.in/cookie-policy" target="_blank" className="p-2 btn-transparent text-white border-0 border-white rounded-pill text-decoration-none">
                                        Cookie Policy
                                    </a>
                                    <a href="https://binaryrealty.in/terms-of-use" target="_blank" className="p-2 btn-transparent text-white border-0 border-white rounded-pill text-decoration-none">
                                        Terms of Use
                                    </a>
                                    <a href="https://binaryrealty.in/privacy-policy" target="_blank" className="p-2 btn-transparent text-white border-0 border-white rounded-pill text-decoration-none">
                                        Privacy and Security
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* ---------------------- DOWNLOAD BROCHURE MODAL ---------------------- */}
            <div className="modal fade" id="downloadBrochureModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Download Brochure</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e, "Download Brochure Request", true)}>
                            <div className="modal-body">
                                <input type="text" name="name" className="form-control mb-2" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                <input type="email" name="email" className="form-control mb-2" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                <input type="tel" name="phone" className="form-control mb-2" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                                <textarea
                                    name="message"
                                    className="form-control mb-2"
                                    placeholder="Message"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {result && <p className="text-success">{result}</p>}
                                <div className="text-center py-3">
                                    <button type="submit" className="btn btn-dark btn-sm" disabled={loading}>
                                        {loading ? "Sending..." : "Download"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* ---------------------- ENQUIRE NOW MODAL ---------------------- */}
            <div className="modal fade" id="enquireNowModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Enquire Now</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e, "Enquiry Form Submission")}>
                            <div className="modal-body">
                                <input type="text" name="name" className="form-control mb-2" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                <input type="email" name="email" className="form-control mb-2" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                <input type="tel" name="phone" className="form-control mb-2" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                                <textarea
                                    name="message"
                                    className="form-control mb-2"
                                    placeholder="Message"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {result && <p className="text-success">{result}</p>}
                                <div className="text-center py-3">
                                    <button type="submit" className="btn btn-dark" disabled={loading}>
                                        {loading ? "Sending..." : "Submit"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
