"use client";

import Link from 'next/link';
import styles from './NavBar.module.css';
import { useState } from 'react';
import Image from 'next/image';

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Manage login state
    const username = "User"; // Replace with dynamic username if available
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown state

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
                    <div
                        className={styles.profileContainer}
                        onMouseEnter={() => setIsDropdownOpen(true)} // Open dropdown on hover
                        onMouseLeave={() => setIsDropdownOpen(false)} // Close dropdown when mouse leaves
                    >
                        <span className={styles.greeting}>Hello, {username}</span>
                        {isDropdownOpen && (
                            <div className={styles.dropdown}>
                                <Link href="/profile" className={styles.dropdownItem}>Profile</Link>
                                <Link href="/settings" className={styles.dropdownItem}>Settings</Link>
                                <button
                                    className={styles.dropdownItem}
                                    onClick={() => {
                                        handleLoginToggle(); // Log out the user
                                        setIsDropdownOpen(false); // Close dropdown
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link href="/signin" className={styles.loginButton}>Login/Register</Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
