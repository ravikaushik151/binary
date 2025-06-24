'use client';

import Image from 'next/image';
import styles from '../../public/css/BiodiversityHighlights.module.css';

const images = [
    '/images/Tennis.jpg',
    '/images/badmiton.jpg',
    '/images/dog.jpg',
    '/images/biodiversity-highlights-4.png',
    '/images/biodiversity-highlights-5.png',
    '/images/biodiversity-highlights-6.png',
    '/images/jogging.jpg',
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
