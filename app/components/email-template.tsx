import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export function EmailTemplate({
  firstName,
  lastName,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#f9fafb",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <h1 style={{ marginBottom: "16px", color: "#111827" }}>
          New Contact Form Submission
        </h1>

        <p style={{ marginBottom: "12px", color: "#374151" }}>
          <strong>Name:</strong>{" "}
          {firstName} {lastName ?? ""}
        </p>

        {email && (
          <p style={{ marginBottom: "12px", color: "#374151" }}>
            <strong>Email:</strong> {email}
          </p>
        )}

        {message && (
          <div style={{ marginTop: "16px" }}>
            <p
              style={{
                marginBottom: "8px",
                color: "#374151",
                fontWeight: "bold",
              }}
            >
              Message:
            </p>
            <div
              style={{
                backgroundColor: "#f3f4f6",
                padding: "12px",
                borderRadius: "6px",
                whiteSpace: "pre-wrap",
                color: "#111827",
              }}
            >
              {message}
            </div>
          </div>
        )}

        <hr style={{ margin: "24px 0", borderColor: "#e5e7eb" }} />

        <p style={{ fontSize: "12px", color: "#6b7280" }}>
          This email was generated automatically from your website contact
          form.
        </p>
      </div>
    </div>
  );
}
