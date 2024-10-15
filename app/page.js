'use client'
import Link from "next/link";
import styles from "./page.module.css";
import {useRouter} from "next/navigation";
import React, { useEffect , useState} from 'react';
import axios from 'axios'; // Ensure axios is imported

export default function Home() {
    const router = useRouter();

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [failLogIn, setfailLogIn] = React.useState(false);
    

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('api/users/login', user);

            console.log('Login successful', response.data);

            if (response.status === 200) { // Assuming 200 means login success
                router.push('/homePage');
            } else {
                
                setfailLogIn(true);
                console.log('Login failed');
            }
        } catch (error) {
            // Here, catch the error and handle it
            if (error.response && error.response.status === 400) {
                // Handle 400 errors specifically (like invalid credentials)
                console.error('Login failed:', error.response.data);
                setfailLogIn(true);
            } else {
                // Handle other errors like network issues
                console.error('An error occurred:', error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() =>
    {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    console.log(user);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {'Queens Match'}
            </h1>
            <h1 className={styles.h1}>
                ברוכה הבאה
            </h1>
            <input
                className={styles.input}
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="שם משתמש"
            />

            <input
                className={styles.input}
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="סיסמה"
            />
            
            <div className={styles.logInProcess}>{loading && "We're logging you in..."}</div>
            <div className={styles.errorM}>{failLogIn && "שם המשתמש או הסיסמא שגויים, אנא נסי שוב"}</div>
            <button
                onClick={onLogin}
                className={styles.button}
                disabled={buttonDisabled || loading} // Disable the button if conditions are met
            >
                התחברי
            </button>

            <Link href="/form">
                <p className={styles.link}>
                     עוד אין לך משתמש?
                    <span className={styles.link}>
                        &nbsp;להרשמה
                    </span>
                </p>
            </Link>

            <Link href="/">
                <p></p>
            </Link>
        </div>
    );
}
