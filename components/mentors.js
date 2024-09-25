// 'use client';

// import { useState } from "react";
// import MentorCard from "./mentorCard";
// import ZoomInCard from "./zoomInCard"; 
// import styles from "./mentors.module.css";

// export default function Mentors() {
//     // הגדרת state כדי לעקוב אחרי המנטור שנבחר
//     const [selectedMentor, setSelectedMentor] = useState(null);

//     // רשימת מנטורים לדוגמה
//     const mentors = [
//         { id: 1, name: "Jane Doe", description: "Full Stack Developer", languages: ["JavaScript", "Python", "HTML"] },
//         { id: 2, name: "John Smith", description: "Backend Developer", languages: ["Java", "Node.js", "SQL"] },
//         { id: 3, name: "Mary Johnson", description: "Frontend Developer", languages: ["React", "CSS", "JavaScript"] },
//         { id: 4, name: "Sarah Lee", description: "Data Scientist", languages: ["Python", "R", "SQL"] }
//     ];

//     // פונקציה שתגדיר את המנטור הנבחר ב-state
//     const handleMentorClick = (mentor) => {
//         setSelectedMentor(mentor); // עדכון המנטור הנבחר ב-state
//     };

//     // פונקציה לסגירת ה-ZoomInCard
//     const closeZoomInCard = () => {
//         setSelectedMentor(null); // איפוס ה-state לסגירת הקומפוננטה
//     };

//     return (
//         <div>
//             <h1>List of Mentors</h1>
//             <div className={styles.mentorsCards}>
//                 {mentors.map((mentor) => (
//                     <div key={mentor.id} onClick={() => handleMentorClick(mentor)}>
//                         {/* העברת הנתונים על המנטור כ-props */}
//                         <MentorCard 
//                             mentorName={mentor.name}
//                             mentorDescription={mentor.description}
//                             languages={mentor.languages}
//                         />
//                     </div>
//                 ))}
//             </div>

//             {/* הצגת ZoomInCard כאשר נבחר מנטור */}
//             {selectedMentor && (
//                 <ZoomInCard 
//                     mentor={selectedMentor} 
//                     onClose={closeZoomInCard} 
//                 />
//             )}
//         </div>
//     );
// }






// 'use client';

// import { useState } from "react";
// import MentorCard from "./mentorCard";
// import ZoomInCard from "./zoomInCard"; 
// import styles from "./mentors.module.css";

// export default function Mentors({ mentors = [] }) { // נותנים ערך ברירת מחדל ריק למנטורים
//     const [selectedMentor, setSelectedMentor] = useState(null);

//     const handleMentorClick = (mentor) => {
//         setSelectedMentor(mentor);
//     };

//     const closeZoomInCard = () => {
//         setSelectedMentor(null);
//     };

//     return (
//         <div>
//             <h1>List of Mentors</h1>
//             <div className={styles.mentorsCards}>
//                 {mentors.length > 0 ? (
//                     mentors.map((mentor) => (
//                         <div key={mentor.id} onClick={() => handleMentorClick(mentor)}>
//                             <MentorCard 
//                                 mentorName={mentor.name}
//                                 mentorDescription={mentor.description}
//                                 languages={mentor.languages}
//                             />
//                         </div>
//                     ))
//                 ) : (
//                     <p>No mentors available</p>
//                 )}
//             </div>

//             {selectedMentor && (
//                 <ZoomInCard 
//                     mentor={selectedMentor} 
//                     onClose={closeZoomInCard} 
//                 />
//             )}
//         </div>
//     );
// }


'use client';

import { useState } from "react";
import MentorCard from "./mentorCard";
import ZoomInCard from "./zoomInCard"; 
import styles from "./components.module.css";

export default function Mentors({ mentors = [] }) {
    const [selectedMentor, setSelectedMentor] = useState(null);

    const handleMentorClick = (mentor) => {
        setSelectedMentor(mentor);
    };

    const closeZoomInCard = () => {
        setSelectedMentor(null);
    };

    return (
        <div>
            {/* <h1>List of Mentors</h1> */}
            <div className={styles.mentorsCards}>
                {mentors.map((mentor) => (
                    <div key={mentor.id} onClick={() => handleMentorClick(mentor)}>
                        <MentorCard 
                            mentorName={`${mentor.first_name} ${mentor.family_name ? mentor.family_name : ''}`}
                            mentorDescription={mentor.about ? mentor.about : 'No description available'}
                            languages={mentor.programing_languages ? mentor.programing_languages.filter(lang => lang) : []} // וודא שאין שפות ריקות
                            avatarUrl={mentor.avatar_url}
                        />
                    </div>
                ))}
            </div>

            {selectedMentor && (
                <ZoomInCard 
                    mentor={selectedMentor} 
                    onClose={closeZoomInCard} 
                />
            )}
        </div>
    );
}
