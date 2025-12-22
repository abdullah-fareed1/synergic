"use client";
import React from 'react';
import { ArrowRight, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

// Temporary footer data
const footerData = {
  enterprise: {
    title: "ENTERPRISE",
    links: [
      { label: "Enterprise Platforms & Apps", url: "/enterprise/platforms-apps" },
      { label: "Automations", url: "/enterprise/automations" },
      { label: "Integrations", url: "/enterprise/integrations" },
      { label: "Custom Solutions", url: "/enterprise/custom-solutions" },
      { label: "Startups & SaaS", url: "/enterprise/startups-saas" },
    ],
  },
  ecommerce: {
    title: "ECOMMERCE",
    links: [
      { label: "Composable Commerce", url: "/ecommerce/composable-commerce" },
      { label: "B2C Solutions", url: "/ecommerce/b2c-solutions" },
      { label: "B2B Platforms", url: "/ecommerce/b2b-platforms" },
      { label: "ERP Integrations", url: "/ecommerce/erp-integrations" },
      { label: "PIM Systems", url: "/ecommerce/pim-systems" },
      { label: "Order Management Systems", url: "/ecommerce/order-management" },
    ],
  },
  techAdvantage: {
    title: "TECH ADVANTAGE",
    links: [
      { label: "Fusion Mesh", url: "/tech/fusion-mesh" },
      { label: "Core Technologies", url: "/tech/core-technologies" },
      { label: "Commerce Tech Stack", url: "/tech/commerce-stack" },
    ],
  },
  cases: {
    title: "CASES",
    links: [
      { label: "website development", url: "/cases/website-development" },
      { label: "CMS technology", url: "/cases/cms-technology" },
      { label: "digital marketing", url: "/cases/digital-marketing" },
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
    { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
    { name: "X", icon: "x", url: "https://x.com" },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      {/* Main Footer Section with Beige Background */}
      <div className="bg-[#F3F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {/* Enterprise Column */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-wide">
                {footerData.enterprise.title}
              </h3>
              <ul className="space-y-3">
                {footerData.enterprise.links.map((link, index) => (
                  <li key={index}>
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

            {/* Ecommerce Column */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-wide">
                {footerData.ecommerce.title}
              </h3>
              <ul className="space-y-3">
                {footerData.ecommerce.links.map((link, index) => (
                  <li key={index}>
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

            {/* Tech Advantage Column */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-wide">
                {footerData.techAdvantage.title}
              </h3>
              <ul className="space-y-3">
                {footerData.techAdvantage.links.map((link, index) => (
                  <li key={index}>
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

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-wide">
                {footerData.company.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {footerData.company.links.map((link, index) => (
                  <li key={index}>
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
                className="inline-flex items-center justify-center w-full bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded hover:bg-gray-800 transition-colors group"
              >
                GET IN TOUCH
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 mt-6">
                {footerData.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon === 'facebook' && <Facebook className="w-5 h-5" />}
                    {social.icon === 'instagram' && <Instagram className="w-5 h-5" />}
                    {social.icon === 'x' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {/* Tech Advantage - Mobile */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                {footerData.techAdvantage.title}
              </h3>
              <ul className="space-y-3">
                {footerData.techAdvantage.links.map((link, index) => (
                  <li key={index}>
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

            {/* Cases - Mobile */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                {footerData.cases.title}
              </h3>
              <ul className="space-y-3">
                {footerData.cases.links.map((link, index) => (
                  <li key={index}>
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

            {/* Company - Mobile */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                {footerData.company.title}
              </h3>
              <div className="text-sm text-gray-600 space-y-1 mb-6">
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
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded hover:bg-gray-800 transition-colors group mb-6"
              >
                GET IN TOUCH
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-gray-600">FOLLOW US</span>
                <div className="flex items-center gap-4 ml-4">
                  {footerData.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-600 transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon === 'facebook' && <Facebook className="w-5 h-5" />}
                      {social.icon === 'instagram' && <Instagram className="w-5 h-5" />}
                      {social.icon === 'x' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - White Background */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-xs text-gray-500 order-2 lg:order-1">
            <a href="/privacy-policy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms-of-use" className="hover:text-gray-900 transition-colors">
              Terms of Use
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <Image
              src="/footer-logo.svg"
              alt="Synergic Logo"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          <div className="text-xs text-gray-500 order-3 text-center lg:text-right">
            © 2005 - 2025 Synergic Intelligent Systems. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;