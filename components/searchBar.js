// 'use client';

// import { useState, useEffect } from 'react';

// const SearchPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);

//   // Mock data for demonstration purposes
// //   const data = [
// //     { id: 1, name: 'John Doe', language: 'JavaScript' },
// //     { id: 2, name: 'Jane Smith', language: 'Python' },
// //     { id: 3, name: 'Tom Brown', language: 'Java' },
// //     // Add more mock data here if needed
// //   ];

//   const handleSearch = async (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);

//     try {
//         const response = await fetch(`/api/search?query=${value}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const mentors = await response.json();

//         setResults(mentors);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         setResults([]);
//     }
// };

//     return (
//         <div style={{ padding: '20px' }}>
//           <h1>Search Mentors</h1>
//           <input
//             type="text"
//             placeholder="Search by name or programing language"
//             value={searchTerm}
//             onChange={handleSearch}
//             style={{
//               padding: '10px',
//               fontSize: '16px',
//               marginBottom: '20px',
//               width: '300px',
//             }}
//           />
//           <ul>
//             {results.length > 0 ? (
//               results.map(result => (
//                 <li key={result.id}>
//                   {result.name} - {result.language}
//                 </li>
//               ))
//             ) : (
//               <li>No results found</li>
//             )}
//           </ul>
//         </div>
//       );
//     };
    
//     export default SearchPage;







// 'use client';

// import { useState, useEffect } from 'react';
// import Mentors from './mentors';

// const SearchPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);

//   // שליפת כל המנטורים בטעינת הקומפוננטה
//   useEffect(() => {
//     const fetchAllMentors = async () => {
//       try {
//         const response = await fetch('/api/search');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const mentors = await response.json();
//         setResults(mentors); // שמירת כל המנטורים ב-state
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setResults([]);
//       }
//     };

//     fetchAllMentors();
//   }, []);

//   const handleSearch = async (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);

//     try {
//       const response = await fetch(`/api/search?query=${value}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const mentors = await response.json();
//       setResults(mentors); // עדכון תוצאות החיפוש
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setResults([]);
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Search Mentors</h1>
//       <input
//         type="text"
//         placeholder="Search by name or programming language"
//         value={searchTerm}
//         onChange={handleSearch}
//         style={{
//           padding: '10px',
//           fontSize: '16px',
//           marginBottom: '20px',
//           width: '300px',
//         }}
//       />
//       {/* שליחה של תוצאות החיפוש או כל המנטורים לקומפוננטת Mentors */}
//       <Mentors mentors={results} />
//     </div>
//   );
// };

// export default SearchPage;


'use client';

import { useState, useEffect } from 'react';
import Mentors from './mentors';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState(''); // שמירת המונח לחיפוש
  const [results, setResults] = useState([]); // תוצאות החיפוש
  const [allMentors, setAllMentors] = useState([]); // כל המנטורים לפני סינון

  // שליפת כל המנטורים בטעינת הקומפוננטה
  useEffect(() => {
    const fetchAllMentors = async () => {
      try {
        const response = await fetch('/api/search');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const mentors = await response.json();
        setAllMentors(mentors); // שמירת כל המנטורים ב-state
        setResults(mentors); // הצגת כל המנטורים בהתחלה
      } catch (error) {
        console.error('Error fetching data:', error);
        setResults([]);
      }
    };

    fetchAllMentors();
  }, []);

  // פילטור המנטורים לפי מה שנכתב בשורת החיפוש
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === '') {
      // אם השאילתה ריקה, הצגת כל המנטורים
      setResults(allMentors);
    } else {
      const filteredResults = allMentors.filter(mentor =>
        mentor.first_name.toLowerCase().includes(value.toLowerCase()) ||
        mentor.family_name.toLowerCase().includes(value.toLowerCase()) ||
        mentor.programing_languages.some(lang => lang && lang.toLowerCase().includes(value.toLowerCase()))
      );
      setResults(filteredResults); // עדכון תוצאות החיפוש
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search Mentors</h1>
      <input
        type="text"
        placeholder="Search by name or programming language"
        value={searchTerm}
        onChange={handleSearch} // קריאה לפונקציה handleSearch עם כל שינוי
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          width: '300px',
        }}
      />
      {/* שליחה של תוצאות החיפוש או כל המנטורים לקומפוננטת Mentors */}
      <Mentors mentors={results} />
    </div>
  );
};

export default SearchPage;
