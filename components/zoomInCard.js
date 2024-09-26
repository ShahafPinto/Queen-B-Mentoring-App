// 'use client';

// import styles from './zoomInCard.module.css';

// export default function ZoomInCard({ mentor, onClose }) {
//     return (
//         <div className={styles.fullScreenContainer}>
//             <div className={styles.cardContainer}>
//                 {/* כרטיס הזום-אין */}
//                 <h2>{mentor.name}</h2>
//                 <p>{mentor.description}</p>
//                 <h3>Languages:</h3>
//                 <ul>
//                     {mentor.languages.map((language, index) => (
//                         <li key={index}>{language}</li>
//                     ))}
//                 </ul>

//                 {/* כפתור לסגירת הזום-אין */}
//                 <button className={styles.closeButton} onClick={onClose}>
//                     Close
//                 </button>
//             </div>
//         </div>
//     );
// }





// 'use client';

// import styles from './zoomInCard.module.css';

// export default function ZoomInCard({ mentor, onClose }) {
//     return (
//         <div className={styles.fullScreenContainer}>
//             <div className={styles.cardContainer}>
//                 {/* כרטיס הזום-אין */}
//                 <h2>{mentor.name ? mentor.name : "No name available"}</h2>
//                 <p>{mentor.description ? mentor.description : "No description available"}</p>
//                 <h3>Languages:</h3>
//                 <ul>
//                     {mentor.languages && mentor.languages.length > 0 ? (
//                         mentor.languages.map((language, index) => (
//                             <li key={index}>{language}</li>
//                         ))
//                     ) : (
//                         <li>No languages listed</li>
//                     )}
//                 </ul>

//                 {/* כפתור לסגירת הזום-אין */}
//                 <button className={styles.closeButton} onClick={onClose}>
//                     Close
//                 </button>
//             </div>
//         </div>
//     );
// }



'use client';

import styles from './zoomInCard.module.css';

export default function ZoomInCard({ mentor, onClose }) {
    return (
        <div className={styles.fullScreenContainer}>
            <div className={styles.cardContainer}>
                {/* הצגת שם המנטור */}
                <h2>{mentor.first_name} {mentor.family_name}</h2>
                
                {/* תיאור המנטור */}
                <p>{mentor.about ? mentor.about : "No description available"}</p>

                {/* רשימת שפות תכנות */}
                <h3>Languages:</h3>
                <ul>
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
