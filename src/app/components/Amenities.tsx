'use client';

import Image from 'next/image';
import styles from '../../public/css/BiodiversityHighlights.module.css';

const images = [
    { src: '/images/Built in bench seats.jpg', title: 'Built in Bench Seats' },
    { src: '/images/butterfly garden.jpg', title: 'butterfly Garden' },
    { src: '/images/Chit chat area.jpg', title: 'Chit Chat Area' },
    { src: '/images/Cricket practice pitch.jpg', title: 'Cricket Practice Pitch' },
    { src: '/images/elders park.jpg', title: 'Elders Park' },
    { src: '/images/entry.jpg', title: 'Entry' },
    { src: '/images/futsal court.jpg', title: 'futsal court' },
    { src: '/images/Indoor badminton court.jpg', title: 'Indoor Badminton Court' },
    { src: '/images/indoor gym.jpg', title: 'indoor Gym' },
    { src: '/images/Indoor table games.jpg', title: 'Indoor Table Games' },
    { src: '/images/kids play area.jpg', title: 'Kids Play Area' },
    { src: '/images/kids pool.jpg', title: 'kids Pool' },
    { src: '/images/library.jpg', title: 'Library' },
    { src: '/images/outdoor gym.jpg', title: 'Outdoor Gym' },
    { src: '/images/party hall.jpg', title: 'Party Hall' },
    { src: '/images/pool deck.jpg', title: 'Pool Deck' },
    { src: '/images/sensory path.jpg', title: 'Sensory Path' },
    { src: '/images/swimming pool.jpg', title: 'Swimming Pool' },
    { src: '/images/transformer yard.jpg', title: 'Transformer Yard' },
    { src: '/images/Yoga and meditation deck.jpg', title: 'Yoga and Meditation Deck' },
    { src: '/images/Zen court.jpg', title: 'Zen Court' },
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
