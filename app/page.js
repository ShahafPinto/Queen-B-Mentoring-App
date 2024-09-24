// 'use client'
// import Link from "next/link";
// import styles from "./page.module.css";
// import NavBar from "/components/navBar";
// import pool from './/api/db.js';

// const fetchDataFromDB = async () => {
//   try {
//     const client = await pool.connect();
//     console.log("Connected to the DB!")

//     const result = await client.query("SELECT * FROM users");
//     const data = result.rows;
//     console.log("Fetched data:", data);

//     client.release();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// fetchDataFromDB()
//   .then(data => {
//     console.log("Received data:", data);
//   })
//   .catch (error => {
//     console.error("Error fetching data:", error);
//   });

// export default function Home() {
//   const FormAction = async (formData) =>{
//     const rawFormData = {
//       username: formData.get('username'),
//       password: formData.get('password'),
//     }
  
  
//     //חיפוש בDB האם קיים שם משתמש וסיסמא
//     //אם כן להגדיר משתמש מחובר ולהעביר לעמוד main
//     // אם לא- להציג הודעת שגיאה ולהגיד שנדרש להתחבר
//   };
  
//   return (
//     <div>
//         <NavBar />
//         <h1 className={styles.h1}>Find Your Mentor App</h1>
//         <form className={styles.form} autocomplete="on" action={FormAction}>
//           <div>
//             <label for="username">שם משתמש:</label>
//             <input type="text" id="username" name="username" autocomplete="off"/>
//           </div>
//           <div>
//             <label for="pass">סיסמא:</label>
//             <input
//               type="password"
//               id="pass"
//               name="password"
//               minLength="8"
//               autocomplete="off"
//               required
//             />
//           </div>
//           <button type="submit" id="submit" >שלחי</button>
//         </form>
//         <Link href="/form">עוד אין לך משתמש? לחצי להרשמה</Link>
//     </div>
//   );
// }

'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import NavBar from '/components/navBar';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Error fetching users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchUsers();
  }, []);

  const FormAction = async (formData) => {
    const rawFormData = {
      username: formData.get('username'),
      password: formData.get('password'),
    };

    // Add logic here to verify username and password from the database
  };

  return (
    <div>
      <NavBar />
      <h1 className={styles.h1}>Find Your Mentor App</h1>
      <form className={styles.form} autoComplete="on" action={FormAction}>
        <div>
          <label htmlFor="username">שם משתמש:</label>
          <input type="text" id="username" name="username" autoComplete="off" />
        </div>
        <div>
          <label htmlFor="pass">סיסמא:</label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" id="submit">שלחי</button>
      </form>
      <Link href="/form">עוד אין לך משתמש? לחצי להרשמה</Link>

      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.first_name} {user.family_name} - {user.programing_languages}
          </li>
        ))}
      </ul>
    </div>
  );
}
