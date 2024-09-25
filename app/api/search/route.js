import query from '../db'; 

export default async function handler(req, res) {
  const { query2 } = req.query;
  //  {
  // const { searchParams } = new URL(req.url);
  // const searchTerm = searchParams.get('searchTerm');

  try {
    let users;
    if (query2){
      const searchQuery = `
      SELECT * FROM users
      WHERE LOWER(first_name) LIKE $2 OR
       LOWER(family_name) LIKE $3 OR EXISTS 
       (SELECT 1  FROM json_array_elements_text(programing_languages) as pl
       WHERE LOWER(pl) LIKE $9 ) OR
       LOWER(job_title) LIKE $11
      `;

      users = await query(searchQuery, [`%${query2.toLowerCase()}%`, `%${query2.toLowerCase()}%`]);
    } else {
      const allMentorsQuery = 'SELECT * FROM users';
      users = await query(allMentorsQuery);
    }

    res.status(200).json(mentors.rows);  // Return the rows from the query result
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).json({ error: 'Error fetching mentors' });
  }
}