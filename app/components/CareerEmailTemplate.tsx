import * as React from "react";

interface CareerEmailTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export function CareerEmailTemplate({
  fullName,
  email,
  phone,
  message,
}: CareerEmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
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
        {/* Header - Career specific with orange/red accent */}
        <div
          style={{
            backgroundColor: "#111D2B",
            padding: "0",
          }}
        >
          {/* Top accent bar */}
          <div
            style={{
              backgroundColor: "#FB3B22",
              height: "6px",
              width: "100%",
            }}
          />
          <div
            style={{
              padding: "40px",
              backgroundImage:
                "linear-gradient(135deg, rgba(251,59,34,0.1) 0%, transparent 100%)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#FB3B22",
                color: "#ffffff",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Career Application
            </div>
            <h1
              style={{
                margin: "0",
                color: "#ffffff",
                fontSize: "28px",
                fontWeight: "700",
                letterSpacing: "-0.5px",
              }}
            >
              New Job Application
            </h1>
            <p
              style={{
                margin: "12px 0 0 0",
                color: "rgba(255,255,255,0.8)",
                fontSize: "15px",
              }}
            >
              A candidate has submitted their application to join the Synergic
              team.
            </p>
          </div>
        </div>

        {/* Candidate Info Card */}
        <div
          style={{
            padding: "32px 40px",
            backgroundColor: "#fafafa",
            borderBottom: "1px solid #e9ecef",
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
                <td style={{ verticalAlign: "middle" }}>
                  <h2
                    style={{
                      margin: "0",
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#212529",
                    }}
                  >
                    {fullName}
                  </h2>
                  <p
                    style={{
                      margin: "4px 0 0 0",
                      fontSize: "14px",
                      color: "#6c757d",
                    }}
                  >
                    Applicant • CV Attached Below
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Contact Details */}
        <div
          style={{
            padding: "32px 40px",
          }}
        >
          <h3
            style={{
              margin: "0 0 20px 0",
              fontSize: "13px",
              fontWeight: "600",
              color: "#6c757d",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
            }}
          >
            Contact Information
          </h3>

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
                    padding: "14px 0",
                    borderBottom: "1px solid #e9ecef",
                    width: "40%",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#6c757d",
                    }}
                  >
                    📧 Email
                  </span>
                </td>
                <td
                  style={{
                    padding: "14px 0",
                    borderBottom: "1px solid #e9ecef",
                  }}
                >
                  <a
                    href={`mailto:${email}`}
                    style={{
                      fontSize: "15px",
                      color: "#FB3B22",
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
                    padding: "14px 0",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#6c757d",
                    }}
                  >
                    📱 Phone
                  </span>
                </td>
                <td
                  style={{
                    padding: "14px 0",
                  }}
                >
                  <a
                    href={`tel:${phone}`}
                    style={{
                      fontSize: "15px",
                      color: "#212529",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    {phone}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Message */}
        <div
          style={{
            padding: "0 40px 32px",
          }}
        >
          <h3
            style={{
              margin: "0 0 16px 0",
              fontSize: "13px",
              fontWeight: "600",
              color: "#6c757d",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
            }}
          >
            Message
          </h3>
          <div
            style={{
              backgroundColor: "#111D2B",
              padding: "24px",
              borderRadius: "8px",
              borderLeft: "4px solid #FB3B22",
            }}
          >
            <p
              style={{
                margin: "0",
                fontSize: "15px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.9)",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </p>
          </div>
        </div>

        {/* CV Attachment Notice */}
        <div
          style={{
            margin: "0 40px 32px",
            padding: "20px",
            backgroundColor: "#fff8f6",
            border: "1px solid #ffd4cc",
            borderRadius: "8px",
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
                    width: "40px",
                    verticalAlign: "top",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>📎</span>
                </td>
                <td>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#212529",
                    }}
                  >
                    CV/Resume Attached
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0 0",
                      fontSize: "13px",
                      color: "#6c757d",
                    }}
                  >
                    The candidate's CV is attached to this email for your review.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div
          style={{
            margin: "0 40px 32px",
            padding: "24px",
            backgroundColor: "#111D2B",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              margin: "0 0 16px 0",
              fontSize: "13px",
              color: "rgba(255,255,255,0.75)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
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
                    href={`mailto:${email}?subject=Re: Your Application to Synergic - Next Steps`}
                    style={{
                      display: "inline-block",
                      padding: "14px 28px",
                      backgroundColor: "#FB3B22",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontWeight: "600",
                      textDecoration: "none",
                      marginRight: "12px",
                      borderRadius: "6px",
                    }}
                  >
                    Reply
                  </a>
                  <a
                    href={`tel:${phone}`}
                    style={{
                      display: "inline-block",
                      padding: "14px 28px",
                      backgroundColor: "transparent",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontWeight: "600",
                      textDecoration: "none",
                      border: "1.5px solid rgba(255,255,255,0.3)",
                      borderRadius: "6px",
                    }}
                  >
                    Call Candidate
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
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
            This career application was submitted through the Synergic Career Form.
            <br />
            Synergic Intelligent Systems • © {new Date().getFullYear()} Synergic. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}