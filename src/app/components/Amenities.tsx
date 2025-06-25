'use client';

import Image from 'next/image';
import styles from '../../public/css/BiodiversityHighlights.module.css';

const images = [
    '/images/Badminton Court.webp',
    '/images/Basket Ball Court.webp',
    '/images/Club-Entrance-View-min_Binary.webp',
    '/images/Indoor Gym.webp',
    '/images/Jogging Track .webp',
    '/images/Swimming.webp',
    '/images/Table Tennis.webp',
    '/images/Yoga.webp',
];

export default function Amenities() {
    return (
        <section className={styles.section}>
            <div className={styles.marquee}>
                <div className={styles.marqueeContent}>
                    {images.concat(images).map((src, idx) => (
                        <div key={idx} className={styles.imageWrapper}>
                            <Image
                                src={src}
                                alt=""
                                width={300}
                                height={200}
                                loading="lazy"
                                className={styles.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
