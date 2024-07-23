import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/_next/')) {
    return NextResponse.next(); // 자산 요청을 우회합니다.
  }

  // 그 외의 미들웨어 로직을 여기에 추가합니다.
}
