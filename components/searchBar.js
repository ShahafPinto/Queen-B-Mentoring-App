'use client';

import { useState, useEffect } from 'react';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // Mock data for demonstration purposes
//   const data = [
//     { id: 1, name: 'John Doe', language: 'JavaScript' },
//     { id: 2, name: 'Jane Smith', language: 'Python' },
//     { id: 3, name: 'Tom Brown', language: 'Java' },
//     // Add more mock data here if needed
//   ];

  const handleSearch = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const response = await fetch(`/api/search?query=${value}`);
    const mentors = await response.json();

    setResults(mentors);
  };

  useEffect(() => {
    const fetchAllMentors = async () => {
      const response = await fetch(`/api/search`);
      const mentors = await response.json();
      setResults(mentors);
    };
    fetchAllMentors();
  }, []);


    // const filteredResults = data.filter(item =>
    //   item.name.toLowerCase().includes(value.toLowerCase()) ||
    //   item.language.toLowerCase().includes(value.toLowerCase())
    // );
    // setResults(filteredResults);
    return (
        <div style={{ padding: '20px' }}>
          <h1>Search Mentors</h1>
          <input
            type="text"
            placeholder="Search by name or programing language"
            value={searchTerm}
            onChange={handleSearch}
            style={{
              padding: '10px',
              fontSize: '16px',
              marginBottom: '20px',
              width: '300px',
            }}
          />
          <ul>
            {results.length > 0 ? (
              results.map(result => (
                <li key={result.id}>
                  {result.name} - {result.language}
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>
        </div>
      );
    };
    
    export default SearchPage;