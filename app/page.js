'use client'
import Link from "next/link";
import styles from "./page.module.css";
import NavBar from "/components/NavBar"; // Import the NavBar component
import {useRouter} from "next/navigation";
import React, { useEffect } from 'react';
import axios from 'axios'; // Ensure axios is imported
import { FaAngleLeft } from 'react-icons/fa6';

export default function Home() {
    const router = useRouter();

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
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <NavBar />

            <h1 className="py-10 mb-10 text-5xl">
                {loading ? "We're logging you in..." : 'Account Login'}
            </h1>

            <input
                className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
            />

            <input
                className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
            />

            <button
                onClick={onLogin}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 uppercase px-40 py-3 mt-10 font-bold"
                disabled={buttonDisabled || loading} // Disable the button if conditions are met
            >
                Login
            </button>

            <Link href="/form">
                <p className="mt-10">
                    Do not have an account yet?
                    <span className="font-bold text-green-600 ml-2 cursor-pointer underline">
                        Register
                    </span>
                </p>
            </Link>

            <Link href="/">
                <p className="mt-8 opacity-50"></p>
            </Link>
        </div>
    );
}
