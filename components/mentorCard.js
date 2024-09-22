'use client'
import Image from 'next/image';
import _img from '@/app/public/images/pro.jpg'

export default function MentorCard() {
    const mentorName = "Jane Doe";
    const mentorDescription = "Full Stack Developer at Tech Innovators";
    // const mentorImage = "/pro.jpg";
    const languages = ["JavaScript", "Python", "Ruby", "HTML", "CSS"];

    return (
        <div className="mentor-card">
            <Image 
            src={_img} 
            alt={`${mentorName} Image`} 
            width={150} 
            height={150}
            quality={100}
            unoptimized={true}
            className="mentor-img"
            />
            <h2>{mentorName}</h2>
            <p>{mentorDescription}</p>
            <h3>Languages:</h3>
            <ul className="languages-list">
                {languages.map((language, index) => (
                    <li key={index} className="language-item">{language}</li>
                ))}
            </ul>
            <style>{`
            .mentor-card {
                border: 0.0625rem solid #ccc;
                padding: 1.25rem;
                margin: 1.25rem;
                border-radius: 0.625rem;
                width: 100%;
                max-width: 20rem;
                text-align: center;
                box-shadow: 0.125rem 0.125rem 0.75rem rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }

            .mentor-img {
                border-radius: 50%;
                object-fit: cover;
                margin-bottom: 0.9375rem;
            }

            ul {
                list-style-type: none;
                padding: 0;
            }

            .languages-list {
                display: flex;
                justify-content: center;
                gap: 0.5rem;
                padding: 0.625rem;
                border-radius: 0.625rem;
                flex-wrap: wrap;
                max-width: 100%;
            }

            .language-item {
                background-color: #d1e7dd;
                padding: 0.25rem 0.5rem; /* הקטנת הרווחים הפנימיים */
                border-radius: 0.375rem; /* הקטנת עיגול הפינות */
                color: #0f5132;
                font-weight: bold;
                font-size: 0.75rem; /* הקטנת גודל הטקסט */
                box-shadow: 0.0625rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.1);
            }

            li {
                margin: 0.25rem; /* הקטנת הרווחים בין התגים */
            }
            `}</style>
        </div>
    );
}
