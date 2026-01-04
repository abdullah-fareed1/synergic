import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from "resend";

export async function GET() {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return Response.json(
        { error: "RESEND_API_KEY is missing" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const sendingEmail = process.env.SENDING_EMAIL_ADDRESS;

    const formData = {
      firstName: "Test",
      lastName: "User",
      email: "test.user@example.com",
      message:
        "This is a test email sent from the Next.js API route.\n\nIf you’re reading this, ignore it — email configuration is working perfectly!",
    };

    const result = await resend.emails.send({
      from: `Synergic NextJs <${sendingEmail}>`,
      to: ["abdullahfareed882@gmail.com"],
      replyTo: `${formData.firstName} ${formData.lastName} <${formData.email}>`,
      subject: "Synergic Next.js Contact Form",
      react: EmailTemplate(formData),
    });

    return Response.json({
      success: true,
      message: "Test email sent successfully",
      result,
    });
  } catch (err: any) {
    return Response.json(
      {
        success: false,
        error: err?.message ?? "Unknown error",
      },
      { status: 500 }
    );
  }
}
