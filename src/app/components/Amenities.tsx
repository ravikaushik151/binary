'use client';

import Image from 'next/image';
import styles from '../../public/css/BiodiversityHighlights.module.css';

const images = [
    { src: '/images/Badminton Court.webp', title: 'Badminton Court' },
    { src: '/images/Basket Ball Court.webp', title: 'Basket Ball Court' },
    { src: '/images/Club-Entrance-View-min_Binary.webp', title: 'Club Entrance' },
    { src: '/images/Indoor Gym.webp', title: 'Indoor Gym' },
    { src: '/images/Jogging Track .webp', title: 'Jogging Track' },
    { src: '/images/Swimming.webp', title: 'Swimming Pool' },
    { src: '/images/Table Tennis.webp', title: 'Table Tennis' },
    { src: '/images/Yoga.webp', title: 'Yoga' },
];

export default function Amenities() {
    return (
        <section className={styles.section}>
            <div className={styles.marquee}>
                <div className={styles.marqueeContent} >
                    {images.concat(images).map((img, idx) => (
                        <div key={idx} className={styles.imageWrapper}>
                            <Image
                                src={img.src}
                                alt={img.title}
                                width={300}
                                height={200}
                                loading="lazy"
                                className={styles.image}
                            />
                            <p className={styles.imageTitle}>{img.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
