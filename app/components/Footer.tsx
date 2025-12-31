"use client";
import React from "react";
import { ArrowRight, Facebook, Instagram } from "lucide-react";

// Temporary footer data
const footerData = {
  enterprise: {
    title: "ENTERPRISE",
    links: [
      {
        label: "Enterprise Platforms & Apps",
        url: "#",
      },
      { label: "Automations", url: "#" },
      { label: "Integrations", url: "#" },
      { label: "Custom Solutions", url: "#" },
      { label: "Startups & SaaS", url: "#" },
    ],
  },
  ecommerce: {
    title: "ECOMMERCE",
    links: [
      { label: "Composable Commerce", url: "#" },
      { label: "B2C Solutions", url: "/b2c" },
      { label: "B2B Platforms", url: "#" },
      { label: "ERP Integrations", url: "#" },
      { label: "PIM Systems", url: "#" },
      { label: "Order Management Systems", url: "#" },
    ],
  },
  techAdvantage: {
    title: "TECH ADVANTAGE",
    links: [
      { label: "Fusion Mesh", url: "/fusionmesh" },
      { label: "Core Technologies", url: "#" },
      { label: "Commerce Tech Stack", url: "#" },
    ],
  },
  cases: {
    title: "CASES",
    links: [
      { label: "website development", url: "#" },
      { label: "CMS technology", url: "#" },
      { label: "digital marketing", url: "#" },
    ],
  },
  company: {
    title: "COMPANY",
    links: [
      { label: "About us", url: "/about" },
      { label: "Career", url: "/career" },
    ],
    contact: {
      address: "Evalkidou 5 & Liosion Athens 10445",
      phone1: "+30 211 444 2500",
      phone2: "+30 2114018227",
      phone3: "+30 2105134282",
      email: "info@synergic.gr",
    },
  },
  social: [
    {
      name: "Facebook",
      icon: "facebook",
      url: "https://facebook.com/synergic",
    },
    {
      name: "Instagram",
      icon: "instagram",
      url: "https://instagram.com/synergic",
    },
    { name: "X", icon: "x", url: "https://x.com/synergic" },
  ],
};

