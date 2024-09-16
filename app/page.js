import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.h1}>welcome - LogIn page</h1>
      <Link href="/signin">click to Sign In</Link>
    </div>
  );
}
