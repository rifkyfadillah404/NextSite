import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const AUTH_COOKIE = "auth-token";

export async function GET() {
  const cookieStore = await cookies();
  const authed = cookieStore.get(AUTH_COOKIE) ? true : false;
  return NextResponse.json({ authenticated: authed });
}