import { pool } from '../db'; 

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const searchTerm = searchParams.get('searchTerm');

  try {
    let query = `
      SELECT first_name, family_name, job_title, programing_languages
      FROM users
    `;

    const values = [];

    if (searchTerm) {
      query += `
        WHERE
          first_name ILIKE $1 OR
          family_name ILIKE $1 OR
          job_title ILIKE $1 OR
          programing_languages::TEXT ILIKE $1
      `;
      values.push(`%${searchTerm}%`);
    }

    const result = await pool.query(query, values);
    return new Response(JSON.stringify(result.rows), { status: 200 });
  } catch (error) {
    console.error('Error querying database:', error);
    return new Response(JSON.stringify({ error: 'Database query error' }), { status: 500 });
  }
}

// import { query } from '/lib/db'

// export default async function handler(req, res){
//     const { searchTerm } = req.query;
//     if (req.method === 'GET') {
//         try {
//             const text = `
//             SELECT id, first_name, family_name, job_title, programing_languages
//             FROM users
//             WHERE
//                 first_name ILIKE $1
//                 OR family_name ILIKE $1
//                 OR job_title ILIKE $1
//                 OR programing_languages::TEXT ILIKE $1
//             `;
//             const values = [`%${searchTerm}%`];

//             const result = await query(text, values);

//             res.status(200).json(result.rows);
//         } catch (err) {
//             console.error('Error querying the database:', err);
//             res.status(500).json({ error: 'Internal Server Error' });
//           }
//         } else {
//           res.status(405).json({ message: 'Method Not Allowed' });
//         }
//       }

// import { pool } from '../api/db'; 

// export default async function handler(req, res) {
//   const { searchTerm } = req.query;

//   try {
//     let query = `
//       SELECT first_name, family_name, job_title, programing_languages
//       FROM users
//     `;

//     const values = [];

//     if (searchTerm) {
//       query += `
//         WHERE
//           first_name ILIKE $1 OR
//           family_name ILIKE $1 OR
//           job_title ILIKE $1 OR
//           programing_languages::TEXT ILIKE $1
//       `;
//       values.push(`%${searchTerm}%`);
//     }

//     const result = await pool.query(query, values);
//     res.status(200).json(result.rows);
//   } catch (error) {
//     console.error('Error querying database:', error);
//     res.status(500).json({ error: 'Database query error' });
//   }
// }
