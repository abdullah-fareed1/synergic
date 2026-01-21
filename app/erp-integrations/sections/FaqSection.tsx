"use client";

import { useState } from "react";

type FaqId = "implementation" | "erp" | "accuracy" | "training";

interface FaqItem {
  id: FaqId;
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<FaqId | null>("implementation");

  const toggleFaq = (id: FaqId) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqData: FaqItem[] = [
    {
      id: "implementation",
      question: "How long does implementation take?",
      answer:
        "Most businesses go live from just a few hours to a few days, depending on the number of suppliers and data sources.",
    },
    {
      id: "erp",
      question: "Do you support custom ERPs?",
      answer:
        "Yes, we support custom ERP integrations. Our flexible API architecture allows us to connect with virtually any ERP system, whether it's a legacy solution or a modern cloud-based platform.",
    },
    {
      id: "accuracy",
      question: "What about data accuracy?",
      answer:
        "Our system maintains 99.9% data accuracy through real-time validation, automated reconciliation, and continuous monitoring. Any discrepancies are flagged immediately for review.",
    },
    {
      id: "training",
      question: "Will my sales team need training?",
      answer:
        "Minimal training is required. Our intuitive interface is designed for ease of use, and most teams are fully operational within a day. We also provide comprehensive onboarding support and documentation.",
    },
  ];

  return (
    <>
      {/* MOBILE VERSION */}
      <section className="lg:hidden">
        <div className="bg-white px-6 py-12">
          <h2 className="text-[25px] font-extrabold mb-8">FAQ</h2>

          <div className="space-y-0">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className={`${index !== faqData.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-[14px] text[#111D2B] font-bold pr-4">
                    Q: {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 shrink-0 transition-transform ${
                      openFaq === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="#000000"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === faq.id && (
                  <div className="pb-5">
                    <p className="text-[12px] text-[#111D2B] leading-relaxed">
                      A: {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#2B7856] text-white px-6 py-12">
          <h2 style={{ fontSize: "25px" }} className="font-extrabold mb-2">
            Ready to automate your ERP?
          </h2>
          <p style={{ fontSize: "18px" }} className="font-normal mb-6">
            Stop reconciling disconnected systems.
          </p>
          <p style={{ fontSize: "14px" }} className="leading-relaxed">
            With <span className="font-bold">Cubik ERP integrations</span>, we
            set up the workflows that automate your back office and commerce
            stack so your business runs as one.
          </p>
        </div>

        <button className="w-full bg-[#418667] text-white px-6 py-5 flex items-center justify-between cursor-pointer">
          <div className="flex flex-col items-start text-left">
            <span className="text-xs opacity-70 mb-1">
              Get Notified When We Launch
            </span>
            <span className="text-base font-normal">
              Join the Early Access List
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shrink-0 ml-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </button>
      </section>

      <div className="hidden lg:block relative">
        <div
          className="absolute left-0 w-[50%] top-0 bottom-0 bg-white"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute left-[50%] right-0 top-0 bottom-0 bg-[#2B7856]"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-300 opacity-30"
          style={{ zIndex: 100 }}
        />
        <div
          className="absolute left-[94.44%] top-0 bottom-0 w-px bg-white opacity-20"
          style={{ zIndex: 100 }}
        />
        <div className="relative flex" style={{ zIndex: 5 }}>
          <div className="w-[5.56%]" />
          <div className="w-[44.44%] px-8 py-16">
            <h2 className="text-4xl font-extrabold mb-10">FAQ</h2>

            <div className="space-y-0">
              {faqData.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`${index !== faqData.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
                  >
                    <span className="text-xl font-semibold pr-4 cursor-pointer">
                      Q: {faq.question}
                    </span>
                    <svg
                      className={`w-7 h-7 shrink-0 transition-transform ${
                        openFaq === faq.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="#000000"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFaq === faq.id && (
                    <div className="pb-5">
                      <p className="text-lg text-black leading-relaxed">
                        A: {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-[44.44%] text-white flex flex-col">
            <div className="flex-1 flex flex-col justify-between py-12">
              <div />
              
              <div className="px-8">
                <h2 className="font-extrabold mb-2" style={{ fontSize: "32px" }}>
                  Ready to automate your ERP?
                </h2>
                <p className="font-normal mb-6" style={{ fontSize: "25px" }}>
                  Stop reconciling disconnected systems.
                </p>
                <p className="leading-relaxed" style={{ fontSize: "18px" }}>
                  With <span className="font-bold">Cubik ERP integrations</span>,
                  we set up the workflows that automate your back office and
                  commerce stack — so your business runs as one.
                </p>
              </div>
              
              <div />
            </div>
            <div className="relative">
              <div
                className="absolute left-0 right-[-5.56vw] top-0 h-px bg-white opacity-30"
              />
              <div
                className="absolute left-0 right-[-5.56vw] bottom-25 h-px bg-white opacity-30"
              />
              <button
                className="w-full h-26.5 flex items-center mb-25 ml-0.5 justify-between px-8 text-white cursor-pointer"
                style={{ backgroundColor: "#418667" }}
              >
                <div className="flex flex-col items-start text-left">
                  <span style={{ fontSize: "16px", opacity: 0.7 }}>
                    Get Notified When We Launch
                  </span>
                  <span style={{ fontSize: "23px" }} className="font-normal">
                    Join the Early Access List
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center shrink-0 ml-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="w-[5.56%]" />
        </div>
      </div>
    </>
  );
};

export default FaqSection;