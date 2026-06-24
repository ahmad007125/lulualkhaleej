import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL ?? "creativeclub007125@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ??
  "Lulu Al-Khaleej <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, website } = body;

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          success: false,
          whatsapp: true,
          message:
            "Email service is not configured. Please contact us on WhatsApp.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,
      html: `
      <div style="margin:0;padding:40px 20px;background:#f4f7fb;font-family:Arial,sans-serif;">
        
        <div style="
          max-width:600px;
          margin:0 auto;
          background:#ffffff;
          border-radius:12px;
          overflow:hidden;
          box-shadow:0 4px 20px rgba(0,0,0,0.08);
        ">
          
          <!-- Header -->
          <div style="
            background:linear-gradient(135deg,#2563eb,#1e40af);
            padding:5%;
            text-align:center;
          ">
            <h2 style="margin:0;color:#ffffff;font-size:24px; font-size:clamp(18px, 2vw, 24px);">
              New Contact Form Submission
            </h2>
          </div>

          <!-- Content -->
          <div style="padding:5%;">
            
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-size: 14px;">
              
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                  <strong style="color:#111827;">Name</strong><br>
                  <span style="color:#4b5563;">${escapeHtml(name)}</span>
                </td>
              </tr>

              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                  <strong style="color:#111827;">Email</strong><br>
                  <span style="color:#4b5563;">${escapeHtml(email)}</span>
                </td>
              </tr>

              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                  <strong style="color:#111827;">Phone</strong><br>
                  <span style="color:#4b5563;">${escapeHtml(phone || "Not provided")}</span>
                </td>
              </tr>

              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                  <strong style="color:#111827;">Company</strong><br>
                  <span style="color:#4b5563;">${escapeHtml(company || "Not provided")}</span>
                </td>
              </tr>

            </table>

            <!-- Message -->
            <div style="
              margin-top:24px;
              background:#f9fafb;
              border-left:4px solid #2563eb;
              padding:16px;
              border-radius:8px;
              font-size: 14px;
            ">
              <strong style="display:block;margin-bottom:8px;color:#111827;">
                Message
              </strong>
              <div style="color:#4b5563;line-height:1.6;">
                ${escapeHtml(message).replace(/\n/g, "<br />")}
              </div>
            </div>

          </div>

          <!-- Footer -->
          <div style="
            background:#f9fafb;
            padding:16px;
            text-align:center;
            color:#6b7280;
            font-size:12px;
          ">
            Contact form submission received from your website.
          </div>

        </div>
      </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          success: false,
          whatsapp: true,
          message:
            "We couldn't send your message by email. Please contact us on WhatsApp.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        whatsapp: true,
        message:
          "Something went wrong while sending your message. Please contact us on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
