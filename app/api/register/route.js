//import 'server-only'
import { query } from '../db.js'


// This function is called when the form is submitted
// It inserts the form data into the database

export async function POST(req) {
  const body = await req.json();  // Get the form data from the request

  const {
    user_type, first_name, family_name, city, email, tel, linkedin, about,
    programming_languages, company, job_title, username, password
  } = body;

  try {
    // Insert the form data into the database
    const result = await query(`
      INSERT INTO users 
      (user_type, first_name, family_name, city, email, tel, linkedin, about, 
      programing_languages, company, job_title, username, password)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    `, [
      user_type, first_name, family_name, city, email, tel, linkedin, about,
      JSON.stringify(programming_languages), company, job_title, username, password
    ]);

    return new Response(JSON.stringify({ message: 'User registered successfully', result }), {
      status: 200,
    });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ error: 'Database error' }), {
      status: 500,
    });
  }
}
