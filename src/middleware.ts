import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  return NextResponse.rewrite(
    new URL(request.nextUrl.pathname, "http://localhost:4000")
  );
}

export const config = {
  matcher: ["/test"],
};
