'use client';

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            {" "}
            <nav className="navbar navbar-expand-lg bg-body-tertiary d-md-none ">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand">
                        <Image
                            src="/img/logo.png"
                            className="logo"
                            alt="logo"
                            width={80}
                            height={66}
                        />
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
                        <ul
                            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style={{ minHeight: "auto" }}
                        >
                            <li className="nav-item">
                                <Link
                                    className="nav-link active text-dark"
                                    aria-current="page"
                                    href="./"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#price">
                                    Price
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#amenities">
                                    Amenities
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="master-plan">
                                    Master Plan
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="nav-black_wrap d-md-block d-none">
                <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
                    <div className="padding-global">
                        <div className="container-large w-container">
                            <div className="nav">
                                <nav role="navigation" className="nav-menu w-nav-menu">
                                    <Link href="/" className="nav-link_wrap w-inline-block w--current">
                                        <div className="nav-link-icon w-embed">
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                            </svg>
                                        </div>
                                        <div >Home</div>
                                    </Link>
                                    <Link href="/#about" className="nav-link_wrap w-inline-block w--current">
                                        <div className="nav-link-icon w-embed">
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                            </svg>
                                        </div>
                                        <div >About</div>
                                    </Link>
                                    <Link href="/#price" className="nav-link_wrap w-inline-block w--current">
                                        <div className="nav-link-icon w-embed">
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                            </svg>
                                        </div>
                                        <div >Price</div>
                                    </Link>
                                    <Link href="/#amenities" className="nav-link_wrap w-inline-block w--current">
                                        <div className="nav-link-icon w-embed">
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                            </svg>
                                        </div>
                                        <div >Amenities</div>
                                    </Link>
                                    <Link href="/master-plan" className="nav-link_wrap w-inline-block w--current">
                                        <div className="nav-link-icon w-embed">
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                            </svg>
                                        </div>
                                        <div >Master Plan</div>
                                    </Link>
                                    <Link href="/location" className="nav-link_wrap w-inline-block w--current">
                                        <div className="nav-link-icon w-embed">
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                            </svg>
                                        </div>
                                        <div >Location</div>
                                    </Link>
                                    <Link href="#contact" className="nav-link_wrap w-inline-block w--current">
                                        <div className="nav-link-icon w-embed">
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                            </svg>
                                        </div>
                                        <div >Contact</div>
                                    </Link>

                                </nav>
                                <Link href="/">
                                    <Image
                                        src="/img/logo.png"
                                        className="logo"
                                        alt="logo"
                                        width={80}
                                        height={66}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}