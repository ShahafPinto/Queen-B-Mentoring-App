"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
//react hookForm

export default function Form() {
  const router = useRouter();
  const [mentor, setMentor] = useState(false);

  const imageArray = [
    "/images/svg/avatar1.svg",
    "/images/svg/avatar4.svg",
    "/images/svg/avatar5.svg",
    "/images/svg/avatar6.svg",
    "/images/svg/avatar7.svg",
    "/images/svg/avatar8.svg",
    "/images/svg/avatar9.svg",
    "/images/svg/avatar10.svg",
  ];

  const FormAction = async (formData) => {
    const rawFormData = {
      user_type: formData.get("user type") == "mentor" ? true : false,
      first_name: formData.get("first name"),
      family_name: formData.get("family name"),
      email: formData.get("email"),
      tel: formData.get("tel"),
      city: formData.get("city"),
      linkedin: formData.get("linkedin"),
      about: formData.get("about"),
      programming_languages: [
        formData.get("js"),
        formData.get("html"),
        formData.get("css"),
        formData.get("java"),
        formData.get("csharp"),
        formData.get("python"),
      ],
      company: formData.get("company"),
      job_title: formData.get("job"),
      username: formData.get("username"),
      password: formData.get("password"),
    };
    console.log("======================="),
      console.log("rawFormData:", rawFormData);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawFormData),
      });
      if (response.ok) {
        router.push("/homePage");
      } else {
        console.error("Failed to register:", await response.json());
      }
    } catch (error) {
      console.error("Failed to register:", error);
    }
  };

  const userTypeCleckedHandler = (event) => {
    const userType = event.target.value;
    console.log("userType:", userType);
    if (userType === "student") {
      setMentor(false);
    } else {
      setMentor(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>טופס הרשמה</h1>

        <form className={styles.form} action={FormAction} autoComplete="on">
          <fieldset className={styles.formGroup}>
            <legend>מי את ?</legend>
            <div>
              <div className={styles.inline}>
                <input
                  className={styles.input}
                  type="radio"
                  id="mentor"
                  name="user type"
                  value="mentor"
                  onClick={userTypeCleckedHandler}
                />
                <label for="mentor">מנטורית</label>
              </div>
              <div className={styles.inline}>
                <input
                  type="radio"
                  id="student"
                  name="user type"
                  value="student"
                  onClick={userTypeCleckedHandler}
                  className={styles.input}
                />
                <label for="student">מנטית</label>
              </div>
            </div>
          </fieldset>
          <label>
            שם פרטי:
            <input className={styles.input} type="text" name="first name" />
          </label>
          <label>
            שם משפחה:
            <input className={styles.input} type="text" name="family name" />
          </label>
          <label>
            עיר מגורים:
            <input className={styles.input} type="text" name="city" />
          </label>
          <label>
            Email:
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              autocomplete="on"
            />
          </label>
          <label>
            טלפון:
            <input
              className={styles.input}
              type="tel"
              id="tel"
              name="tel"
              autocomplete="off"
            />
          </label>
          <label>
            קישור לפרופיל לינקדאין:
            <input
              className={styles.input}
              type="url"
              id="linkdin"
              name="linkdin"
              autocomplete="off"
            />
          </label>
          <label>
            ספרי על עצמך:
            <textarea
              className={styles.input}
              name="about"
              cols="50"
              rows="8"
              autocomplete="off"
            ></textarea>
          </label>
          <fieldset>
            <legend>מהן שפות התכנות בהן תרצי להדריך?</legend>
            <div>
              <input
                className={styles.input}
                type="checkbox"
                id="js"
                value="js"
                name="js"
                disabled={mentor ? false : true}
              />
              <label for="js">Java Script</label>
            </div>
            <div>
              <input
                className={styles.input}
                type="checkbox"
                id="html"
                value="html"
                name="html"
                disabled={mentor ? false : true}
              />
              <label for="html">HTML</label>
            </div>
            <div>
              <input
                className={styles.input}
                type="checkbox"
                id="css"
                value="css"
                name="css"
                disabled={mentor ? false : true}
              />
              <label for="css">CSS</label>
            </div>
            <div>
              <input
                className={styles.input}
                type="checkbox"
                id="java"
                value="java"
                name="java"
                disabled={mentor ? false : true}
              />
              <label for="java">JAVA</label>
            </div>
            <div>
              <input
                className={styles.input}
                type="checkbox"
                id="csharp"
                value="csharp"
                name="csharp"
                disabled={mentor ? false : true}
              />
              <label for="csharp">C#</label>
            </div>
            <div>
              <input
                className={styles.input}
                type="checkbox"
                id="python"
                value="python"
                name="python"
                disabled={mentor ? false : true}
              />
              <label for="python">Python</label>
            </div>
          </fieldset>
          <label>
            שם החברה בה עובדת כיום:
            <input
              className={styles.input}
              type="text"
              name="company"
              autocomplete="off"
              disabled={mentor ? false : true}
            />
          </label>
          <label>
            תפקיד בחברה:
            <input
              className={styles.input}
              type="text"
              name="job"
              disabled={mentor ? false : true}
            />
          </label>
          <div>
            <label for="avatar">בחרי אוואטר</label>
            <div className={styles.gridAvatar}>
              {imageArray.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`avatar ${index + 1}`}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>

          <div>
            <label for="username">שם משתמש:</label>
            <input
              className={styles.input}
              type="text"
              id="username"
              name="username"
              autocomplete="off"
              required
            />
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
              className={styles.input}
            />
          </div>
          <button className={styles.button} type="submit" id="submit">
            לחצי לסיום הרשמה
          </button>
        </form>
      </div>
    </>
  );
}
