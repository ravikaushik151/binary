'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const collapseEl = document.getElementById("navbarScroll");
        if (collapseEl?.classList.contains("show")) {
            collapseEl.classList.remove("show");
        }
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY < 100 || currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* ✅ Mobile Navbar */}
            <nav className={`navbar navbar-dark navbar-animated position-fixed top-0 w-100 navbar navbar-expand-lg bg-white d-md-none shadow-sm ${isVisible ? "navbar-visible bg-white shadow-sm" : "navbar-hidden"
                }`}  style={{ zIndex: 999, backgroundColor: "#1e291d !important" }}>
                <div className="container-fluid">
                    <Link href="https://binaryrealty.in/" target='_blank' className="navbar-brand ps-3">
                        <Image
                            src="/img/logo.png"
                            alt="logo"
                            width={80}
                            height={66}
                            className="logo" />
                    </Link>

                    <button
                        className="navbar-toggler me-3"
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
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/#about", label: "About" },
                                { href: "/#price", label: "Price" },
                                { href: "/#amenities", label: "Amenities" },
                                { href: "/master-plan", label: "Master Plan" },
                                { href: "/location", label: "Location" },
                                { href: "/#contact", label: "Contact" },
                            ].map((link) => (
                                <li className="nav-item" key={link.href}>
                                    <Link className="nav-link text-white" href={link.href}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ✅ Desktop Navbar position-fixed top-0 */}
            <div
                className={` navbar-animated w-100 d-none d-md-block ${isVisible ? "navbar-visible bg-white" : "navbar-hidden"
                    } ${lastScrollY < 100 ? "bg-transparent" : ""}`}
                style={{ zIndex: 999, backgroundColor: "#1e291d !important" }}
            >
                <div className="container py-3 d-flex justify-content-between align-items-center">
                    <Link href="/">
                        <Image
                            src="/img/logo.png"
                            alt="logo"
                            width={80}
                            height={66}
                            className={lastScrollY < 100 ? " img-fluid" : "logo img-fluid position-fixed top-0"}
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
                                className={`text-decoration-none d-flex align-items-center gap-1 ${lastScrollY < 100 ? "text-white" : "text-dark"}`}
                            >
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
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
