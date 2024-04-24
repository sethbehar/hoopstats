// app/api/players/route.js
import fs from 'fs';
import { parse } from 'papaparse';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // This makes the route dynamic and disables caching by default

export async function GET() {
  try {
    const data = fs.readFileSync('./public/partialstats.csv', 'utf8');
    const parsedData = parse(data, { header: true });

    const players = parsedData.data;
    const shuffled = players.sort(() => 0.5 - Math.random());
    const selectedPlayers = shuffled.slice(0, 2);

    return new NextResponse(JSON.stringify({ players: selectedPlayers }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: 'Failed to read data file' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
