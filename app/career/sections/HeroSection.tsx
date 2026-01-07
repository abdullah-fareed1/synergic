"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";
import Navbar from "../components/Navbar";
import MobileMenu from "../../components/MobileMenu";

export default function CareerHeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Employee images array
  const employees = Array.from({ length: 13 }, (_, i) => `/images/employees/${i + 1}.webp`);

  // Stripe pattern for brand-dark background
  const stripePatternDark =
    "linear-gradient(45deg, #1a2a3a 8.33%, #111D2B 8.33%, #111D2B 50%, #1a2a3a 50%, #1a2a3a 58.33%, #111D2B 58.33%, #111D2B 100%)";
  
  const stripeSize = "6.00px 6.00px";

  return (
    <>
      {/*  MOBILE VERSION */}
      <section className="lg:hidden">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        {/* Mobile Hero */}
        <div
          className="relative px-6 pt-24 pb-12 text-center"
          style={{
            backgroundColor: "var(--brand-dark)",
            background: "radial-gradient(ellipse at center, #233A53 0%, var(--brand-dark) 70%)",
          }}
        >
          <span className="text-white text-xs font-medium uppercase tracking-[0.2em]">
            SYNERGIC CAREERS
          </span>

          <h1 className="text-white text-3xl font-extrabold leading-tight mt-4">
            <span className="inline">
              <span className="underline decoration-(--brand-red) decoration-2 underline-offset-4">Work</span> Together,{" "}
              <span className="underline decoration-(--brand-red) decoration-2 underline-offset-4">Win</span> Together
            </span>
          </h1>

          <p className="text-gray-300 text-sm leading-relaxed mt-4">
            At Synergic, we believe that collaboration is the key to long-term success — with our clients, our partners, and our people.
          </p>

          {/* Mobile Employee Photos Grid */}
          <div className="relative mt-8 h-[300px]">
            {/* Row 1 */}
            <div className="absolute left-0 top-0 w-[80px] h-[100px]">
              <img src={employees[0]} alt="Employee" className="w-full h-full object-cover" />
            </div>
            <div className="absolute left-[90px] top-[20px] w-[80px] h-[100px]">
              <img src={employees[1]} alt="Employee" className="w-full h-full object-cover" />
            </div>
            <div className="absolute right-[90px] top-[10px] w-[80px] h-[100px]">
              <img src={employees[2]} alt="Employee" className="w-full h-full object-cover" />
            </div>
            <div className="absolute right-0 top-0 w-[80px] h-[100px]">
              <img src={employees[3]} alt="Employee" className="w-full h-full object-cover" />
            </div>

            {/* Row 2 */}
            <div className="absolute left-[20px] top-[110px] w-[80px] h-[100px]">
              <img src={employees[4]} alt="Employee" className="w-full h-full object-cover" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[90px] w-[100px] h-[120px]">
              <img src={employees[5]} alt="Employee" className="w-full h-full object-cover" />
            </div>
            <div className="absolute right-[20px] top-[110px] w-[80px] h-[100px]">
              <img src={employees[6]} alt="Employee" className="w-full h-full object-cover" />
            </div>

            {/* Row 3 */}
            <div className="absolute left-[50px] bottom-0 w-[80px] h-[100px]">
              <img src={employees[7]} alt="Employee" className="w-full h-full object-cover" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[10px] w-[80px] h-[100px]">
              <img src={employees[8]} alt="Employee" className="w-full h-full object-cover" />
            </div>
            <div className="absolute right-[50px] bottom-0 w-[80px] h-[100px]">
              <img src={employees[9]} alt="Employee" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Mobile Section 2 - Headings */}
        <div className="bg-(--brand-dark) px-6 py-10">
          <div className="mb-10">
            <h2 className="text-white text-2xl font-extrabold">How We Collaborate</h2>
            <p className="text-gray-300 text-sm mt-2">
              Whether you're a client, a teammate, or a partner, here's what you can expect.
            </p>
          </div>

          {/* Mobile 4 Items Grid */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div>
              <span className="text-(--brand-red) text-xs font-medium">01</span>
              <h3 className="text-white text-base font-bold mt-1">Accountability</h3>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                We take ownership of our work, our timelines, and our impact and stand by our commitments.
              </p>
            </div>
            <div>
              <span className="text-(--brand-red) text-xs font-medium">02</span>
              <h3 className="text-white text-base font-bold mt-1">Mutual Benefit</h3>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                Collaboration should create value for everyone involved that's when it truly works.
              </p>
            </div>
            <div>
              <span className="text-(--brand-red) text-xs font-medium">03</span>
              <h3 className="text-white text-base font-bold mt-1">Approachability</h3>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                We stay open, responsive, and transparent because real progress needs honest conversations.
              </p>
            </div>
            <div>
              <span className="text-(--brand-red) text-xs font-medium">04</span>
              <h3 className="text-white text-base font-bold mt-1">Continuous Learning</h3>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                Improvement isn't a phase it's a mindset. We evolve by learning and adapting every day.
              </p>
            </div>
          </div>

          {/* Mobile People & Technologies */}
          <div className="border-t border-gray-400/30 pt-10">
            <h2 className="text-white text-2xl font-extrabold">People & Technologies</h2>
            <p className="text-gray-300 text-sm mt-2">
              We're problem-solvers at heart engineers, designers, and analysts united by curiosity and care for craft.
            </p>

            <p className="text-gray-300 text-sm mt-6">At Synergic, you'll work with:</p>

            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-(--brand-red) mt-1.5 shrink-0"></span>
                <span className="text-gray-300 text-sm">Forward-thinking clients solving real business challenges</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-(--brand-red) mt-1.5 shrink-0"></span>
                <span className="text-gray-300 text-sm">A modular tech stack that evolves as fast as you do</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-(--brand-red) mt-1.5 shrink-0"></span>
                <span className="text-gray-300 text-sm">A global network of top-tier experts across disciplines</span>
              </li>
            </ul>
          </div>
        </div>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </section>

      {/*DESKTOP VERSION*/}
      <div className="hidden lg:block">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />

        <div
          className="relative"
          style={{
            backgroundColor: "var(--brand-dark)",
            background: "radial-gradient(ellipse at center, #233A53 0%, var(--brand-dark) 70%)",
          }}
        >
          {/* Grid lines layer - behind images */}
          <div className="absolute inset-0 z-0">
            <GridSection
              showLines={[true, true, true, true, true]}
              bgColor="bg-transparent"
              minHeight="100%"
            >
              <GridContainer className="h-full">
                <GridCol span="ABCD" className="h-full">{null}</GridCol>
              </GridContainer>
            </GridSection>
          </div>

          {/* Content layer - above grid lines */}
          <div className="relative z-10">
            {/* Spacer for navbar */}
            <div style={{ height: "5.56vw" }} />

            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center text-center pt-16 pb-8">
              <span className="text-white text-lg uppercase">
                SYNERGIC CAREERS
              </span>

              <h1 className="text-white text-5xl xl:text-5xl font-extrabold leading-tight mt-6">
                <span className="underline decoration-(--brand-red) decoration-4 underline-offset-8">Work</span> Together,{" "}
                <span className="underline decoration-(--brand-red) decoration-4 underline-offset-8">Win</span> Together
              </h1>

              <p className="text-gray-300 text-lg max-w-xl mt-6 leading-relaxed">
                At Synergic, we believe that collaboration is the key to long-term success — with our clients, our partners, and our people.
              </p>

              <button
                className="mt-8 flex items-center justify-between w-65 px-8 py-4 rounded-full text-white text-base font-normal transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--brand-red)" }}
              >
                <span>Join our team</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8M12 8l4 4-4 4" />
                </svg>
              </button>
            </div>

            {/* Employee Photos */}
            {/* 
              Container: 91vw
              Image: 9.5vw
              Height: 11.8vw
              Column spacing: 10.1vw
            */}
            <div className="relative h-[36vw] w-full -mt-[6.1vw]">
              {/* Centered container */}
              <div className="absolute left-1/2 -translate-x-1/2 w-[91vw] h-full">
              
              {/* Column 1 (leftmost) - 2 images */}
              <div className="absolute left-[0vw] top-[0vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[0]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="absolute left-[0vw] top-[12.5vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[1]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* Column 2 - 2 images */}
              <div className="absolute left-[10.1vw] top-[3.4vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[2]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="absolute left-[10.1vw] top-[15.9vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[3]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* Column 3 - 1 image */}
              <div className="absolute left-[20.2vw] top-[8.1vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[4]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* Column 4 - 1 image */}
              <div className="absolute left-[30.3vw] top-[12.2vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[5]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* Column 5 (center) - 1 image */}
              <div className="absolute left-[40.4vw] top-[9.5vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[6]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* Column 6 - 1 image */}
              <div className="absolute left-[50.5vw] top-[12.2vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[7]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* Column 7 - 1 image */}
              <div className="absolute left-[60.6vw] top-[8.1vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[8]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* Column 8 - 2 images */}
              <div className="absolute left-[70.7vw] top-[3.4vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[9]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="absolute left-[70.7vw] top-[15.9vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[10]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* Column 9 (rightmost) - 2 images */}
              <div className="absolute left-[80.8vw] top-[0vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[11]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="absolute left-[80.8vw] top-[12.5vw] w-[9.5vw] h-[11.8vw]">
                <img src={employees[12]} alt="Employee" className="w-full h-full object-cover rounded-lg" />
              </div>
              </div>
            </div>
          </div>
        </div>

        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-[var(--brand-dark)]"
          minHeight="auto"
        >
          <GridContainer>
            <GridCol span="AB" className="pt-32 pb-10 pl-8 pr-8">
              <h2 className="text-white text-4xl font-extrabold">How We Collaborate</h2>
              <p className="text-gray-300 text-2xl mt-6 leading-relaxed">
                Whether you're a client, a teammate, or a partner,<br />
                here's what you can expect.
              </p>
            </GridCol>

            <GridCol span="CD" className="pt-32 pb-10 pl-20 pr-8 border-gray-400/30">
              <h2 className="text-white text-4xl font-extrabold">People & Technologies</h2>
              <p className="text-gray-300 text-2xl mt-6 leading-relaxed">
                We're problem-solvers at heart engineers, designers, and<br />
                analysts united by curiosity and care for craft.
              </p>
            </GridCol>
          </GridContainer>
        </GridSection>

        <GridSection
          showLines={[true, true, true, true, true]}
          bgColor="bg-[var(--brand-dark)]"
          minHeight="auto"
        >
          <GridContainer className="mb-10">
            <GridCol span="A" className="flex flex-col">
              <div className="py-8 pl-8 pr-4">
                <span className="text-(--brand-red) text-base font-medium">01</span>
                <h3 className="text-white text-lg font-bold mt-2">Accountability</h3>
                <p className="text-gray-400 text-lg mt-3 leading-relaxed">
                  We take ownership of our work, our<br/> timelines, and our impact and stand by<br/> our commitments.
                </p>
              </div>

              <div 
                className="relative py-8 pl-8 pr-4 border-t border-gray-400/30 flex-1"
              >
                <div 
                  className="absolute inset-0 left-0.5 -bottom-10"
                  style={{
                    backgroundImage: stripePatternDark,
                    backgroundSize: stripeSize,
                  }}
                />
                <div className="relative z-10">
                  <span className="text-(--brand-red) text-base font-medium">03</span>
                  <h3 className="text-white text-lg font-bold mt-2">Approachability</h3>
                  <p className="text-gray-400 text-lg mt-3 leading-relaxed">
                    We stay open, responsive, and<br/> transparent because real progress needs<br/> honest conversations.
                  </p>
                </div>
              </div>
            </GridCol>

            <GridCol span="B" className="flex flex-col ">
              <div className="py-8 pl-8 pr-4">
                <span className="text-(--brand-red) text-base font-medium">02</span>
                <h3 className="text-white text-lg font-bold mt-2">Mutual Benefit</h3>
                <p className="text-gray-400 text-lg mt-3 leading-relaxed">
                  Collaboration should create value<br/> for everyone involved that's when it<br/> truly works.
                </p>
              </div>

              <div className="py-8 pl-8 pr-4 ">
                <span className="text-(--brand-red) text-base font-medium">04</span>
                <h3 className="text-white text-lg font-bold mt-2">Continuous Learning</h3>
                <p className="text-gray-400 text-lg mt-3 leading-relaxed">
                  Improvement isn't a phase it's a<br/> mindset. We evolve by learning and<br/> adapting every day.
                </p>
              </div>
            </GridCol>

            <GridCol span="CD" className="py-8 pl-20 ">
              <p className="text-gray-300 text-xl">At Synergic, you'll work with:</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-(--brand-red) mt-2 shrink-0"></span>
                  <span className="text-gray-300 text-lg">Forward-thinking clients solving real business challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-(--brand-red) mt-2 shrink-0"></span>
                  <span className="text-gray-300 text-lg">A modular tech stack that evolves as fast as you do</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-(--brand-red) mt-2 shrink-0"></span>
                  <span className="text-gray-300 text-lg">A global network of top-tier experts across disciplines</span>
                </li>
              </ul>
            </GridCol>
          </GridContainer>
        </GridSection>

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
    </>
  );
}