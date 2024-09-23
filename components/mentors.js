import MentorCard from "./mentorCard";
import styles from "./mentors.module.css";

export default function Mentors() {
    return (
        <div>
            <h1>list of mentors</h1>
            <div className={styles.mentorsCards}>
              
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
             
            </div>
        </div>
    )
}