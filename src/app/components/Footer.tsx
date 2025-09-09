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
            <footer
                className="bg-dark"
                style={{ backgroundColor: "#1e291d !important" }}
                id="contact"
            >
                <div className="container">
                    <div className="row">
                        {/* Left side */}
                        <div className="col-md-6">
                            <div className="d-flex align-items-start">
                                <div>
                                    <a href="https://binaryrealty.in/" target="_blank" className="text-start">
                                        <img
                                            src="/img/logo.png"
                                            className="img-fluid text-start mb-3"
                                            alt="Binary Realty"
                                            style={{ maxWidth: 120 }}
                                        />
                                    </a>
                                    <address className="text-white text-start ps-md-5">
                                        <strong>Binary Etania</strong> <br />
                                        Sy no. 110/1B Hosahalli road,<br /> Sree Narayana Nagar,<br /> Chikkadunnasandra
                                    </address>
                                    <p className="text-start ps-md-5" style={{ fontSize: "13px", fontFamily: "Roboto" }}>
                                        (+91)96112 11255
                                    </p>
                                    <p className="text-start ps-md-5" style={{ fontSize: "14px", fontFamily: "Roboto" }}>
                                        sales@binaryrealty.in
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="col-md-6 text-end d-block me-auto">
                            <div className="px-3">
                                <p className="mb-3">
                                    <a href="./" className="px-3 text-white text-decoration-none fs-5">Home</a>
                                    <a href="about" className="px-3 text-white text-decoration-none fs-5">About</a>
                                    <a href="projects" className="px-3 text-white text-decoration-none fs-5">Projects</a>
                                    <a href="career" className="px-3 text-white text-decoration-none fs-5">Careers</a>
                                    <a href="blogs" className="px-3 text-white text-decoration-none fs-5">Blogs</a>
                                    <a href="contact" className="px-3 text-white text-decoration-none fs-5">Contact</a>
                                </p>
                                <p className="fs-5 mt-5 mb-3 text-end">
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
                                        <i className="fa-brands fa-facebook" />
                                    </a>
                                    <a href="https://x.com/binary__realty" className="mx-2 mb-3 social">
                                        <i className="fa-brands fa-x-twitter" />
                                    </a>
                                    <a href="https://www.instagram.com/binaryrealtytempletree/" className="mx-2 mb-3 social">
                                        <i className="fa-brands fa-instagram" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/binary-realty1/?viewAsMember=true" className="mx-2 mb-3 social">
                                        <i className="fa-brands fa-linkedin" />
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
