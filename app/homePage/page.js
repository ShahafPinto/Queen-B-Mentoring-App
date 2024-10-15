'use client';
import SearchBar from "../components/searchBar.js";
import styles from "./page.module.css";
import useState from 'react';

export default function Main() {
  return (
    <>
    <div className={styles.children}>
      <div className={styles.container}>
        <h1 className={styles.h1}>המנטוריות</h1>
        <div className={styles.search}>
            <SearchBar/>
        </div>
      </div>
    </div>
    </>
  );
}

