import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // We don't need to check for CV page access anymore
  return NextResponse.next()
}

export const config = {
  matcher: [],
}

