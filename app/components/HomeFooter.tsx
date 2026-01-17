"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { GridCol, GridContainer, GridSection } from "./grid";

const footerData = {
  enterprise: {
    title: "ENTERPRISE",
    links: [
      { label: "Enterprise Platforms & Apps", url: "#" },
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
  solutions: {
    title: "SOLUTIONS",
    links: [
      { label: "eshop design & construction", url: "#" },
      { label: "why Synergic", url: "#" },
      { label: "marketing", url: "#" },
      { label: "eshop software", url: "#" },
      { label: "eshop hosting", url: "#" },
    ],
  },
  mobileTechAdvantage: {
    title: "TECH ADVANTAGE",
    links: [
      { label: "application software", url: "#" },
      { label: "application interface", url: "#" },
      { label: "data transfer", url: "#" },
      { label: "mobile & responsive applications", url: "#" },
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
    { name: "Facebook", icon: "facebook", url: "#" },
    { name: "Instagram", icon: "instagram", url: "#" },
    { name: "X", icon: "x", url: "#" },
  ],
};

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: { label: string; url: string }[];
}) {
  return (
    <div>
      <h3 className="text-base font-extrabold text-gray-900 mb-4 tracking-wide">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.url}
              className="text-base text-black hover:text-gray-600 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const HomeFooter = () => {
  return (
    <footer className="bg-white">
      <GridSection
        bgColor="bg-[#F3F3EE]"
        showLines={[true, true, true, true, true]}
        desktopOnly={true}
        className="pb-8"
      >
        <GridContainer className="h-24 items-center pt-4">
          <GridCol span="A" className="pl-4">
            <h3 className="text-sm font-bold text-gray-900 tracking-wide">
              {footerData.enterprise.title}
            </h3>
          </GridCol>

          <GridCol span="B" className="pl-4">
            <h3 className="text-sm font-bold text-gray-900 tracking-wide">
              {footerData.ecommerce.title}
            </h3>
          </GridCol>

          <GridCol span="C" className="pl-4">
            <h3 className="text-sm font-bold text-gray-900 tracking-wide">
              {footerData.techAdvantage.title}
            </h3>
          </GridCol>

          <GridCol span="D" className="pl-4">
            <h3 className="text-sm font-bold text-gray-900 tracking-wide">
              {footerData.company.title}
            </h3>
          </GridCol>
        </GridContainer>

        <div className="absolute left-0 right-0 h-px bg-gray-400 opacity-30 z-10 top-24" />

        <GridContainer className="pt-8">
          <GridCol span="A" className="pl-4">
            <ul className="space-y-3">
              {footerData.enterprise.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-sm text-black font-semibold hover:text-gray-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </GridCol>

          <GridCol span="B" className="pl-4">
            <ul className="space-y-3">
              {footerData.ecommerce.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-sm text-black font-semibold hover:text-gray-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </GridCol>

          <GridCol span="C" className="pl-4">
            <ul className="space-y-3">
              {footerData.techAdvantage.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-sm text-black font-semibold hover:text-gray-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </GridCol>

          <GridCol span="D">
            <ul className="space-y-3 mb-6 pl-4">
              {footerData.company.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-sm text-black font-semibold hover:text-gray-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="text-sm text-black space-y-1 mb-6 pl-4">
              <p>{footerData.company.contact.address}</p>
              <p>{footerData.company.contact.phone1}</p>
              <p>
                <a
                  href={`mailto:${footerData.company.contact.email}`}
                  className="hover:text-gray-600 transition-colors"
                >
                  {footerData.company.contact.email}
                </a>
              </p>
            </div>

            <a
              href="/contact"
              className="flex items-center justify-between bg-gray-900 text-white text-sm font-medium px-6 py-4 hover:bg-gray-800 transition-colors w-full"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-6 mt-6 pl-4">
              {footerData.social.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 transition-colors"
                >
                  <img
                    src={`/icons/${social.icon}.svg`}
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection
        bgColor="bg-white"
        showLines={[true, true, true, true, true]}
        desktopOnly={true}
        className="border-t border-gray-200"
      >
        <GridContainer className="items-center h-20">
          <GridCol span="A" className="pl-4">
            <p className="text-xs text-gray-500">
              © 2005 – {new Date().getFullYear()} Synergic Intelligent Systems.
              All rights reserved.
            </p>
          </GridCol>

          <GridCol span="BC" className="flex justify-center">
            <img
              src="logos/footer-logo.svg"
              alt="Synergic Logo"
              className="h-12 w-auto"
            />
          </GridCol>

          <GridCol span="D" className="flex items-center gap-4 text-xs text-gray-500 pl-4">
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
          </GridCol>
        </GridContainer>
      </GridSection>

      <section className="lg:hidden bg-[#F3F3EE]">
        <div className="px-6 pt-8 pb-0 space-y-8">
          <FooterLinkList
            title={footerData.solutions.title}
            links={footerData.solutions.links}
          />

          <FooterLinkList
            title={footerData.mobileTechAdvantage.title}
            links={footerData.mobileTechAdvantage.links}
          />

          <FooterLinkList
            title={footerData.cases.title}
            links={footerData.cases.links}
          />

          <div>
            <h3 className="text-base font-extrabold text-gray-900 mb-4 tracking-wide">
              {footerData.company.title}
            </h3>
            <div className="text-base text-black space-y-2">
              <p>{footerData.company.contact.address}</p>
              <p>{footerData.company.contact.phone2}</p>
              <p>{footerData.company.contact.phone3}</p>
              <p>
                <a
                  href={`mailto:${footerData.company.contact.email}`}
                  className="hover:text-gray-600 transition-colors"
                >
                  {footerData.company.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <a
          href="/contact"
          className="flex items-center justify-between w-full bg-gray-900 text-white text-sm font-medium px-6 py-6 mt-8 hover:bg-gray-800 transition-colors"
        >
          <span>GET IN TOUCH</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>

      <section className="lg:hidden bg-white px-6 py-5">
        <div className="flex items-center justify-start gap-8">
          <p className="text-sm text-black font-semibold tracking-wide">
            FOLLOW US
          </p>
          <div className="flex items-center gap-6">
            {footerData.social.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                <img
                  src={`/icons/${social.icon}.svg`}
                  alt={social.name}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="lg:hidden w-full h-px bg-gray-300" />

      <section className="lg:hidden bg-white px-6 py-4">
        <div className="flex flex-col items-center gap-2 text-xs text-gray-500">
          <div className="flex items-center gap-2">
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
            <p>© 2005 – {new Date().getFullYear()} Synergic Intelligent Systems.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default HomeFooter;