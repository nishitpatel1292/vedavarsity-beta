import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Parse the incoming request body
    const body = await req.json();
    // console.log('body', process.env.SENDINBLUE_KEY);
    const { data } = await axios.post('https://api.sendinblue.com/v3/contacts', body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.SENDINBLUE_KEY
      }
    });
    console.log('response', data);
    // Return the response data
    return NextResponse.json(data);
  } catch (error) {
    // Extract error message if
    console.log('error', error, error.message);
    return NextResponse.json(
      { message: error ? error?.message : 'Something went wrong', code: error?.status || 400 },
      { status: error ? error?.status : 400 }
    );
  }
}
