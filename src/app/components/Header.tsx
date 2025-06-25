'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const collapseEl = document.getElementById("navbarScroll");
        if (collapseEl?.classList.contains("show")) {
            collapseEl.classList.remove("show");
        }
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const sliderHeight = document.getElementById("main-slider")?.offsetHeight || 300;
            setIsFixed(window.scrollY > sliderHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Mobile Navbar */}
            <nav className="navbar navbar-expand-lg bg-white d-md-none shadow-sm">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand">
                        <Image src="/img/logo.png" alt="logo" width={80} height={66} />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/#about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/#price">Price</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/#amenities">Amenities</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/master-plan">Master Plan</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/location">Location</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/#contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Desktop Navbar */}
            <div
                className={`d-none d-md-block ${isFixed ? "position-fixed top-0 w-100 bg-white shadow-sm" : "position-absolute w-100"}`}
                style={{ zIndex: 999 }}
            >
                <div className="container py-3 d-flex justify-content-between align-items-center">
                    <Link href="/">
                        <Image
                            src="/img/logo.png"
                            alt="logo"
                            width={100}
                            height={66}
                            className={isFixed ? "logo" : ""}
                        />
                    </Link>
                    <nav className="d-flex gap-4">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/#about", label: "About" },
                            { href: "/#price", label: "Price" },
                            { href: "/#amenities", label: "Amenities" },
                            { href: "/master-plan", label: "Master Plan" },
                            { href: "/location", label: "Location" },
                            { href: "/#contact", label: "Contact" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-decoration-none d-flex align-items-center gap-1 ${isFixed ? "text-dark" : "text-white"}`}
                            >
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                </svg>
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

        </>
    );
}
