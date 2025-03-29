import { NextResponse } from 'next/server';
import crypto from 'crypto';
import axios from 'axios';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const pageSize = searchParams.get('pageSize');
  const startIndex = searchParams.get('startIndex');

  const api_secret = 'a0ygk6jgzyhh197g7vk034uq61kjw552';
  const api_key = 'ga1upokgiyo97dy2b7rra6mmsju3qf8t';

  try {
    const params = {
      access: 'public',
      action: 'issuu.documents.list',
      apiKey: api_key,
      documentSortBy: 'publishDate',
      documentStates: 'A',
      format: 'json',
      pageSize,
      resultOrder: 'desc',
      startIndex
    };

    // Sort the parameters alphabetically
    const sortedParams = Object.keys(params)
      .sort()
      .reduce((result, key) => {
        result[key] = params[key];
        return result;
      }, {});

    let queryString = new URLSearchParams(sortedParams).toString();
    let signingkey = `${api_secret}${queryString.replace(/=/g, '').replace(/&/g, '')}`;
    let hash = crypto.createHash('md5').update(signingkey).digest('hex');

    sortedParams['signature'] = hash;
    queryString = new URLSearchParams(sortedParams).toString();

    console.log('Generated Signature:', hash);
    console.log('Final Query String:', queryString);

    const { data } = await axios.get(`http://api.issuu.com/1_0?${queryString}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    console.log('d', data.rsp['_content']);

    return NextResponse.json(data.rsp['_content']['result']['_content']);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Something Went Wrong', code: 400 }, { status: 400 });
  }
}
