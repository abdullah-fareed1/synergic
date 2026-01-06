import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export function EmailTemplate({
  fullName,
  email,
  phone,
  company,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        backgroundColor: "#f3f3ee",
        padding: "40px 20px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "0",
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            backgroundColor: "#2B7856",
            padding: "32px 40px",
          }}
        >
          <h1
            style={{
              margin: "0",
              color: "#ffffff",
              fontSize: "24px",
              fontWeight: "700",
              letterSpacing: "-0.5px",
            }}
          >
            New Contact Form Submission
          </h1>
          <p
            style={{
              margin: "8px 0 0 0",
              color: "rgba(255,255,255,0.85)",
              fontSize: "14px",
            }}
          >
            You have received a new inquiry from your website
          </p>
        </div>

        <div
          style={{
            padding: "40px",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "16px 0",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 4px 0",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Full Name
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "16px",
                      color: "#111827",
                      fontWeight: "500",
                    }}
                  >
                    {fullName}
                  </p>
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    padding: "16px 0",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 4px 0",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Email Address
                  </p>
                  <a
                    href={`mailto:${email}`}
                    style={{
                      margin: "0",
                      fontSize: "16px",
                      color: "#2B7856",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    {email}
                  </a>
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    padding: "16px 0",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 4px 0",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Phone Number
                  </p>
                  <a
                    href={`tel:${phone}`}
                    style={{
                      margin: "0",
                      fontSize: "16px",
                      color: "#111827",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    {phone}
                  </a>
                </td>
              </tr>

              {company && (
                <tr>
                  <td
                    style={{
                      padding: "16px 0",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 4px 0",
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#6b7280",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Company
                    </p>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "16px",
                        color: "#111827",
                        fontWeight: "500",
                      }}
                    >
                      {company}
                    </p>
                  </td>
                </tr>
              )}

              <tr>
                <td
                  style={{
                    padding: "16px 0",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 12px 0",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Message
                  </p>
                  <div
                    style={{
                      backgroundColor: "#f9fafb",
                      padding: "20px",
                      borderLeft: "4px solid #2B7856",
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#374151",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {message}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div
            style={{
              marginTop: "32px",
              padding: "20px",
              backgroundColor: "#111D2B",
              borderRadius: "0",
            }}
          >
            <p
              style={{
                margin: "0 0 8px 0",
                fontSize: "13px",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Quick Actions
            </p>
            <table
              style={{
                width: "100%",
              }}
            >
              <tbody>
                <tr>
                  <td>
                    <a
                      href={`mailto:${email}?subject=Re: Your inquiry to Synergic`}
                      style={{
                        display: "inline-block",
                        padding: "12px 24px",
                        backgroundColor: "#2B7856",
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: "600",
                        textDecoration: "none",
                        marginRight: "12px",
                      }}
                    >
                      Reply to Email
                    </a>
                    <a
                      href={`tel:${phone}`}
                      style={{
                        display: "inline-block",
                        padding: "12px 24px",
                        backgroundColor: "transparent",
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: "600",
                        textDecoration: "none",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      Call Now
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#f9fafb",
            padding: "24px 40px",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "12px",
              color: "#9ca3af",
              textAlign: "center",
            }}
          >
            This email was automatically generated from the contact form at Synergic Website.
            <br />
            © {new Date().getFullYear()} Synergic. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}