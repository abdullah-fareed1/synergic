"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Image from "next/image";

const WhatYouCanBuildSection = () => {
  return (
    <>
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-[var(--brand-light)]"
        className="py-20"
      >
        <GridContainer className="items-start">
          <GridCol span="A" className="py-8 pr-8">
            <h2 className="text-3xl font-bold text-[var(--brand-dark)] leading-tight mb-4">
              What You Can Build
            </h2>
            <p className="text-gray-600 text-base">
              Tailored platforms for every kind of B2B scenario.
            </p>
          </GridCol>

          <GridCol span="B" className="py-8 px-6 border-l border-gray-300/50">
            <div className="mb-6">
              <Image
                src="/icons/statistic-workflow.svg"
                alt="Wholesale Portal"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-4">
              Wholesale Portal
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
                <span>Company accounts, buyers, and reps with role-based permissions</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
                <span>One-click reordering and automated quote generation</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
                <span>Integrated credit terms and payment processing</span>
              </li>
            </ul>
          </GridCol>

          <GridCol span="C" className="py-8 px-6 border-l border-gray-300/50">
            <div className="mb-6">
              <Image
                src="/icons/inbox-up.svg"
                alt="Distributor & Supplier Platforms"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-4">
              Distributor & Supplier Platforms
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
                <span>Multilingual, multi-brand catalogs with real-time inventory</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
                <span>Product variations and technical specs automatically synced</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
                <span>Full ERP integration for seamless order fulfillment</span>
              </li>
            </ul>
          </GridCol>

          <GridCol span="D" className="py-8 px-6 border-l border-gray-300/50">
            <div className="mb-6">
              <Image
                src="/icons/reorder.svg"
                alt="Mixed B2B/B2C Platforms"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-4">
              Mixed B2B/B2C Platforms
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
                <span>Unified catalogs with separate pricing and checkout logic</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
                <span>Hybrid workflows supporting both business and consumer buyers</span>
              </li>
            </ul>
          </GridCol>
        </GridContainer>

        <div className="absolute left-[5.56%] top-2 text-[var(--brand-red)] text-xl font-light">+</div>
        <div className="absolute left-[27.78%] bottom-8 text-gray-400 text-xl font-light">+</div>
        <div className="absolute left-[72.22%] bottom-8 text-[var(--brand-red)] text-xl font-light">+</div>
      </GridSection>

      <section className="lg:hidden bg-[var(--brand-light)] px-6 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--brand-dark)] leading-tight mb-3">
            What You Can Build
          </h2>
          <p className="text-gray-600 text-base">
            Tailored platforms for every kind of B2B scenario.
          </p>
        </div>

        <div className="mb-10 pb-10 border-b border-gray-300/50">
          <div className="mb-4">
            <Image
              src="/icons/statistic-workflow.svg"
              alt="Wholesale Portal"
              width={36}
              height={36}
            />
          </div>
          <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-4">
            Wholesale Portal
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
              <span>Company accounts, buyers, and reps with role-based permissions</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
              <span>One-click reordering and automated quote generation</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
              <span>Integrated credit terms and payment processing</span>
            </li>
          </ul>
        </div>

        <div className="mb-10 pb-10 border-b border-gray-300/50">
          <div className="mb-4">
            <Image
              src="/icons/inbox-up.svg"
              alt="Distributor & Supplier Platforms"
              width={36}
              height={36}
            />
          </div>
          <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-4">
            Distributor & Supplier Platforms
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
              <span>Multilingual, multi-brand catalogs with real-time inventory</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
              <span>Product variations and technical specs automatically synced</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
              <span>Full ERP integration for seamless order fulfillment</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-4">
            <Image
              src="/icons/reorder.svg"
              alt="Mixed B2B/B2C Platforms"
              width={36}
              height={36}
            />
          </div>
          <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-4">
            Mixed B2B/B2C Platforms
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
              <span>Unified catalogs with separate pricing and checkout logic</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></span>
              <span>Hybrid workflows supporting both business and consumer buyers</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default WhatYouCanBuildSection;