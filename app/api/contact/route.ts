import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from "resend";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  recaptchaToken: string;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_V2_SECRET_KEY;
  
  if (!secretKey) {
    console.error("RECAPTCHA_V2_SECRET_KEY is missing");
    return false;
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: "RESEND_API_KEY is missing" },
        { status: 500 }
      );
    }

    const body: ContactFormData = await request.json();

    const { fullName, email, phone, company, message, recaptchaToken } = body;

    if (!fullName || !fullName.trim()) {
      return Response.json(
        { success: false, error: "Full name is required" },
        { status: 400 }
      );
    }

    if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!phone || !phone.trim()) {
      return Response.json(
        { success: false, error: "Phone is required" },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return Response.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    if (!recaptchaToken) {
      return Response.json(
        { success: false, error: "reCAPTCHA verification is required" },
        { status: 400 }
      );
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return Response.json(
        { success: false, error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const sendingEmail = process.env.SENDING_EMAIL_ADDRESS;
    const receivingEmail = process.env.RECEIVING_EMAIL_ADDRESS;

    const formData = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company?.trim() || "",
      message: message.trim(),
    };

    const result = await resend.emails.send({
      from: `Synergic Contact Form <${sendingEmail}>`,
      to: [`${receivingEmail}`],
      replyTo: `${formData.fullName} <${formData.email}>`,
      subject: `New Contact Form Submission from ${formData.fullName}`,
      react: EmailTemplate(formData),
    });

    return Response.json({
      success: true,
      message: "Email sent successfully",
      result,
    });
  } catch (err: any) {
    console.error("Error sending email:", err);
    return Response.json(
      {
        success: false,
        error: err?.message ?? "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}