'use client';
import Image from 'next/image'; 
import styles from "./components.module.css";

export default function MentorCard({ mentorName, mentorDescription, languages, avatarUrl }) {
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
            <div className={styles.cardName}>{mentorName}</div>
            <p className={styles.cardAbout}>{mentorDescription}</p>
            <div className={styles.cardLang}>שפות תכנות:</div>
            <ul className={styles.languagesList}>
                {languages.length > 0 ? (
                    languages.filter((lang)=>lang!=='null').map((language, index) => (
                        <li key={index} className={styles.languageItem}>{language}</li>
                    ))
                ) : (
                    <div className={styles.cardAbout}>לא נמצאו שפות</div>
                )}
            </ul>
        </div>
    );
}
