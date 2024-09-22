import Link from "next/link";
import styles from "./page.module.css";
import NavBar from "/components/navBar"


export default function Home() {
  return (
    <div>
        <NavBar />
        <h1 className={styles.h1}>Welcome to Our Mentorship App</h1>
        <Link href="/signin">click to Sign In</Link>
    </div>
  );
}
