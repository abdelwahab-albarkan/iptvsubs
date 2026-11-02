import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('iptvsubs8k-indexnow-2026-key', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}

