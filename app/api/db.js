// import {Pool} from "pg";

// const pool = new Pool ({
//     user: process.env.PG_USER,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT,
// });

// export async function query(text, params){
//     const res = await pool.query(text, params);
//     return res;
// }

// async function createTableAndInsertRows() {
//     const client = await pool.connect();

//     try {
//         // Create 'users' table if it doesn't exist
//         await client.query(`
//       CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         user_type BOOLEAN,
//         first_name VARCHAR(50),
//         family_name VARCHAR(50),
//         city VARCHAR(50),
//         email VARCHAR(100) UNIQUE NOT NULL,
//         tel VARCHAR(14),
//         about TEXT,
//         programing_languages VARCHAR(255),
//         company VARCHAR(100),
//         job_title VARCHAR(100),
//         avatar_url VARCHAR(255),
//         username VARCHAR(10) UNIQUE NOT NULL,
//         password VARCHAR(20) NOT NULL
//       );
//     `);
//         console.log("Table 'users' created.");

//         // Sample users with plain text passwords
//         const users = [
//             {
//                 user_type: true,
//                 first_name: 'Alice',
//                 family_name: 'Johnson',
//                 city: 'New York',
//                 email: 'alice.johnson@example.com',
//                 tel: '1234567890',
//                 about: 'Experienced full-stack developer.',
//                 programing_languages: 'JavaScript, Python, C#',
//                 company: 'TechCorp',
//                 job_title: 'Senior Developer',
//                 avatar_url: 'https://example.com/alice.jpg',
//                 username: 'alice123',
//                 password: 'password123'
//             },
//             {
//                 user_type: false,
//                 first_name: 'Bob',
//                 family_name: 'Smith',
//                 city: 'Los Angeles',
//                 email: 'bob.smith@example.com',
//                 tel: '9876543210',
//                 about: 'Junior backend developer.',
//                 programing_languages: 'Java, Ruby',
//                 company: 'CodeWorks',
//                 job_title: 'Backend Developer',
//                 avatar_url: '/app/public/images/avatars/avatar1.svg',
//                 username: 'bob321',
//                 password: 'securepass'
//             }
//         ];

//         // Insert user data
//         for (let user of users) {
//             await client.query(
//                 `INSERT INTO users 
//         (user_type, first_name, family_name, city, email, tel, about, 
//          programing_languages, company, job_title, avatar_url, username, password) 
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
//                 [
//                     user.user_type,
//                     user.first_name,
//                     user.family_name,
//                     user.city,
//                     user.email,
//                     user.tel,
//                     user.about,
//                     user.programing_languages,
//                     user.company,
//                     user.job_title,
//                     user.avatar_url,
//                     user.username,
//                     user.password
//                 ]
//             );
//         }

//         console.log("Users inserted successfully.");
//     } catch (err) {
//         console.error('Error executing query:', err);
//     } finally {
//         client.release();
//         pool.end();
//     }
// }


// createTableAndInsertRows().then(result => {});

import pg from 'pg';
const {Pool, Client} = pg

console.log(process)
const pool = new Pool ({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

export async function query(text, params){
    const res = await pool.query(text, params);
    return res;
}

// async function createTableAndInsertRows() {
//     const client = await pool.connect();
//
//     try {
//         // Create 'users' table if it doesn't exist
//         await client.query(`
//       CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         user_type BOOLEAN,
//         first_name VARCHAR(50),
//         family_name VARCHAR(50),
//         city VARCHAR(50),
//         email VARCHAR(100) UNIQUE NOT NULL,
//         tel VARCHAR(14),
//         about TEXT,
//         programing_languages VARCHAR(255),
//         company VARCHAR(100),
//         job_title VARCHAR(100),
//         avatar_url VARCHAR(255),
//         username VARCHAR(10) UNIQUE NOT NULL,
//         password VARCHAR(20) NOT NULL
//       );
//     `);
//         console.log("Table 'users' created.");
//
//         // Sample users with plain text passwords
//         const users = [
//             {
//                 user_type: true,
//                 first_name: 'Alice',
//                 family_name: 'Johnson',
//                 city: 'New York',
//                 email: 'alice.johnson@example.com',
//                 tel: '1234567890',
//                 about: 'Experienced full-stack developer.',
//                 programing_languages: JSON.stringify(["JavaScript", "HTML", "C#"]),
//                 company: 'TechCorp',
//                 job_title: 'Senior Developer',
//                 avatar_url: 'https://example.com/alice.jpg',
//                 username: 'alice123',
//                 password: 'password123'
//             },
//             {
//                 user_type: false,
//                 first_name: 'Bob',
//                 family_name: 'Smith',
//                 city: 'Los Angeles',
//                 email: 'bob.smith@example.com',
//                 tel: '9876543210',
//                 about: 'Junior backend developer.',
//                 programing_languages: JSON.stringify(["JAVA", "Python"]),
//                 company: 'CodeWorks',
//                 job_title: 'Backend Developer',
//                 avatar_url: '/app/public/images/avatars/avatar1.svg',
//                 username: 'bob321',
//                 password: 'securepass'
//             }
//         ];
//
//         // Insert user data
//         for (let user of users) {
//             await client.query(
//                 `INSERT INTO users
//         (user_type, first_name, family_name, city, email, tel, about,
//          programing_languages, company, job_title, avatar_url, username, password)
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
//                 [
//                     user.user_type,
//                     user.first_name,
//                     user.family_name,
//                     user.city,
//                     user.email,
//                     user.tel,
//                     user.about,
//                     user.programing_languages,
//                     user.company,
//                     user.job_title,
//                     user.avatar_url,
//                     user.username,
//                     user.password
//                 ]
//             );
//         }
//
//         console.log("Users inserted successfully.");
//     } catch (err) {
//         console.error('Error executing query:', err);
//     } finally {
//         client.release();
//         pool.end();
//     }
//
// }

//query db for user - select * from users where user_email = input

export async function getUserByUsername(username) {
    try {
        // Query to select user where username matches the input
        const query = 'SELECT * FROM users WHERE username = $1';
        const values = [username];

        const result = await pool.query(query, values);

        // Check if a user was found
        if (result.rows.length > 0) {
            return result.rows[0]; // Return the first matching user
        } else {
            return null; // No user found
        }
    } catch (error) {
        console.error('Database query error:', error);
        throw new Error('Failed to retrieve user');
    }
}

export default getUserByUsername;

//createTableAndInsertRows().then(result => {});