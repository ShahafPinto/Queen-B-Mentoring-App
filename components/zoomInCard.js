'use client';
// import MentorCard from './mentorCard'; // מייבא את הכרטיסייה הקיימת
// import styles from './zoomInCard.module.css';

// export default function ZoomInCard() {
//   return (
//     <div className={styles.fullScreenContainer}>
//       <div className={styles.cardContainer}>
//         {/* מציג את הכרטיסייה הקיימת בגודל מלא */}
//         <MentorCard />
//         {/* הוספת רכיבים נוספים לכרטיסייה המוגדלת */}
//         <div className={styles.extraInfo}>
//           <h3>Additional Information</h3>
//           <p>Here you can add more information about the mentor, their projects, or any additional data you want.</p>
//           <button className={styles.actionButton}>Contact Mentor</button>
//         </div>
//       </div>
//     </div>
//   );
// }

import styles from './zoomInCard.module.css';

export default function ZoomInCard({ mentor, onClose }) {
    return (
        <div className={styles.fullScreenContainer}>
            <div className={styles.cardContainer}>
                {/* כרטיס הזום-אין */}
                <h2>{mentor.name}</h2>
                <p>{mentor.description}</p>
                <h3>Languages:</h3>
                <ul>
                    {mentor.languages.map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>

                {/* כפתור לסגירת הזום-אין */}
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

