import Mentors from "@/components/mentors.js";
import SearchBar from "/components/searchBar.js";
import styles from "./page.module.css";

export default function Main() {
  return (
    <div>
      <h1 className={styles.h1}>Main page</h1>
      <div className={styles.search}>
      <div >
          <SearchBar/>
      </div>
        {/* <label for="search">חפשי מנטורית</label>
        <input type="search" id="search" placeholder="הזיני שם, שפות תכנות או תפקיד..." /> */}
      </div>
      <div>
        <Mentors />
      </div>
    </div>
  );
}

