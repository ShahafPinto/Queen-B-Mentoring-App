'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // ייבוא אייקונים WhatsApp ולינקדאין
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // ייבוא אייקון אימייל
//import _img from '/app/public/images/pro.jpg'; // ברירת מחדל לתמונה
import styles from './zoomInCard.module.css';

export default function ZoomInCard({ mentor, onClose }) {
    // פונקציה שתהפוך את מספר הטלפון לפורמט WhatsApp עם הקידומת של ישראל
    const formatPhoneNumberForWhatsApp = (phoneNumber) => {
        let cleanedPhone = phoneNumber.replace(/\D/g, '');

        if (cleanedPhone.startsWith('0')) {
            cleanedPhone = '972' + cleanedPhone.slice(1);
        }

        return cleanedPhone;
    };

    return (
        <div className={styles.fullScreenContainerO}>
            <div className={styles.fullScreenContainer}>
                <div className={styles.cardContainer}>
                    <Image 
                        src={mentor.avatar_url ? mentor.avatar_url : '/images/pro.jpg'}  // שימוש בתמונה ברירת מחדל אם avatarUrl לא קיים
                        alt={`${mentor.first_name} ${mentor.family_name} Image`} 
                        width={150} 
                        height={150}
                        quality={100}
                        unoptimized={true}
                        className={styles.mentorImg}
                        priority={true} 
                    />
                    <h2>{mentor.first_name} {mentor.family_name}</h2>
                    
                    <p>{mentor.about ? mentor.about : "אין תיאור זמין"}</p>

                    {mentor.tel ? (
                        <a 
                            href={`https://wa.me/${formatPhoneNumberForWhatsApp(mentor.tel)}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.whatsappButton}
                        >
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" /> {/* גודל 2x */}
                        </a>
                    ) : (
                        <p>לא נמצא טלפון</p>
                    )}

                    {mentor.email ? (
                        <a 
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mentor.email}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.emailButton}
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="2x" /> {/* גודל 2x */}
                        </a>
                    ) : (
                        <p>לא נמצא מייל</p>
                    )}

                    {mentor.linkedin ? (
                        <a 
                            href={mentor.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.linkedinButton}
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" /> {/* גודל 2x */}
                        </a>
                    ) : (
                        <p>לא נמצא פרופיל לינקדאין</p>
                    )}

                    <p><strong>חברה:</strong> {mentor.company ? mentor.company : 'לא נמצאה חברה'}</p>
                    <p><strong>תפקיד:</strong> {mentor.job_title ? mentor.job_title : 'לא נמצא תפקיד'}</p>

                    <h3>שפות תכנות:</h3>
                    <ul className={styles.languagesList}>
                        {mentor.programing_languages && mentor.programing_languages.length > 0 ? (
                            mentor.programing_languages.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))
                        ) : (
                            <li>לא נמצאו שפות</li>
                        )}
                    </ul>

                    <button className={styles.closeButton} onClick={onClose}>
                        לחזרה
                    </button>
                </div>
            </div>
        </div>
    );
}
