'use client'
import Link from "next/link";
import styles from "./page.module.css";
import NavBar from "/components/navBar";
import { db } from '@/app/public/data.js';

export default function Home() {
    const FormAction = async (formData) => {
        const rawFormData = {
            username: formData.get('username'),
            password: formData.get('password'),
        };

        // Placeholder for form action logic (DB search, user authentication, error handling)
        console.log(rawFormData);

        // Implement actual DB search and routing here
    };

    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                {NavBar()}
            </div>
            <h1 className={styles.title}>Find Your Mentor</h1>

            <form className={styles.form} autoComplete="on" onSubmit={FormAction}>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" autoComplete="off" className={styles.input}/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        minLength="8"
                        autoComplete="off"
                        required
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>Submit</button>
            </form>
            <Link href="/form" className={styles.link}>
                Don't have an account yet? Click here
            </Link>
        </div>
    );
}
