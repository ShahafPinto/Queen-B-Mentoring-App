import Mentors from "@/components/mentors.js";
import styles from "./page.module.css";

export default function Main() {
  return (
    <div>
      <h1 className={styles.h1}>Main page</h1>
      <div className={styles.search}>
        <label for="search">חפשי מנטורית</label>
        <input type="search" id="search" placeholder="הזיני שם, שפות תכנות או תפקיד..." />
      </div>
      <div>
        <Mentors />
        {/* <div className="user-cards">
          <div className="card">
            <div className="header">My name</div>
            <div className="body">email@gmail.com</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}