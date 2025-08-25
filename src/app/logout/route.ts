import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const AUTH_COOKIE = "auth-token";

export async function GET(request: Request) {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE);

  const url = new URL("/", new URL(request.url).origin);
  return NextResponse.redirect(url);
}