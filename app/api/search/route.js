import query from '../db'; 

export default async function handler(req, res) {
  const { searchTerm } = req.query;

  try {
    let users;
    if (searchTerm){
      const searchQuery = `
      SELECT * FROM users
      WHERE LOWER(first_name) LIKE $1 OR
       LOWER(family_name) LIKE $1 OR EXISTS 
       (SELECT 1  FROM json_array_elements_text(programing_languages) as pl
       WHERE LOWER(pl) LIKE $1) OR
       LOWER(job_title) LIKE $1
      `;

      users = await query(searchQuery, [`%${searchTerm.toLowerCase()}%`]);
    } else {
      const allMentorsQuery = 'SELECT * FROM users';
      users = await query(allMentorsQuery);
    }

    if (!users || !users.rows) {
      throw new Error('No results returned from database');
    }

    res.status(200).json(users.rows); 
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).json({ error: 'Error fetching mentors' });
  }
}