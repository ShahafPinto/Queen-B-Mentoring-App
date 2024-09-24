'use client'
import styles from "./page.module.css";

export default function Form() {
    const FormAction = async (formData) =>{
        const rawFormData = {
          firstName: formData.get('first name'),
          familyName: formData.get('family name'),
          Email: formData.get('email'),
        }
        console.log(rawFormData)
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
            <input type="radio" id="mentor" name="user type" value="mentor" />
            <label for="mentor">מנטורית</label>
            <input
              type="radio"
              id="student"
              name="client type"
              value="student"
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
            <input type="checkbox" id="js" name="interest" value="js" />
            <label for="js">Java Script</label>
          </div>
          <div>
            <input type="checkbox" id="html" name="interest" value="html" />
            <label for="html">HTML</label>
          </div>
          <div>
            <input type="checkbox" id="css" name="interest" value="css" />
            <label for="css">CSS</label>
          </div>
          <div>
            <input type="checkbox" id="java" name="interest" value="java" />
            <label for="java">JAVA</label>
          </div>
          <div>
            <input type="checkbox" id="csharp" name="interest" value="csharp" />
            <label for="csharp">C#</label>
          </div>
          <div>
            <input type="checkbox" id="python" name="interest" value="python" />
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
        <button type="submit" id="submit">לחצי לסיום הרשמה</button>
      </form>
    </>
  );
}
