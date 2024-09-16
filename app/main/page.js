import Mentors from "@/components/mentors.js";
import styles from "./page.module.css";

export default function Main() {
  return (
    <div>
      <h1 className={styles.h1}>Main page</h1>
      <div>
        <h2>search bar</h2>
      </div>
      <div>
        <Mentors />
      </div>
    </div>
  );
}