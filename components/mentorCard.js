'use client'
import Image from 'next/image';
import _img from '@/app/public/images/pro.jpg'
import styles from "./components.module.css";

export default function MentorCard() {
    const mentorName = "Jane Doe";
    const mentorDescription = "Full Stack Developer at Tech Innovators";
    // const mentorImage = "/pro.jpg";
    const languages = ["JavaScript", "Python", "Ruby", "HTML", "CSS"];

    return (
        <div className= {styles.mentorCard}>
            <Image 
            src={_img} 
            alt={`${mentorName} Image`} 
            width={150} 
            height={150}
            quality={100}
            unoptimized={true}
            className={styles.mentorImg}
            priority={true} // הוספת המאפיין priority
            />
            <h2>{mentorName}</h2>
            <p>{mentorDescription}</p>
            <h3>Languages:</h3>
            <ul className={styles.languagesList}>
                {languages.map((language, index) => (
                    <li key={index} className={styles.languageItem}>{language}</li>
                ))}
            </ul>
        </div>
    );
}


// 'use client'
// import Image from 'next/image';
// import _img from '@/app/public/images/pro.jpg';
// import styles from './components.module.css';

// export default function MentorCard() {
//     const mentorName = "Jane Doe";
//     const mentorDescription = "Full Stack Developer at Tech Innovators";
//     const languages = ["JavaScript", "Python", "Ruby", "HTML", "CSS"];

//     // יצירת אלמנטים בצורה דינמית ב-JavaScript רגיל
//     const cardDiv = document.createElement('div');
//     cardDiv.className = styles.mentorCard;

//     const img = new Image();
//     img.src = _img;
//     img.alt = `${mentorName} Image`;
//     img.width = 150;
//     img.height = 150;
//     img.className = styles.mentorImg;
//     cardDiv.appendChild(img);

//     const h2 = document.createElement('h2');
//     h2.textContent = mentorName;
//     cardDiv.appendChild(h2);

//     const p = document.createElement('p');
//     p.textContent = mentorDescription;
//     cardDiv.appendChild(p);

//     const h3 = document.createElement('h3');
//     h3.textContent = "Languages:";
//     cardDiv.appendChild(h3);

//     const ul = document.createElement('ul');
//     ul.className = styles.languagesList;

//     languages.forEach(language => {
//         const li = document.createElement('li');
//         li.textContent = language;
//         li.className = styles.languageItem;
//         ul.appendChild(li);
//     });

//     cardDiv.appendChild(ul);

//     document.body.appendChild(cardDiv); // מוסיפים את הכרטיס לעמוד
// }
