'use client';

import { useState, useEffect } from 'react';
import Mentors from './mentors';
import styles from './searchBar.module.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [results, setResults] = useState([]); 
  const [allMentors, setAllMentors] = useState([]); 

  useEffect(() => {
    const fetchAllMentors = async () => {
      try {
        const response = await fetch('/api/search');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const mentors = await response.json();
        setAllMentors(mentors); 
        setResults(mentors); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setResults([]);
      }
    };

    fetchAllMentors();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === '') {
      setResults(allMentors);
    } else {
      const filteredResults = allMentors.filter(mentor =>
        mentor.first_name.toLowerCase().includes(value.toLowerCase()) ||
        mentor.family_name.toLowerCase().includes(value.toLowerCase()) ||
        mentor.programing_languages.some(lang => lang && lang.toLowerCase().includes(value.toLowerCase()))
      );
      setResults(filteredResults); 
    }
  };

  return (
    <div>
    <div className={styles.searchBarContainer}>
      <h1 className={styles.searchBarHeader}>חפשי מנטורית</h1>
      <input
        type="text"
        placeholder="חפשי את המנטורית שלך לפי שם, שפת תכנות או מקצוע.."
        value={searchTerm}
        onChange={handleSearch} 
        className={styles.searchInput}
      />
      
    </div>
  <div className={styles.mentorsCards}>
  <Mentors mentors={results} />
  </div>
   
    </div>
  );
};

export default SearchPage;
