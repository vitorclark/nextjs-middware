import type { NextRequest, NextResponse } from "next/server";

// Block Austria, prefer Germany
const BLOCKED_COUNTRY = ["DE", "US"];

export function middleware(req: NextRequest, res: NextResponse) {
  const country = req?.geo?.country || "PT";
  console.log(req);
  if (BLOCKED_COUNTRY.includes(country)) {
    return new Response("Blocked for legal reasons", { status: 451 });
  }
  return new Response(
    `Greetings from ${country}, where you are not blocked.\n${
      req.ip
    }\n${JSON.stringify(req.geo)}\n${JSON.stringify(req)}`
  );
}
