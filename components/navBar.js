// components/NavBar.js
"use client";

import Link from 'next/link';
import styles from './NavBar.module.css';
import { useState } from 'react';
import Image from 'next/image'

export default function NavBar () {

    const [isLoggedIn, setIsLoggedIn] = useState(true); // Manage login state
    const username = "User"; // Replace with dynamic username if available

    const handleLoginToggle = () => {
        setIsLoggedIn(!isLoggedIn); // Toggle login state for demonstration
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={80}
                    height={50}
                />
            </div>

            <div className={styles.navLinks}>
                {isLoggedIn ? (
                    <span className={styles.greeting}>Hello, {username}</span> // Show greeting if logged in
                ) : (
                    <Link href="/signin" className={styles.loginButton}>Login/Register</Link> // Show login/register if not logged in
                )}

            </div>

        </nav>
    );
};

