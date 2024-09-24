'use client'
import styles from "./page.module.css";
import { useRouter } from 'next/navigation'
import {POST} from '@/app/api/register.js'

export default function Form() {
    const FormAction = async (formData) =>{
        const rawFormData = {
        user_type: formData.get('user type'),
        first_name: formData.get('first name'),
        family_name: formData.get('family name'),
        email: formData.get('email'),
        tel: formData.get('tel'),
        city: formData.get('city'),
        linkedin: formData.get('linkedin'),
        about: formData.get('about'),
        programming_languages: [
          formData.get('js'),
          formData.get('html'),
          formData.get('css'),
          formData.get('java'),
          formData.get('csharp'),
          formData.get('python')
        ],
        company: formData.get('company'),
        job_title: formData.get('job'),
        username: formData.get('username'),
        password: formData.get('password')

        }
        console.log('rawFormData:', rawFormData)
        //POST(rawFormData)
      }

    const submitClickedHandler = (event) => {
        event.preventDefault();
        const form = document.querySelector('form');
        const formData = new FormData(form);
        FormAction(formData);
        router.push('/main')
      };

      const router = useRouter()

    const userTypeCleckedHandler = (event) => {
        const userType = event.target.value
        console.log('userType:', userType)
        if (userType === 'student') {
            document.querySelector('input[name="company"]').disabled = true
            document.querySelector('input[name="job"]').disabled = true
            document.querySelector('input[name="js"]').disabled = true
            document.querySelector('input[name="html"]').disabled = true
            document.querySelector('input[name="css"]').disabled = true
            document.querySelector('input[name="python"]').disabled = true
            document.querySelector('input[name="csharp"]').disabled = true
            document.querySelector('input[name="java"]').disabled = true
            document.querySelector('input[name="avatar"]').disabled = true
        }
    }
    
  return (
    <>
      <div>
        <h1 className={styles.h1}>טופס הרשמה</h1>
      </div>
      <form className={styles.form} action={FormAction} autocomplete="on">
        <fieldset>
          <legend>מי את ?</legend>
          <div>
            <input type="radio" id="mentor" name="user type" value="mentor" onClick={userTypeCleckedHandler}/>
            <label for="mentor">מנטורית</label>
            <input
              type="radio"
              id="student"
              name="user type"
              value="student"
              onClick={userTypeCleckedHandler}
            />
            <label for="student">מנטית</label>
          </div>
        </fieldset>
        <label>
          שם פרטי:
          <input type="text" name="first name"/>
        </label>
        <label>
          שם משפחה:
          <input type="text" name="family name" />
        </label>
        <label>
          עיר מגורים:
          <input type="text" name="city" />
        </label>
        <label>
          Email:
          <input type="email" id="email" name="email" autocomplete="on"/>
        </label>
        <label>
          טלפון:
          <input type="tel" id="tel" name="tel" autocomplete="off"/>
        </label>
        <label>
          קישור לפרופיל לינקדאין:
          <input type="url" id="linkdin" name="linkdin" autocomplete="off"/>
        </label>
        <label>
          ספרי על עצמך:
          <textarea name="about" cols="50" rows="8" autocomplete="off"></textarea>
        </label>
        <fieldset>
          <legend>מהן שפות התכנות בהן תרצי להדריך?</legend>
          <div>
            <input type="checkbox" id="js" value="js" name="js"/>
            <label for="js">Java Script</label>
          </div>
          <div>
            <input type="checkbox" id="html"  value="html" name="html"/>
            <label for="html">HTML</label>
          </div>
          <div>
            <input type="checkbox" id="css"  value="css" name="css"/>
            <label for="css">CSS</label>
          </div>
          <div>
            <input type="checkbox" id="java"  value="java" name="java"/>
            <label for="java">JAVA</label>
          </div>
          <div>
            <input type="checkbox" id="csharp"  value="csharp" name="csharp"/>
            <label for="csharp">C#</label>
          </div>
          <div>
            <input type="checkbox" id="python"  value="python" name="python"/>
            <label for="python">Python</label>
          </div>
        </fieldset>
        <label>
          שם החברה בה עובדת כיום:
          <input type="text" name="company" autocomplete="off"/>
        </label>
        <label>
          תפקיד בחברה:
          <input type="text" name="job" />
        </label>
        <div>
          <label for="avatar">תמונת פרופיל</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>

        <div>
          <label for="username">שם משתמש:</label>
          <input type="text" id="username" name="username" autocomplete="off"/>
        </div>
        <div>
          <label for="pass">סיסמא (8 תווים לפחות):</label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            autocomplete="off"
            required
          />
        </div>
        <button type="submit" id="submit" onClick={submitClickedHandler}>לחצי לסיום הרשמה</button>
      </form>
    </>
  );
}
