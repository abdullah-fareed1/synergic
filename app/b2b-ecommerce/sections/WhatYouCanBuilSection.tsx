"use client";

import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Image from "next/image";

const WhatYouCanBuildSection = () => {
  return (
    <>
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-(--brand-white)"
        className="py-20 pb-28 relative"
      >
        <GridContainer className="items-stretch">
          <GridCol span="A" className="py-8 pl-4 pr-8 flex flex-col justify-start pt-8">
            <div className="h-10 mb-6"></div>
            <h2 className="text-3xl font-extrabold text-(--brand-dark) leading-tight mb-4">
              What You Can Build
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              Tailored platforms for every<br />
              kind of B2B scenario.
            </p>
          </GridCol>

          <GridCol span="B" className="py-8 px-6 border-l border-gray-300/50">
            <div className="h-10 mb-6 flex items-center">
              <Image
                src="/icons/statistic-workflow.svg"
                alt="Wholesale Portal"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-(--brand-dark) mb-5">
              Wholesale Portal
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Company accounts, buyers, and reps<br />with role-based permissions</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>One-click reordering and automated<br />quote generation</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Integrated credit terms and payment<br />processing</span>
              </li>
            </ul>
          </GridCol>

          <GridCol span="C" className="py-8 px-6 border-l border-gray-300/50">
            <div className="h-10 mb-6 flex items-center">
              <Image
                src="/icons/inbox-up.svg"
                alt="Distributor & Supplier Platforms"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-(--brand-dark) mb-5">
              Distributor & Supplier Platforms
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Multilingual, multi-brand catalogs with<br />real-time inventory</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Product variations and technical specs<br />automatically synced</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Full ERP integration for seamless order<br />fulfillment</span>
              </li>
            </ul>
          </GridCol>

          <GridCol span="D" className="py-8 px-6 border-l border-gray-300/50">
            <div className="h-10 mb-6 flex items-center">
              <Image
                src="/icons/reorder.svg"
                alt="Mixed B2B/B2C Platforms"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-(--brand-dark) mb-5">
              Mixed B2B/B2C Platforms
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Unified catalogs with separate pricing<br />and checkout logic</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Hybrid workflows supporting both<br />business and consumer buyers</span>
              </li>
            </ul>
          </GridCol>
        </GridContainer>

        <div className="absolute left-0 right-0 bottom-3 h-px bg-gray-300/50 w-full"></div>
        <div className="absolute left-[27.78%] bottom-3 text-(--brand-black) text-4xl font-light -translate-x-1/2 translate-y-1/2 leading-none flex items-center justify-center">+</div>
        <div className="absolute left-[72.22%] bottom-3 text-(--brand-red) text-4xl font-light -translate-x-1/2 translate-y-1/2 leading-none flex items-center justify-center ">+</div>
      </GridSection>

      <section className="lg:hidden bg-(--brand-white) py-8">
        <div className="px-6 mb-8">
          <h2 className="text-2xl font-extrabold text-(--brand-dark) leading-tight mb-3">
            What You Can Build
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Tailored platforms for every kind of<br />B2B scenario.
          </p>
        </div>

        <div className="border-t border-gray-300/50">
          <div className="px-6 py-8">
            <div className="h-9 mb-4 flex items-center">
              <Image
                src="/icons/statistic-workflow.svg"
                alt="Wholesale Portal"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-(--brand-dark) mb-4">
              Wholesale Portal
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Company accounts, buyers, and reps with<br />role-based permissions</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>One-click reordering and automated<br />quote generation</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Integrated credit terms and payment<br />processing</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300/50">
          <div className="px-6 py-8">
            <div className="h-9 mb-4 flex items-center">
              <Image
                src="/icons/inbox-up.svg"
                alt="Distributor & Supplier Platforms"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-(--brand-dark) mb-4">
              Distributor & Supplier Platforms
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Multilingual, multi-brand catalogs with real-<br />time inventory</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Product variations and technical specs<br />automatically synced</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Full ERP integration for seamless order<br />fulfillment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300/50">
          <div className="px-6 py-8">
            <div className="h-9 mb-4 flex items-center">
              <Image
                src="/icons/reorder.svg"
                alt="Mixed B2B/B2C Platforms"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-(--brand-dark) mb-4">
              Mixed B2B/B2C Platforms
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Unified catalogs with separate pricing and<br />checkout logic</span>
              </li>
              <li className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span>Hybrid workflows supporting both<br />business and consumer buyers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatYouCanBuildSection;