"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

interface FloatingInputProps {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: boolean;
}

function FloatingInput({
  name,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  error = false,
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative w-full h-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full h-full px-0 lg:px-5 pt-4 bg-transparent text-white text-base lg:text-base focus:outline-none peer ${
          error ? "border-b-2 border-red-500" : ""
        }`}
      />
      <label
        className={`absolute left-0 lg:left-5 transition-all duration-200 pointer-events-none ${
          error ? "text-red-400" : "text-gray-400"
        }
          ${isActive ? "top-0 lg:top-2 text-xs" : "top-1/2 -translate-y-1/2 text-base"}`}
      >
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
    </div>
  );
}

interface FloatingTextareaProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: boolean;
}

function FloatingTextarea({
  name,
  label,
  value,
  onChange,
  required = false,
  error = false,
}: FloatingTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative w-full h-full">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full h-full px-0 lg:px-5 pt-6 bg-transparent text-white text-base lg:text-base focus:outline-none resize-none peer ${
          error ? "border-b-2 border-red-500" : ""
        }`}
      />
      <label
        className={`absolute left-0 lg:left-5 transition-all duration-200 pointer-events-none ${
          error ? "text-red-400" : "text-gray-400"
        }
          ${isActive ? "top-0 lg:top-2 text-xs" : "top-4 text-base"}`}
      >
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
    </div>
  );
}

interface FileUploadProps {
  name: string;
  label: string;
  file: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: boolean;
}

function FileUpload({
  name,
  label,
  file,
  onChange,
  required = false,
  error = false,
}: FileUploadProps) {
  const hasFile = file !== null;

  return (
    <div className="relative w-full h-full">
      <input
        type="file"
        name={name}
        onChange={onChange}
        accept=".pdf,.doc,.docx"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
      />
      <div className="w-full h-full px-0 lg:px-5 flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <label
            className={`transition-all duration-200 ${
              error ? "text-red-400" : "text-gray-400"
            } ${hasFile ? "text-xs" : "text-base"}`}
          >
            {label}
            {required && <span className="text-red-400 ml-0.5">*</span>}
          </label>
          {hasFile && (
            <span className="text-white text-base truncate max-w-[200px] lg:max-w-[150px]">
              {file.name}
            </span>
          )}
        </div>
        <Image
          src="/icons/upload.svg"
          alt="Upload"
          width={20}
          height={20}
          className="opacity-70"
        />
      </div>
    </div>
  );
}

