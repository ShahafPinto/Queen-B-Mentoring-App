

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
                            mentorDescription={mentor.about ? mentor.about : 'אין תיאור זמין'}
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
