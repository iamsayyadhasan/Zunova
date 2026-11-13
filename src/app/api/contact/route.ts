import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactFormData } from "@/types/contact";

type ContactRequestBody = Partial<ContactFormData>;

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// Safe diagnostic endpoint (returns boolean flags only — never exposes secrets)
export async function GET() {
  return NextResponse.json({
    hasResendApiKey: Boolean(process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim() !== ""),
    hasDestinationEmail: Boolean(process.env.CONTACT_DESTINATION_EMAIL),
    hasFromEmail: Boolean(process.env.RESEND_FROM_EMAIL),
  });
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    // 1. Anti-spam check (honeypot must be empty)
    if (body.website_honeypot && body.website_honeypot.trim() !== "") {
      return NextResponse.json({ error: "Spam submission detected." }, { status: 400 });
    }

    // 2. Validate required fields
    if (!body.fullName || body.fullName.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid full name." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (body.phone && body.phone.trim() !== "") {
      const trimmedPhone = body.phone.trim();
      const digitsOnly = trimmedPhone.replace(/\D/g, "");
      const phoneRegex = /^\+?[0-9\s\-().]{7,25}$/;
      if (!phoneRegex.test(trimmedPhone) || digitsOnly.length < 7 || digitsOnly.length > 15) {
        return NextResponse.json(
          { error: "Please provide a valid phone or WhatsApp number with country code." },
          { status: 400 }
        );
      }
    }

    if (!body.service || body.service.trim() === "") {
      return NextResponse.json({ error: "Please select a service category." }, { status: 400 });
    }

    if (!body.description || body.description.trim().length < 15) {
      return NextResponse.json(
        { error: "Please share a brief project description (at least 15 characters)." },
        { status: 400 }
      );
    }

    if (!body.privacyConsent) {
      return NextResponse.json(
        { error: "You must accept the privacy policy notice to proceed." },
        { status: 400 }
      );
    }

    // 3. Provider Configuration Check
    const apiKey = process.env.RESEND_API_KEY;
    const destinationEmail = process.env.CONTACT_DESTINATION_EMAIL || "support@zunovatech.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Zunova Tech <support@zunovatech.com>";

    if (!apiKey) {
      console.error(
        "[Contact API Error]: RESEND_API_KEY is not configured in environment variables."
      );
      return NextResponse.json(
        {
          error:
            "Email service is currently unconfigured. Please email support@zunovatech.com directly.",
        },
        { status: 503 }
      );
    }

    // 4. Dispatch Email via Resend
    const resend = new Resend(apiKey);
    const safeName = escapeHtml(body.fullName.trim());
    const safeEmail = escapeHtml(body.email.trim());
    const safePhone = body.phone?.trim() ? escapeHtml(body.phone.trim()) : "Not provided";
    const safeCompany = body.company?.trim() ? escapeHtml(body.company.trim()) : "Not specified";
    const safeService = escapeHtml(body.service.trim());
    const safeBudget = body.budget?.trim() ? escapeHtml(body.budget.trim()) : "Not specified";
    const safeDescription = escapeHtml(body.description.trim()).replace(/\n/g, "<br />");
    const submittedAt = new Date().toUTCString();

    const textContent = [
      "Zunova Tech — New Project Inquiry",
      "==================================",
      `Full Name:        ${body.fullName.trim()}`,
      `Business Email:   ${body.email.trim()}`,
      `Phone / WhatsApp: ${body.phone?.trim() || "Not provided"}`,
      `Company:          ${body.company?.trim() || "Not specified"}`,
      `Service:          ${body.service.trim()}`,
      `Estimated Budget: ${body.budget?.trim() || "Not specified"}`,
      `Submitted:        ${submittedAt}`,
      "",
      "Project Description & Goals:",
      "----------------------------",
      body.description.trim(),
    ].join("\n");

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Project Inquiry — ${safeService}</title>
</head>
<body style="margin:0;padding:0;background-color:#070B14;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#E6EDF8;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#070B14;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:600px;background-color:#0F172A;border:1px solid #1E293B;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.5);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0A101F,#0F172A);padding:28px 32px;border-bottom:1px solid #1E293B;">
              <span style="display:inline-block;padding:4px 10px;border-radius:9999px;background-color:rgba(0,242,254,0.1);border:1px solid rgba(0,242,254,0.3);color:#00F2FE;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:1px;font-weight:600;">
                New Project Inquiry
              </span>
              <h1 style="margin:12px 0 0;font-size:20px;font-weight:700;color:#FFFFFF;line-height:1.3;">
                ${safeService}
              </h1>
              <p style="margin:4px 0 0;font-size:13px;color:#94A3B8;">
                Submitted on ${submittedAt}
              </p>
            </td>
          </tr>

          <!-- Inquiry Metadata -->
          <tr>
            <td style="padding:28px 32px 16px;">
              <table role="presentation" width="100%" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0;width:140px;color:#94A3B8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Client Name</td>
                  <td style="padding:8px 0;color:#F8FAFC;font-size:14px;font-weight:600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;width:140px;color:#94A3B8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Business Email</td>
                  <td style="padding:8px 0;color:#00F2FE;font-size:14px;"><a href="mailto:${safeEmail}" style="color:#00F2FE;text-decoration:none;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding:8px 0;width:140px;color:#94A3B8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Phone / WhatsApp</td>
                  <td style="padding:8px 0;color:#CBD5E1;font-size:14px;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;width:140px;color:#94A3B8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Company</td>
                  <td style="padding:8px 0;color:#CBD5E1;font-size:14px;">${safeCompany}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;width:140px;color:#94A3B8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Service</td>
                  <td style="padding:8px 0;color:#CBD5E1;font-size:14px;">${safeService}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;width:140px;color:#94A3B8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Estimated Budget</td>
                  <td style="padding:8px 0;color:#CBD5E1;font-size:14px;">${safeBudget}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Description -->
          <tr>
            <td style="padding:16px 32px 28px;">
              <div style="background-color:#070B14;border:1px solid #1E293B;border-radius:12px;padding:20px;">
                <p style="margin:0 0 10px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:#94A3B8;">Project Description &amp; Goals</p>
                <div style="font-size:14px;line-height:1.6;color:#E2E8F0;white-space:normal;">
                  ${safeDescription}
                </div>
              </div>
            </td>
          </tr>

          <!-- CTA Reply Button -->
          <tr>
            <td style="padding:0 32px 28px;">
              <a href="mailto:${safeEmail}?subject=${encodeURIComponent("Re: Project Inquiry — Zunova Tech")}" style="display:inline-block;background-color:#00F2FE;color:#070B14;font-size:13px;font-weight:700;text-decoration:none;padding:12px 24px;border-radius:8px;">
                Reply Directly to ${safeName}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0A101F;padding:16px 32px;border-top:1px solid #1E293B;text-align:center;">
              <p style="margin:0;font-size:11px;color:#64748B;">
                Automated inquiry notification dispatched by Zunova Tech contact pipeline.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [destinationEmail],
      replyTo: body.email.trim(),
      subject: `New Project Inquiry: ${body.service} — ${body.fullName.trim()}`,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error("[Contact API Error: Resend]", error);
      return NextResponse.json(
        {
          error:
            error.message ||
            "Failed to send your inquiry. Please try again or email support@zunovatech.com directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      delivered: true,
      message:
        "Your inquiry has been sent successfully. We will review your requirements and respond within 1-2 business days.",
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        error:
          "An unexpected server error occurred while processing your request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}

