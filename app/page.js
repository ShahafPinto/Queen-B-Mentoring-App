'use client'
import Link from "next/link";
import styles from "./page.module.css";
import NavBar from "/components/navBar";
import {db} from '@/app/public/data.js';

export default function Home() {
  const FormAction = async (formData) =>{
    const rawFormData = {
      username: formData.get('username'),
      password: formData.get('password'),
    }
  

    //חיפוש בDB האם קיים שם משתמש וסיסמא
    //אם כן להגדיר משתמש מחובר ולהעביר לעמוד main
    // אם לא- להציג הודעת שגיאה ולהגיד שנדרש להתחבר
  };
  
  return (
    <div>
        <NavBar />
        <h1 className={styles.h1}>Find Your Mentor App</h1>
        <form className={styles.form} autocomplete="on" action={FormAction}>
          <div>
            <label for="username">שם משתמש:</label>
            <input type="text" id="username" name="username" autocomplete="off"/>
          </div>
          <div>
            <label for="pass">סיסמא:</label>
            <input
              type="password"
              id="pass"
              name="password"
              minLength="8"
              autocomplete="off"
              required
            />
          </div>
          <button type="submit" id="submit" >שלחי</button>
        </form>
        <Link href="/form">עוד אין לך משתמש? לחצי להרשמה</Link>
    </div>
  );
}

