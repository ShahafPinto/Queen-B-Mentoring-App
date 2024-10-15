import { NextResponse } from 'next/server';
import {myquery} from '../db'; 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('myquery');

  try {
    let users;
    if (searchTerm) {
      const searchQuery = `
      SELECT * FROM users
      WHERE LOWER(first_name) LIKE $1 OR
       LOWER(family_name) LIKE $1 OR EXISTS 
       (SELECT 1 FROM json_array_elements_text(programming_languages) as pl
       WHERE LOWER(pl) LIKE $1) OR
       LOWER(job_title) LIKE $1
      `;

      users = await myquery(searchQuery, [`%${searchTerm.toLowerCase()}%`]);
    } else {
      const allMentorsQuery = 'SELECT * FROM users';
      users = await myquery(allMentorsQuery);
    }

    if (!users || !users.rows) {
      return NextResponse.json({ error: 'No results found' }, { status: 404 });
    }

    return NextResponse.json(users.rows);
  } catch (error) {
    console.error('Error querying database:', error);
    return NextResponse.json({ error: 'Error fetching mentors' }, { status: 500 });
  }
}