const DesktopGrid = () => (
  <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
    <div className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
    <div className="absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
    <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
    <div className="absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
    <div className="absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white relative">
      {/* beige section*/}
      <div className="bg-[#F3F3EE] relative">
        <DesktopGrid />

        {/* Horizontal line  */}
        <div
          className="hidden lg:block absolute left-0 right-0 h-px bg-gray-400 opacity-30 z-10 mt-5"
          style={{ top: "3rem" }}
        />

        <div className="relative z-20 pt-10 md:pt-10 pb-0 md:pb-8">
          {/* Desktop Layout */}
          <div
            className="hidden lg:block relative"
            style={{ minHeight: "300px" }}
          >
            {/* Enterprise  */}
            <div
              className="absolute pl-2"
              style={{ left: "5.56%", top: "0", width: "20%" }}
            >
              <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-wide">
                {footerData.enterprise.title}
              </h3>
              <ul className="space-y-3">
                {footerData.enterprise.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ecommerce */}
            <div
              className="absolute pl-2"
              style={{ left: "27.78%", top: "0", width: "20%" }}
            >
              <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-wide">
                {footerData.ecommerce.title}
              </h3>
              <ul className="space-y-3">
                {footerData.ecommerce.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Advantage  */}
            <div
              className="absolute pl-2 mb-4"
              style={{ left: "50%", top: "0", width: "20%" }}
            >
              <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-wide">
                {footerData.techAdvantage.title}
              </h3>
              <ul className="space-y-3">
                {footerData.techAdvantage.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company - Column 4 */}
            <div
              className="absolute pl-2"
              style={{ left: "72.22%", top: "0", width: "20%" }}
            >
              <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-wide">
                {footerData.company.title}
              </h3>

              <ul className="space-y-3 mb-2">
                {footerData.company.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="text-sm text-gray-600 space-y-1 mb-6">
                <p>{footerData.company.contact.address}</p>
                <p>{footerData.company.contact.phone1}</p>
                <p>
                  <a
                    href={`mailto:${footerData.company.contact.email}`}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {footerData.company.contact.email}
                  </a>
                </p>
              </div>
              <a
                href="/contact"
                className="flex items-center justify-between bg-gray-900 text-white text-sm font-medium px-6 py-3 hover:bg-gray-800 transition-colors absolute"
                style={{
                  left: 0,
                  width: "22.2vw",
                }}
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-4 mt-6">
                {footerData.social.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    {social.icon === "facebook" && (
                      <Facebook className="w-5 h-5" />
                    )}
                    {social.icon === "instagram" && (
                      <Instagram className="w-5 h-5" />
                    )}
                    {social.icon === "x" && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden px-4 space-y-8">
            {/* Enterprise */}
            <div className="px-4">
              <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                {footerData.enterprise.title}
              </h3>
              <ul className="space-y-2">
                {footerData.enterprise.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Advantage */}
            <div className="px-4">
              <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                {footerData.techAdvantage.title}
              </h3>
              <ul className="space-y-2">
                {footerData.techAdvantage.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cases */}
            <div className="px-4">
              <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                {footerData.cases.title}
              </h3>
              <ul className="space-y-2">
                {footerData.cases.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="px-4">
              <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                {footerData.company.title}
              </h3>
              <div className="text-sm text-gray-600 space-y-2 mb-6">
                <p>{footerData.company.contact.address}</p>
                <p>{footerData.company.contact.phone2}</p>
                <p>{footerData.company.contact.phone3}</p>
                <p>
                  <a
                    href={`mailto:${footerData.company.contact.email}`}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {footerData.company.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Action Button - hidden on desktop */}
          <a
            href="/contact"
            className="lg:hidden flex items-center justify-between w-full bg-gray-900 text-white text-sm font-medium px-6 py-4 hover:bg-gray-800 transition-colors"
          >
            GET IN TOUCH
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Mobile Follow Us Section*/}
      <div className="lg:hidden bg-white px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-900 font-medium">FOLLOW US</p>
          <div className="flex items-center gap-6">
            {footerData.social.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                {social.icon === "facebook" && <Facebook className="w-8 h-8" />}
                {social.icon === "instagram" && (
                  <Instagram className="w-8 h-8" />
                )}
                {social.icon === "x" && (
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/*  Bottom White Section */}
      <div className="bg-white border-t border-gray-200 relative">
        <DesktopGrid />

        {/* Desktop layout */}
        <div className="hidden lg:block relative z-20 h-20">
          {/* Copyright*/}
          <div
            className="absolute top-1/2 -translate-y-1/2 text-xs text-gray-500 pl-2"
            style={{ left: "5.56%" }}
          >
            © 2005 – {new Date().getFullYear()} Synergic Intelligent Systems.
            All rights reserved.
          </div>

          {/* Center logo  */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
            style={{ left: "50%" }}
          >
            <img
              src="logos/footer-logo.svg"
              alt="Synergic Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Privacy nd Terms*/}
          <div
            className="absolute top-1/2 -translate-y-1/2 flex items-center gap-4 text-xs text-gray-500 pl-2"
            style={{ left: "72.22%" }}
          >
            <a
              href="/privacy-policy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="/terms-of-use"
              className="hover:text-gray-900 transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>

        {/* Mobile layout*/}
        <div className="lg:hidden relative z-20 px-4 py-6 flex flex-col items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <a
              href="/privacy-policy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="/terms-of-use"
              className="hover:text-gray-900 transition-colors"
            >
              Terms of Use
            </a>
          </div>

          <div className="text-center">
            <div>
              © 2005 – {new Date().getFullYear()} Synergic Intelligent Systems.
            </div>
            <div>All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
