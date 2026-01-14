"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { GridCol, GridContainer, GridSection } from "./grid";

const footer2Data = {
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
  techAdvantage: {
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
    contact: {
      address: "Evalkidou 5 & Liosion Athens 10445",
      phone1: "+30 2114018227",
      phone2: "+30 2105134282",
      email: "info@synergic.gr",
    },
  },
  social: [
    { name: "Facebook", icon: "facebook", url: "https://facebook.com/synergic" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/synergic" },
    { name: "X", icon: "x", url: "https://x.com/synergic" },
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

const Footer2 = () => {
  return (
    <footer className="bg-white">
      <GridSection
        bgColor="bg-[#F3F3EE]"
        showLines={[true, true, true, true, true]}
        desktopOnly={true}
        className="pb-24"
      >
        <GridContainer className="h-40 items-center pt-16">
          <GridCol span="A" className="pl-12">
            <h3 className="text-base font-bold text-gray-900 tracking-wide">
              {footer2Data.solutions.title}
            </h3>
          </GridCol>

          <GridCol span="B" className="pl-12">
            <h3 className="text-base font-bold text-gray-900 tracking-wide">
              {footer2Data.techAdvantage.title}
            </h3>
          </GridCol>

          <GridCol span="C" className="pl-12">
            <h3 className="text-base font-bold text-gray-900 tracking-wide">
              {footer2Data.cases.title}
            </h3>
          </GridCol>

          <GridCol span="D" className="pl-12">
            <h3 className="text-base font-bold text-gray-900 tracking-wide">
              {footer2Data.company.title}
            </h3>
          </GridCol>
        </GridContainer>

        <div className="absolute left-0 right-0 h-px bg-gray-400 opacity-30 z-10 top-40" />

        <GridContainer className="pt-8">
          <GridCol span="A" className="pl-16">
            <ul className="space-y-3">
              {footer2Data.solutions.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-base text-black font-normal hover:text-gray-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </GridCol>

          <GridCol span="B" className="pl-16">
            <ul className="space-y-3">
              {footer2Data.techAdvantage.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-base text-black font-normal hover:text-gray-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </GridCol>

          <GridCol span="C" className="pl-16">
            <ul className="space-y-3">
              {footer2Data.cases.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-base text-black font-normal hover:text-gray-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </GridCol>

          <GridCol span="D">
            <div className="text-base text-black font-normal space-y-3 mb-16 pl-12">
              <p>{footer2Data.company.contact.address}</p>
              <p>{footer2Data.company.contact.phone1}</p>
              <p>{footer2Data.company.contact.phone2}</p>
              <p>
                <a
                  href={`mailto:${footer2Data.company.contact.email}`}
                  className="hover:text-gray-600 transition-colors"
                >
                  {footer2Data.company.contact.email}
                </a>
              </p>
            </div>

            <a
              href="/contact"
              className="flex items-center justify-between bg-gray-900 text-white text-sm font-normal px-6 py-6 hover:bg-gray-800 transition-colors w-full"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </GridCol>
        </GridContainer>
      </GridSection>

      <GridSection
        bgColor="bg-white"
        showLines={[true, true, true, true, true]}
        desktopOnly={true}
      >
        <GridContainer className="items-center h-32">
          <GridCol span="A" className="pl-6">
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
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
              <div>
                <p className="text-xs text-gray-800">
                  © 2005 - {new Date().getFullYear()} Synergic Intelligent Systems.
                </p>
                <p className="text-xs text-gray-800">All rights reserved.</p>
              </div>
            </div>
          </GridCol>

          <GridCol span="BC" className="flex justify-center">
            <img
              src="logos/footer-logo.svg"
              alt="Synergic Logo"
              className="h-16 w-auto"
            />
          </GridCol>

          <GridCol span="D" className="flex items-center justify-center gap-10 pl-6">
            <span className="text-base font-semibold text-black tracking-wide">
              FOLLOW US
            </span>
            <div className="flex items-center gap-8">
              {footer2Data.social.map((social, i) => (
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
                    className="w-8 h-8"
                  />
                </a>
              ))}
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      <section className="lg:hidden bg-[#F3F3EE]">
        <div className="px-6 pt-8 pb-0 space-y-8">
          <FooterLinkList
            title={footer2Data.solutions.title}
            links={footer2Data.solutions.links}
          />

          <FooterLinkList
            title={footer2Data.techAdvantage.title}
            links={footer2Data.techAdvantage.links}
          />

          <FooterLinkList
            title={footer2Data.cases.title}
            links={footer2Data.cases.links}
          />

          <div>
            <h3 className="text-base font-extrabold text-gray-900 mb-4 tracking-wide">
              {footer2Data.company.title}
            </h3>
            <div className="text-base text-black space-y-2">
              <p>{footer2Data.company.contact.address}</p>
              <p>{footer2Data.company.contact.phone1}</p>
              <p>{footer2Data.company.contact.phone2}</p>
              <p>
                <a
                  href={`mailto:${footer2Data.company.contact.email}`}
                  className="hover:text-gray-600 transition-colors"
                >
                  {footer2Data.company.contact.email}
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
            {footer2Data.social.map((social, i) => (
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
            <p>© 2005 - {new Date().getFullYear()} Synergic Intelligent Systems.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer2;