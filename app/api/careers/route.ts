import { CareerEmailTemplate } from "@/app/components/CareerEmailTemplate";
import { Resend } from "resend";

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_V2_SECRET_KEY;

  if (!secretKey) {
    console.error("RECAPTCHA_V2_SECRET_KEY is missing");
    return false;
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

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

    // Parse FormData instead of JSON
    const formData = await request.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const recaptchaToken = formData.get("recaptchaToken") as string;
    const cvFile = formData.get("cv") as File | null;

    // Validation
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

    if (!cvFile) {
      return Response.json(
        { success: false, error: "CV is required" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(cvFile.type)) {
      return Response.json(
        { success: false, error: "CV must be a PDF or Word document" },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (cvFile.size > maxSize) {
      return Response.json(
        { success: false, error: "CV file size must be less than 10MB" },
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

    const applicationData = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
    };

    // Convert file to buffer for attachment
    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

    // Get file extension for naming
    const fileExtension = cvFile.name.split(".").pop() || "pdf";
    const sanitizedName = fullName.trim().replace(/[^a-zA-Z0-9]/g, "_");
    const attachmentFilename = `CV_${sanitizedName}.${fileExtension}`;

    const result = await resend.emails.send({
      from: `Synergic Career Form <${sendingEmail}>`,
      to: [`${receivingEmail}`],
      replyTo: `${applicationData.fullName} <${applicationData.email}>`,
      subject: `New Career Application from ${applicationData.fullName}`,
      react: CareerEmailTemplate(applicationData),
      attachments: [
        {
          filename: attachmentFilename,
          content: cvBuffer,
        },
      ],
    });

    return Response.json({
      success: true,
      message: "Application sent successfully",
      result,
    });
  } catch (err: any) {
    console.error("Error sending career application:", err);
    return Response.json(
      {
        success: false,
        error: err?.message ?? "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}