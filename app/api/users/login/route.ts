import { NextRequest, NextResponse } from 'next/server';
import getUserByUsername from '../../db'

export async function POST(request: NextRequest)
{
    try {
        // 1- grab the data inside the request
        const reqBody = await request.json();
        // 1.1 destructure the data
        const { email, password } = reqBody;
        console.log(reqBody);

        // 2- check if this user exists by checking it's email before login
        const user = await getUserByUsername(email);
        // no valid user
        if (!user) {
            return NextResponse.json(
                {
                    error: 'User does not exist in DB',
                },
                { status: 400 }
            );
        }
        console.log('console.log(user);');
        console.log(user);

        // 3- check if the password is correct
        // password is coming from the request
        // user.password is coming from the DB
        console.log('console.log(user);');
        const validPassword = user.password

        // not valid password
        if (validPassword!=reqBody.password)
        {
            console.log('NOT OKAY')
            return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
        }
        console.log('OKAY')
        // 4- create the TOKEN data
        //const tokenData = {
        //    id: user._id,
        //    username: user.username,
        //    email: user.email,
        //};

        // 4.1 - create TOKEN
        //const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
        //    expiresIn: '2d',
        //});

        // user's cookies
        const response = NextResponse.json(
            {
            message: 'Login Successful',
            success: true,
        });

        // 4.2- send TOKEN to user's cookies
        //response.cookies.set('token', token, { httpOnly: true });
        console.log(response);
        console.log('ENDENDENDENDENDEN');
        return response;
    }
    catch (error: any)
    {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}