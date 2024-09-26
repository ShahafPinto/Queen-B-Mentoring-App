
// 'use client';

// import Image from 'next/image'; // שימוש בקומפוננטת ה-Image של Next.js
// import styles from './zoomInCard.module.css';

// export default function ZoomInCard({ mentor, onClose }) {
//     return (
//         <div className={styles.fullScreenContainer}>
//             <div className={styles.cardContainer}>
//                 {/* תמונת המנטור */}
//                 <Image
//                     src={mentor.avatar_url ? mentor.avatar_url : '/default-avatar.png'} // אם אין תמונה נשתמש בתמונה ברירת מחדל
//                     alt={`${mentor.first_name} ${mentor.family_name}`}
//                     width={150}
//                     height={150}
//                     quality={100}
//                     className={styles.mentorImg}
//                 />

//                 {/* הצגת שם המנטור */}
//                 <h2>{mentor.first_name} {mentor.family_name}</h2>
                
//                 {/* תיאור המנטור */}
//                 <p>{mentor.about ? mentor.about : "No description available"}</p>

//                 {/* פרטי התקשרות */}
//                 <p><strong>Email:</strong> {mentor.email ? mentor.email : 'No email available'}</p>
//                 <p><strong>Phone:</strong> {mentor.tel ? mentor.tel : 'No phone available'}</p>
                
//                 {/* פרטי עבודה */}
//                 <p><strong>Company:</strong> {mentor.company ? mentor.company : 'No company listed'}</p>
//                 <p><strong>Job Title:</strong> {mentor.job_title ? mentor.job_title : 'No job title available'}</p>

//                 {/* רשימת שפות תכנות */}
//                 <h3>Languages:</h3>
//                 <ul>
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



// 'use client';

// import Image from 'next/image';
// import styles from './zoomInCard.module.css';

// export default function ZoomInCard({ mentor, onClose }) {
//     return (
//         <div className={styles.fullScreenContainer}>
//             <div className={styles.cardContainer}>
//                 {/* תמונת המנטור */}
//                 <Image
//                     src={mentor.avatar_url ? mentor.avatar_url : '/default-avatar.png'} // אם אין תמונה נשתמש בתמונה ברירת מחדל
//                     alt={`${mentor.first_name} ${mentor.family_name}`}
//                     width={150}
//                     height={150}
//                     quality={100}
//                     className={styles.mentorImg}
//                 />

//                 {/* הצגת שם המנטור */}
//                 <h2 className={styles.mentorName}>{mentor.first_name} {mentor.family_name}</h2>
                
//                 {/* תיאור המנטור */}
//                 <p className={styles.mentorDescription}>{mentor.about ? mentor.about : "No description available"}</p>

//                 {/* פרטי התקשרות */}
//                 <p><strong>Email:</strong> {mentor.email ? mentor.email : 'No email available'}</p>
//                 <p><strong>Phone:</strong> {mentor.tel ? mentor.tel : 'No phone available'}</p>
                
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
import _img from '/app/public/images/pro.jpg'; // ברירת מחדל לתמונה
import styles from './zoomInCard.module.css';

export default function ZoomInCard({ mentor, onClose }) {
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

                {/* פרטי התקשרות */}
                <p><strong>Email:</strong> {mentor.email ? mentor.email : 'No email available'}</p>
                <p><strong>Phone:</strong> {mentor.tel ? mentor.tel : 'No phone available'}</p>
                
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
