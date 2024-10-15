"use client";
import { useState } from "react";
import MentorCard from "./mentorCard";
import ZoomInCard from "./zoomInCard";

export default function Mentors({ mentors = [] }) {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
  };

  const closeZoomInCard = () => {
    setSelectedMentor(null);
  };

  return (
    <>
      {mentors.map((mentor) => (
        <div key={mentor.id} onClick={() => handleMentorClick(mentor)}>
          <MentorCard
            mentorName={`${mentor.first_name} ${
              mentor.family_name ? mentor.family_name : ""
            }`}
            mentorDescription={mentor.about ? mentor.about : "אין תיאור זמין"}
            languages={
              mentor.programming_languages
                ? mentor.programming_languages.filter((lang) => lang)
                : []
            } 
            avatarUrl={mentor.avatar_url}
          />
        </div>
      ))}
      {selectedMentor && (
        <ZoomInCard mentor={selectedMentor} onClose={closeZoomInCard} />
      )}
    </>
  );
}
