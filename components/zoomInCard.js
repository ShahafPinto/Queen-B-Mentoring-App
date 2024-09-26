
// 'use client';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // ייבוא אייקון WhatsApp
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // ייבוא אייקון אימייל
// import _img from '/app/public/images/pro.jpg'; // ברירת מחדל לתמונה
// import styles from './zoomInCard.module.css';

// export default function ZoomInCard({ mentor, onClose }) {
//     // פונקציה שתהפוך את מספר הטלפון לפורמט WhatsApp עם הקידומת של ישראל
//     const formatPhoneNumberForWhatsApp = (phoneNumber) => {
//         let cleanedPhone = phoneNumber.replace(/\D/g, '');

//         if (cleanedPhone.startsWith('0')) {
//             cleanedPhone = '972' + cleanedPhone.slice(1);
//         }

//         return cleanedPhone;
//     };

//     return (
//         <div className={styles.fullScreenContainer}>
//             <div className={styles.cardContainer}>
//                 {/* תמונת המנטור */}
//                 <Image 
//                     src={mentor.avatar_url ? mentor.avatar_url : _img}  // שימוש בתמונה ברירת מחדל אם avatarUrl לא קיים
//                     alt={`${mentor.first_name} ${mentor.family_name} Image`} 
//                     width={150} 
//                     height={150}
//                     quality={100}
//                     unoptimized={true}
//                     className={styles.mentorImg}
//                     priority={true} 
//                 />

//                 {/* הצגת שם המנטור */}
//                 <h2>{mentor.first_name} {mentor.family_name}</h2>
                
//                 {/* תיאור המנטור */}
//                 <p>{mentor.about ? mentor.about : "No description available"}</p>

//                 {/* פרטי התקשרות - כפתור וואטסאפ עם אייקון */}
//                 {mentor.tel ? (
//                     <a 
//                         href={`https://wa.me/${formatPhoneNumberForWhatsApp(mentor.tel)}`} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className={styles.whatsappButton}
//                     >
//                         <FontAwesomeIcon icon={faWhatsapp} size="2x" /> {/* גודל 2x */}
//                     </a>
//                 ) : (
//                     <p>No phone available</p>
//                 )}

//                 {/* פרטי התקשרות - כפתור אימייל עם אייקון ג'ימייל */}
//                 {mentor.email ? (
//                     <a 
//                         href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mentor.email}`} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className={styles.emailButton}
//                     >
//                         {/* אייקון אימייל */}
//                         <FontAwesomeIcon icon={faEnvelope} size="2x" /> {/* גודל 2x */}
//                     </a>
//                 ) : (
//                     <p>No email available</p>
//                 )}
                

//                 <p><strong>לינקדאין</strong> {mentor.linkedin ? mentor.linkedin : 'לא נמצא לינקדאין'}</p>

//                 {/* פרטי עבודה */}
//                 <p><strong>Company:</strong> {mentor.company ? mentor.company : 'No company listed'}</p>
//                 <p><strong>Job Title:</strong> {mentor.job_title ? mentor.job_title : 'No job title available'}</p>

//                 {/* רשימת שפות תכנות */}
//                 <h3>Languages:</h3>
//                 <ul className={styles.languagesList}>
//                     {mentor.programing_languages && mentor.programing_languages.length > 0 ? (
//                         mentor.programing_languages.map((language, index) => (
//                             <li key={index}>{language}</li>
//                         ))
//                     ) : (
//                         <li>No languages listed</li>
//                     )}
//                 </ul>

//                 {/* כפתור לסגירת כרטיס הזום-אין */}
//                 <button className={styles.closeButton} onClick={onClose}>
//                     Close
//                 </button>
//             </div>
//         </div>
//     );
// }


'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // ייבוא אייקונים WhatsApp ולינקדאין
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // ייבוא אייקון אימייל
import _img from '/app/public/images/pro.jpg'; // ברירת מחדל לתמונה
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
        <div className={styles.fullScreenContainer}>
            <div className={styles.cardContainer}>
                {/* תמונת המנטור */}
                <Image 
                    src={mentor.avatar_url ? mentor.avatar_url : _img}  // שימוש בתמונה ברירת מחדל אם avatarUrl לא קיים
                    alt={`${mentor.first_name} ${mentor.family_name} Image`} 
                    width={150} 
                    height={150}
                    quality={100}
                    unoptimized={true}
                    className={styles.mentorImg}
                    priority={true} 
                />

                {/* הצגת שם המנטור */}
                <h2>{mentor.first_name} {mentor.family_name}</h2>
                
                {/* תיאור המנטור */}
                <p>{mentor.about ? mentor.about : "No description available"}</p>

                {/* פרטי התקשרות - כפתור וואטסאפ עם אייקון */}
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
                    <p>No phone available</p>
                )}

                {/* פרטי התקשרות - כפתור אימייל עם אייקון ג'ימייל */}
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
                    <p>No email available</p>
                )}

                {/* פרטי התקשרות - כפתור לינקדאין עם אייקון */}
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
                    <p>No LinkedIn profile available</p>
                )}

                {/* פרטי עבודה */}
                <p><strong>Company:</strong> {mentor.company ? mentor.company : 'No company listed'}</p>
                <p><strong>Job Title:</strong> {mentor.job_title ? mentor.job_title : 'No job title available'}</p>

                {/* רשימת שפות תכנות */}
                <h3>Languages:</h3>
                <ul className={styles.languagesList}>
                    {mentor.programing_languages && mentor.programing_languages.length > 0 ? (
                        mentor.programing_languages.map((language, index) => (
                            <li key={index}>{language}</li>
                        ))
                    ) : (
                        <li>No languages listed</li>
                    )}
                </ul>

                {/* כפתור לסגירת כרטיס הזום-אין */}
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}