const FormSection = () => {
  const stripePatternDark =
    "linear-gradient(45deg, #1a2a3a 8.33%, #111D2B 8.33%, #111D2B 50%, #1a2a3a 50%, #1a2a3a 58.33%, #111D2B 58.33%, #111D2B 100%)";

  const stripeSize = "6.00px 6.00px";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    message: false,
    cv: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [desktopWidgetId, setDesktopWidgetId] = useState<number | null>(null);
  const [mobileWidgetId, setMobileWidgetId] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCvFile(file);
    if (errors.cv) {
      setErrors({ ...errors, cv: false });
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: !formData.fullName.trim(),
      email:
        !formData.email.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      phone: !formData.phone.trim(),
      message: false,
      cv: !cvFile,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async () => {
    if (typeof window === "undefined" || !(window as any).grecaptcha) {
      alert("reCAPTCHA is still loading. Please wait a moment and try again.");
      return;
    }

    const isMobile = window.innerWidth < 1024;
    const widgetId = isMobile ? mobileWidgetId : desktopWidgetId;

    let recaptchaResponse = "";
    if (widgetId !== null) {
      recaptchaResponse = (window as any).grecaptcha.getResponse(widgetId);
    }

    if (!recaptchaResponse) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName.trim());
      formDataToSend.append("email", formData.email.trim());
      formDataToSend.append("phone", formData.phone.trim());
      formDataToSend.append("message", formData.message.trim());
      formDataToSend.append("recaptchaToken", recaptchaResponse);
      if (cvFile) {
        formDataToSend.append("cv", cvFile);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "", phone: "", message: "" });
        setCvFile(null);
        if (widgetId !== null) {
          (window as any).grecaptcha.reset(widgetId);
        }
      } else {
        setSubmitStatus("error");
        alert(result.error || "Failed to send application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      alert("Failed to send application. Please try again.");
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    (window as any).onRecaptchaLoadCareer = () => {
      setRecaptchaLoaded(true);

      if (
        (window as any).grecaptcha &&
        document.getElementById("recaptcha-container-career")
      ) {
        try {
          const desktopId = (window as any).grecaptcha.render(
            "recaptcha-container-career",
            {
              sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY,
              theme: "dark",
              size: "normal",
            }
          );
          setDesktopWidgetId(desktopId);
        } catch (error) {
          console.error("Error rendering career reCAPTCHA:", error);
        }
      }

      if (
        (window as any).grecaptcha &&
        document.getElementById("recaptcha-container-career-mobile")
      ) {
        try {
          const mobileId = (window as any).grecaptcha.render(
            "recaptcha-container-career-mobile",
            {
              sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY,
              theme: "dark",
              size: "normal",
            }
          );
          setMobileWidgetId(mobileId);
        } catch (error) {
          console.error("Error rendering career mobile reCAPTCHA:", error);
        }
      }
    };

    if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
      (window as any).onRecaptchaLoadCareer();
    }
  }, []);

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoadCareer&render=explicit"
        strategy="lazyOnload"
      />

      <section className="lg:hidden">
        <div className="bg-(--brand-red) px-6 pt-16 pb-20 py-8 ">
          <span className="text-white text-xs font-extrabold uppercase tracking-wider">
            RESULTS-DRIVEN PEOPLE-POWERED
          </span>

          <h2 className="text-white text-2xl font-extrabold leading-tight mt-4">
            Career Opportunities
          </h2>

          <p className="text-white text-base leading-relaxed mt-4">
            We value autonomy, accountability, and lifelong learning.
            <br />
            Whether you're working from Athens or abroad, we
            <br />
            provide the trust and support you need to thrive.
          </p>

          <p className="text-white text-base font-semibold mt-6 mb-3">
            We welcome:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-white text-base">
              <span
                className="w-2 h-2 rounded-full mr-3 shrink-0"
                style={{ backgroundColor: "var(--brand-white)" }}
              />
              Experienced professionals ready to lead
            </li>
            <li className="flex items-center text-white text-base">
              <span
                className="w-2 h-2 rounded-full mr-3 shrink-0"
                style={{ backgroundColor: "var(--brand-white)" }}
              />
              Young talent eager to learn and grow
            </li>
            <li className="flex items-center text-white text-base">
              <span
                className="w-2 h-2 rounded-full mr-3 shrink-0"
                style={{ backgroundColor: "var(--brand-white)" }}
              />
              Freelance specialists looking for purposeful projects
            </li>
          </ul>
        </div>

        <div className="bg-(--brand-dark)">
          <div className="px-6 py-6 pt-20 pb-12 border-b border-gray-400/30">
            <h3 className="text-white text-3xl font-extrabold">Work With Us</h3>
            <p className="text-white text-lg leading-relaxed mt-2">
              We're always looking for talented individuals
              <br />
              to join our growing team.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="border-b border-gray-400/30 h-20">
              <div className="px-6 h-full">
                <FloatingInput
                  name="fullName"
                  label="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  error={errors.fullName}
                />
              </div>
            </div>

            <div className="border-b border-gray-400/30 h-20">
              <div className="px-6 h-full">
                <FloatingInput
                  name="phone"
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  error={errors.phone}
                />
              </div>
            </div>

            <div className="border-b border-gray-400/30 h-20">
              <div className="px-6 h-full">
                <FloatingInput
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  error={errors.email}
                />
              </div>
            </div>

            <div className="border-b  border-gray-400/30 h-20">
              <div className="px-6 h-full">
                <FileUpload
                  name="cv"
                  label="CV"
                  file={cvFile}
                  onChange={handleFileChange}
                  required
                  error={errors.cv}
                />
              </div>
            </div>

            <div className="border-b border-gray-400/30 h-42">
              <div className="px-6 h-full">
                <FloatingTextarea
                  name="message"
                  label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                />
              </div>
            </div>

            <div className="border-b border-gray-400/30 h-24 flex items-center justify-center overflow-hidden">
              <div
                id="recaptcha-container-career-mobile"
                style={{
                  transform: "scaleX(1) scaleY(1)",
                  transformOrigin: "center center",
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full h-24 flex items-center justify-between px-6 text-white text-lg ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:opacity-90"
              }`}
              style={{ backgroundColor: "#2B7856" }}
            >
              <span>
                {isSubmitting
                  ? "Sending..."
                  : submitStatus === "success"
                  ? "Application Sent!"
                  : submitStatus === "error"
                  ? "Try Again"
                  : "Join our team"}
              </span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8l4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <div className="hidden lg:block">
        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0"
            style={{ width: "5.56%" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 bg-(--brand-dark)"
            style={{ width: "5.56%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-30 pointer-events-none"
            style={{ left: "5.56%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-30 pointer-events-none"
            style={{ left: "27.78%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-30 pointer-events-none"
            style={{ left: "50%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-30 pointer-events-none"
            style={{ left: "72.22%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-30 pointer-events-none"
            style={{ left: "94.44%" }}
          />

          <GridSection
            bgColor="bg-(--brand-dark)"
            showLines={[false, false, false, false, false]}
            minHeight="auto"
          >
            <GridContainer className="h-40">
              <GridCol
                span="AB"
                className="h-40"
                style={{
                  backgroundImage: stripePatternDark,
                  backgroundSize: stripeSize,
                }}
              >
                <></>
              </GridCol>
              <GridCol
                span="C"
                className="flex items-center pl-6 h-40"
                style={{ backgroundColor: "var(--brand-dark)" }}
              >
                <h2 className="text-white text-4xl font-extrabold">
                  Work With Us
                </h2>
              </GridCol>
              <GridCol
                span="D"
                className="flex items-center pl-6 pr-6 h-40"
                style={{ backgroundColor: "var(--brand-dark)" }}
              >
                <p className="text-white text-lg leading-relaxed">
                  We're always looking for
                  <br />
                  talented individuals to join
                  <br />
                  our growing team.
                </p>
              </GridCol>
            </GridContainer>
          </GridSection>

          <div
            className="absolute right-0 top-0 bottom-0 z-10"
            style={{
              width: "5.56%",
              backgroundImage: stripePatternDark,
              backgroundSize: stripeSize,
            }}
          />
        </div>

        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0"
            style={{ width: "5.56%" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 bg-(--brand-dark)"
            style={{ width: "5.56%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-30 pointer-events-none"
            style={{ left: "5.56%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-30 pointer-events-none"
            style={{ left: "94.44%" }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gray-400/30 z-30" />

          <GridSection
            bgColor="bg-(--brand-dark)"
            showLines={[false, false, false, false, false]}
            minHeight="auto"
          >
            <GridContainer>
              <GridCol
                span="AB"
                className="p-8"
                style={{
                  backgroundColor: "var(--brand-red)",
                  minHeight: "320px",
                }}
              >
                <span className="text-white text-xs font-extrabold uppercase tracking-wider">
                  RESULTS-DRIVEN PEOPLE-POWERED
                </span>
                <h3 className="text-white text-4xl font-extrabold mt-4 mb-6">
                  Career Opportunities
                </h3>
                <p className="text-white text-base leading-relaxed mb-6">
                  We value autonomy, accountability, and lifelong learning.
                  <br />
                  Whether you're working from Athens or abroad, we provide
                  <br />
                  the trust and support you need to thrive.
                </p>
                <p className="text-white text-base font-semibold mb-3">
                  We welcome:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-white text-base">
                    <span
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: "var(--brand-yellow)" }}
                    />
                    Experienced professionals ready to lead
                  </li>
                  <li className="flex items-center text-white text-base">
                    <span
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: "var(--brand-yellow)" }}
                    />
                    Young talent eager to learn and grow
                  </li>
                  <li className="flex items-center text-white text-base">
                    <span
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: "var(--brand-yellow)" }}
                    />
                    Freelance specialists looking for purposeful projects
                  </li>
                </ul>
              </GridCol>

              <GridCol
                span="C"
                className="flex flex-col"
                style={{
                  backgroundColor: "var(--brand-dark)",
                  minHeight: "320px",
                }}
              >
                <div className="h-20 border-b border-gray-400/30 border-r border-r-gray-400/30">
                  <FloatingInput
                    name="fullName"
                    label="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    error={errors.fullName}
                  />
                </div>
                <div className="h-20 border-b border-gray-400/30 border-r border-r-gray-400/30">
                  <FloatingInput
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    error={errors.email}
                  />
                </div>
                <div className="flex-1 border-r border-r-gray-400/30">
                  <FloatingTextarea
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                  />
                </div>
              </GridCol>

              <GridCol
                span="D"
                className="flex flex-col"
                style={{
                  backgroundColor: "var(--brand-dark)",
                  minHeight: "320px",
                }}
              >
                <div className="h-20 border-b border-gray-400/30">
                  <FloatingInput
                    name="phone"
                    label="Phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    error={errors.phone}
                  />
                </div>
                <div className="h-20 border-b border-gray-400/30">
                  <FileUpload
                    name="cv"
                    label="CV"
                    file={cvFile}
                    onChange={handleFileChange}
                    required
                    error={errors.cv}
                  />
                </div>
                <div className="flex-1" />
              </GridCol>
            </GridContainer>
          </GridSection>
        </div>

        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0"
            style={{ width: "5.56%" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 bg-(--brand-dark)"
            style={{ width: "5.56%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-30 pointer-events-none"
            style={{ left: "5.56%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-30 pointer-events-none"
            style={{ left: "27.78%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-30 pointer-events-none"
            style={{ left: "50%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-30 pointer-events-none"
            style={{ left: "72.22%" }}
          />
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-400/30 z-30 pointer-events-none"
            style={{ left: "94.44%" }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gray-400/30 z-30" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-400/30 z-30" />

          <GridSection
            bgColor="bg-(--brand-dark)"
            showLines={[false, false, false, false, false]}
            minHeight="auto"
          >
            <GridContainer className="h-24">
              <GridCol
                span="AB"
                className="h-24"
                style={{
                  backgroundImage: stripePatternDark,
                  backgroundSize: stripeSize,
                }}
              >
                <></>
              </GridCol>

              <GridCol
                span="C"
                className="h-24 flex items-center justify-center border-r border-r-gray-400/30"
                style={{ backgroundColor: "var(--brand-dark)" }}
              >
                <div
                  id="recaptcha-container-career"
                  style={{
                    transform: "scaleX(1.123) scaleY(0.98)",
                    transformOrigin: "center center",
                  }}
                />
              </GridCol>

              <GridCol
                span="D"
                className="h-24"
                style={{ backgroundColor: "var(--brand-dark)" }}
              >
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full h-full flex items-center justify-between px-6 text-white text-lg transition-all ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:opacity-90"
                  }`}
                  style={{ backgroundColor: "#2B7856" }}
                >
                  <span>
                    {isSubmitting
                      ? "Sending..."
                      : submitStatus === "success"
                      ? "Application Sent!"
                      : submitStatus === "error"
                      ? "Try Again"
                      : "Join our team"}
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8M12 8l4 4-4 4" />
                  </svg>
                </button>
              </GridCol>
            </GridContainer>
          </GridSection>
        </div>
      </div>
    </>
  );
};

export default FormSection;