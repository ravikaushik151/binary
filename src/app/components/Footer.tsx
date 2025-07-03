'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer" id='contact'>
            <div className="footer-container">

                {/* Project Info */}
                <div className="footer-column">
                    <h4 className="footer-title">Binary Etania</h4>
                    <p>
                        Sy no. 110/1B Hosahalli road,<br /> Sree Narayana Nagar,<br /> Chikkadunnasandra
                    </p>
                    <div className="footer-rera d-none">
                        <p><strong>RERA NO.</strong></p>
                        <p>PRM/KA/RERA/1251/309/PR/123456/006123</p>
                    </div>
                </div>

                {/* Developer Info */}
                <div className="footer-column">
                    <h4 className="footer-title">Binary</h4>
                    <p>
                        S.Y. No. 19,
                        <br /> Sompura Gate, Sarjapura Road,
                        <br />Bengaluru, Karnataka-562125
                    </p>
                    <p className="footer-contact">+91 96112 11255</p>
                    <p>sales@binaryrealty.in</p>
                </div>
                <div className="footer-column">
                    <div className="footer-association">
                        <p>In Association With</p>
                        <div className="footer-social">
                            <Link href="https://www.facebook.com/people/Binary-Realty/61565957242898/#"><i className="fab fa-facebook-f"></i></Link>
                            <Link href="https://www.instagram.com/binaryrealtytempletree/"><i className="fab fa-instagram"></i></Link>
                            <Link href="https://www.linkedin.com/company/binary-realty1/?viewAsMember=true"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
                {/* Get In Touch Form */}
                <div className="footer-column">
                    <h4 className="footer-heading">GET IN TOUCH</h4>
                    <form className="footer-form">
                        <input type="text" placeholder="Name" className="footer-input" />
                        <input type="email" placeholder="Email" className="footer-input" />
                        <input type="tel" placeholder="Contact Number" className="footer-input" />
                        <button type="submit" className="footer-button">SUBMIT</button>
                    </form>
                </div>
            </div>
            {/* Copyright */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Binary Etania. All rights reserved. Digital Partner <a target="_blank" href="https://www.imsolutions.co/" className="text-dark">IM Solutions</a></p>
            </div>
        </footer>
    );
}
