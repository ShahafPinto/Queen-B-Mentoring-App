import { query } from '../db';

export async function GET() {}

export async function GET() {
  try {
    const result = await query('SELECT * FROM users');
    const users = result.rows;
    
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch users' }), {
      status: 500,
    });
  }
}
