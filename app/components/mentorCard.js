'use client';

import Image from 'next/image';
//import _img from '@/images/pro.jpg'; 
import styles from "./components.module.css";

// קבלת הפרטים של המנטור דרך props
export default function MentorCard({ mentorName, mentorDescription, languages = [], avatarUrl }) {
    return (
        <div className={styles.mentorCard}>
            <Image 
                src={avatarUrl ? avatarUrl : '/images/pro.jpg'}  // שימוש בתמונה ברירת מחדל אם avatarUrl לא קיים
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
            <h3>שפות תכנות:</h3>
            <ul className={styles.languagesList}>
                {languages.length > 0 ? (
                    languages.map((language, index) => (
                        <li key={index} className={styles.languageItem}>{language}</li>
                    ))
                ) : (
                    <li>לא נמצאו שפות</li>
                )}
            </ul>
        </div>
    );
}
