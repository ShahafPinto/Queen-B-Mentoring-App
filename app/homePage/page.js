import Mentors from "../components/mentors.js";
import SearchBar from "../components/searchBar.js";
import styles from "./page.module.css";

export default function Main() {
  return (
    <div>
      <h1 className={styles.h1}>המנטוריות שלנו</h1>
      <div className={styles.search}>
      <div >
          <SearchBar/>
      </div>
      </div>
        <Mentors />
    </div>
  );
}

