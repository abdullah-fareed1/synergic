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
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        padding: "40px 20px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            backgroundColor: "#1a5f3f",
            padding: "40px 40px",
            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
          }}
        >
          <h1
            style={{
              margin: "0",
              color: "#ffffff",
              fontSize: "26px",
              fontWeight: "600",
              letterSpacing: "-0.5px",
            }}
          >
            New Contact Form Submission
          </h1>
          <p
            style={{
              margin: "10px 0 0 0",
              color: "rgba(255,255,255,0.9)",
              fontSize: "15px",
            }}
          >
            You have received a new inquiry from Synergic Website.
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
                    padding: "18px 0",
                    borderBottom: "1px solid #e9ecef",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 6px 0",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#6c757d",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                    }}
                  >
                    Full Name
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "16px",
                      color: "#212529",
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
                    padding: "18px 0",
                    borderBottom: "1px solid #e9ecef",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 6px 0",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#6c757d",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                    }}
                  >
                    Email Address
                  </p>
                  <a
                    href={`mailto:${email}`}
                    style={{
                      margin: "0",
                      fontSize: "16px",
                      color: "#1a5f3f",
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
                    padding: "18px 0",
                    borderBottom: "1px solid #e9ecef",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 6px 0",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#6c757d",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                    }}
                  >
                    Phone Number
                  </p>
                  <a
                    href={`tel:${phone}`}
                    style={{
                      margin: "0",
                      fontSize: "16px",
                      color: "#212529",
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
                      padding: "18px 0",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 6px 0",
                        fontSize: "11px",
                        fontWeight: "600",
                        color: "#6c757d",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                      }}
                    >
                      Company
                    </p>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "16px",
                        color: "#212529",
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
                    padding: "18px 0",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 14px 0",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#6c757d",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                    }}
                  >
                    Message
                  </p>
                  <div
                    style={{
                      backgroundColor: "#f8f9fa",
                      padding: "24px",
                      borderLeft: "3px solid #1a5f3f",
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#495057",
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
              marginTop: "36px",
              padding: "24px",
              backgroundColor: "#1a1a1a",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                margin: "0 0 12px 0",
                fontSize: "13px",
                color: "rgba(255,255,255,0.75)",
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
                        padding: "13px 26px",
                        backgroundColor: "#1a5f3f",
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: "600",
                        textDecoration: "none",
                        marginRight: "12px",
                        borderRadius: "6px",
                      }}
                    >
                      Reply to Email
                    </a>
                    <a
                      href={`tel:${phone}`}
                      style={{
                        display: "inline-block",
                        padding: "13px 26px",
                        backgroundColor: "transparent",
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: "600",
                        textDecoration: "none",
                        border: "1.5px solid rgba(255,255,255,0.3)",
                        borderRadius: "6px",
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
            backgroundColor: "#f8f9fa",
            padding: "28px 40px",
            borderTop: "1px solid #e9ecef",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "12px",
              color: "#6c757d",
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