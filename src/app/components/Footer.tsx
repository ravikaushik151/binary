'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Project Info */}
                <div className="footer-column">
                    <h4 className="footer-title">Binary Etania</h4>
                    <p>
                        KIADB Hardware & IT Park,<br />
                        Near Shell Office, Devanahalli,<br />
                        Bangalore 562 149
                    </p>
                    <div className="footer-rera">
                        <p><strong>RERA NO.</strong></p>
                        <p>PRM/KA/RERA/1251/309/PR/280324/006745</p>
                    </div>
                </div>

                {/* Developer Info */}
                <div className="footer-column">
                    <h4 className="footer-title">Assetz</h4>
                    <p>
                        Assetz Property Group,<br />
                        No.30, Crescent Road,<br />
                        Bengaluru, Karnataka 560 001
                    </p>
                    <p className="footer-contact">+91 78295 54411</p>
                    <p>enquiries@assetzproperty.com</p>
                </div>
                <div className="footer-column">
                    <div className="footer-association">
                        <p>In Association With</p>
                        <img src="/images/fairlark-logo.png" alt="Fairlark Logo" className="footer-logo" />
                        <div className="footer-social">
                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                            <Link href="#"><i className="fab fa-youtube"></i></Link>
                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
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
                <p>© {new Date().getFullYear()} Binary Etania. All rights reserved.</p>
            </div>
        </footer>
    );
}
