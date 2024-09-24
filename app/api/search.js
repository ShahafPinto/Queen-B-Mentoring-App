import { query } from '/lib/db'

export default async function handler(req, res){
    const { searchTerm } = req.query;
    if (req.method === 'GET') {
        try {
            const text = `
            SELECT id, first_name, family_name, job_title, programing_languages
            FROM users
            WHERE
                first_name ILIKE $1
                OR family_name ILIKE $1
                OR job_title ILIKE $1
                OR programing_languages::TEXT ILIKE $1
            `;
            const values = [`%${searchTerm}%`];

            const result = await query(text, values);

            res.status(200).json(result.rows);
        } catch (err) {
            console.error('Error querying the database:', err);
            res.status(500).json({ error: 'Internal Server Error' });
          }
        } else {
          res.status(405).json({ message: 'Method Not Allowed' });
        }
      }