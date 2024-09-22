import Link from "next/link";
import styles from "./page.module.css";
import NavBar from "/components/NavBar";

export default function Home() {
    return (
        <div className={styles.container}>
            <NavBar />
            <h1 className={styles.h1}>Welcome to Our Mentorship App</h1>
            <Link href="/signin" className={styles.signInLink}>Click to Sign In</Link>
        </div>
    );
}
