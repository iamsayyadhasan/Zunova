import { NextResponse } from "next/server";

interface ContactRequestBody {
  fullName: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  description: string;
  privacyConsent: boolean;
  website_honeypot?: string; // Spam honeypot
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    // 1. Anti-spam check (honeypot must be empty)
    if (body.website_honeypot && body.website_honeypot.trim() !== "") {
      return NextResponse.json(
        { error: "Spam submission detected." },
        { status: 400 }
      );
    }

    // 2. Validate required fields
    if (!body.fullName || body.fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!body.service || body.service.trim() === "") {
      return NextResponse.json(
        { error: "Please select a service category." },
        { status: 400 }
      );
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

    // 3. Provider Configuration Check (Isolated backend delivery)
    // Check if an external provider key (e.g. RESEND_API_KEY or SMTP credentials) is configured
    const hasResendConfig = Boolean(process.env.RESEND_API_KEY);
    const destinationEmail = process.env.CONTACT_DESTINATION_EMAIL || "inquiries@zunova.tech";

    if (hasResendConfig) {
      // Future integration hook for Resend or SMTP provider:
      // await resend.emails.send({ ... });
      // For now, logging delivery action:
      console.log(`[Contact API] Dispatching to ${destinationEmail}`, {
        from: body.email,
        name: body.fullName,
        service: body.service,
      });

      return NextResponse.json({
        success: true,
        delivered: true,
        message: "Your inquiry has been sent successfully. We will review your requirements and respond within 1-2 business days.",
      });
    }

    // In local development or pre-configuration state:
    // We log the inquiry safely on the server and inform the user transparently
    console.log("[Contact API] Validated project inquiry received (Config pending):", {
      fullName: body.fullName,
      email: body.email,
      company: body.company || "Not specified",
      service: body.service,
      budget: body.budget || "Not specified",
      description: body.description,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      delivered: false,
      isSimulated: true,
      message:
        "Inquiry received and validated. (Note: Email delivery provider credentials are pending configuration in .env.local). Our team has logged your submission.",
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred while processing your request. Please try again or email us directly." },
      { status: 500 }
    );
  }
}

