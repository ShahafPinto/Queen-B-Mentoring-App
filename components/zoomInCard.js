

// 'use client';
// import Image from 'next/image';
// import _img from '/app/public/images/pro.jpg'; // ברירת מחדל לתמונה
// import styles from './zoomInCard.module.css';

// export default function ZoomInCard({ mentor, onClose }) {
//     // פונקציה שתהפוך את מספר הטלפון לפורמט WhatsApp עם הקידומת של ישראל
//     const formatPhoneNumberForWhatsApp = (phoneNumber) => {
//         // הסרת כל התווים שאינם ספרות
//         let cleanedPhone = phoneNumber.replace(/\D/g, '');

//         // אם המספר מתחיל באפס, מחליפים בקידומת בינלאומית (972 לישראל)
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

//                 {/* פרטי התקשרות - כפתור וואטסאפ */}
//                 {mentor.tel ? (
//                     <a 
//                         href={`https://wa.me/${formatPhoneNumberForWhatsApp(mentor.tel)}`} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className={styles.whatsappButton}
//                     >
//                         Contact on WhatsApp
//                     </a>
//                 ) : (
//                     <p>No phone available</p>
//                 )}
                
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
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // ייבוא אייקון WhatsApp
import _img from '/app/public/images/pro.jpg'; // ברירת מחדל לתמונה
import styles from './zoomInCard.module.css';

export default function ZoomInCard({ mentor, onClose }) {
    // פונקציה שתהפוך את מספר הטלפון לפורמט WhatsApp עם הקידומת של ישראל
    const formatPhoneNumberForWhatsApp = (phoneNumber) => {
        // הסרת כל התווים שאינם ספרות
        let cleanedPhone = phoneNumber.replace(/\D/g, '');

        // אם המספר מתחיל באפס, מחליפים בקידומת בינלאומית (972 לישראל)
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
                        {/* אייקון וואטסאפ */}
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" /> {/* גודל 2x */}
                    </a>
                ) : (
                    <p>No phone available</p>
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
