import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const PASSWORD = process.env.AUTH_PASSWORD

if (!PASSWORD) {
  console.error("AUTH_PASSWORD is not set in the environment variables")
}

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password === PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set({
      name: "auth",
      value: "true",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600, // 1 hour
    })

    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ success: false }, { status: 401 })
}

