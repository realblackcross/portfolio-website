import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
console.log('FROM_EMAIL:', process.env.FROM_EMAIL);


export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    console.log("Request Body:", body);

    const data = await resend.emails.send({
      from: fromEmail,
      to: ["akarshtyagi2004@gmail.com", email],
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    });
    // new comments added
    console.log("Email sent data:", data);  // Log the response for debugging

    if (data?.error) {
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
