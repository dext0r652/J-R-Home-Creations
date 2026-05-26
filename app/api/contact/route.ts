import { NextResponse } from "next/server";

// HANDOFF: hook up Resend before going live.
// 1. npm install resend
// 2. Add RESEND_API_KEY to .env.local (see .env.local.example)
// 3. Replace the stub below with:
//    import { Resend } from 'resend';
//    const resend = new Resend(process.env.RESEND_API_KEY);
//    await resend.emails.send({ from: ..., to: 'homecreation@telenet.be', ... });

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  // Stub — real email sending wired up on handoff
  return NextResponse.json({ ok: true });
}
