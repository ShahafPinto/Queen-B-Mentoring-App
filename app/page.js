'use client'
import Link from "next/link";
import styles from "./page.module.css";
import {useRouter} from "next/navigation";
import React, { useEffect } from 'react';
import axios from 'axios'; // Ensure axios is imported
import { FaAngleLeft } from 'react-icons/fa6';


export default function Home() {
    const router = useRouter();
    // const FormAction = async (formData) => {
    //     const rawFormData = {
    //         username: formData.get('username'),
    //         password: formData.get('password'),
    //     };

    //     // Placeholder for form action logic (DB search, user authentication, error handling)
    //     console.log(rawFormData);
    //     // Implement actual DB search and routing here
    // };
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('api/users/login', user);

            console.log('Login successful', response.data);

            if (response.status === 200) { // Assuming 200 means login success
                router.push('/homePage');
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            // Here, catch the error and handle it
            if (error.response && error.response.status === 400) {
                // Handle 400 errors specifically (like invalid credentials)
                console.error('Login failed:', error.response.data);
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
            <h1 className={styles.h1}>
                {loading ? "We're logging you in..." : 'Account Login'}
            </h1>
            <input
                className={styles.input}
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
            />

            <input
                className={styles.input}
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
            />

            <button
                onClick={onLogin}
                className={styles.button}
                disabled={buttonDisabled || loading} // Disable the button if conditions are met
            >
                Login
            </button>

            <Link href="/form">
                <p className={styles.link}>
                    Do not have an account yet?
                    <span className={styles.link}>
                        Register
                    </span>
                </p>
            </Link>

            <Link href="/">
                <p></p>
            </Link>
        </div>
    );
}
