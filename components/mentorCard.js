'use client';
import Image from 'next/image';
import _img from '@/app/public/images/pro.jpg';
import styles from "./components.module.css";

// שינוי: קבלת הפרטים של המנטור דרך props
export default function MentorCard({ mentorName, mentorDescription, languages }) {
    return (
        <div className={styles.mentorCard}>
            <Image 
                src={_img} 
                alt={`${mentorName} Image`} 
                width={150} 
                height={150}
                quality={100}
                unoptimized={true}
                className={styles.mentorImg}
                priority={true} 
            />
            <h2>{mentorName}</h2>
            <p>{mentorDescription}</p>
            <h3>Languages:</h3>
            <ul className={styles.languagesList}>
                {languages.map((language, index) => (
                    <li key={index} className={styles.languageItem}>{language}</li>
                ))}
            </ul>
        </div>
    );
}
