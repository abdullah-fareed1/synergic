"use client";

import { useState } from "react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const faqData = [
  {
    question: "How quickly can we implement OMS?",
    answer:
      "Most businesses are live from just a few days to a few weeks, depending on channels and integrations.",
  },
  {
    question: "Can it handle our fulfillment centers?",
    answer:
      "Yes, our OMS seamlessly integrates with multiple fulfillment centers, warehouses, and 3PL providers. You can manage inventory across all locations from a single dashboard.",
  },
  {
    question: "How do you handle returns and exchanges?",
    answer:
      "Our system provides a complete returns management workflow, including automated RMA generation, refund processing, and inventory restocking. Customers can initiate returns through a self-service portal.",
  },
  {
    question: "How do we track staff activity?",
    answer:
      "The OMS includes comprehensive activity logging and reporting. You can track order processing times, user actions, and performance metrics for your entire team.",
  },
  {
    question: "Can we sync ERP-originated orders?",
    answer:
      "Absolutely. Our platform supports bi-directional sync with major ERP systems, allowing orders created in your ERP to flow into the OMS and vice versa.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <GridSection
        showLines={[true, true, true, true, true]}
        bgColor="bg-white"
        desktopOnly={true}
      >
        <GridContainer className="flex-col">
          <div className="w-full flex">
            <GridCol span="A">
              <></>
            </GridCol>
            <GridCol span="BC" className=" pt-16 pb-7">
              <h2
                className="text-center font-extrabold"
                style={{ fontSize: "36px", color: "#111D2B" }}
              >
                FAQ
              </h2>
            </GridCol>
            <GridCol span="D">
              <></>
            </GridCol>
          </div>
        </GridContainer>
      </GridSection>

      <div
        className="hidden lg:block w-full"
        style={{ height: "1px", backgroundColor: "#E5E5E5" }}
      />

      <div className="hidden lg:block relative">
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{
            left: "27.78%",
            width: "1px",
            backgroundColor: "#E5E5E5",
            zIndex: 50,
          }}
        />

        <GridSection
          showLines={[true, false, true, true, true]}
          bgColor="bg-white"
          desktopOnly={false}
        >
          <GridContainer className="flex-col">
            <div className="w-full flex">
              <GridCol span="A">
                <></>
              </GridCol>
              <GridCol span="BC" className="py-0">
                {faqData.map((faq, index) => {
                  const isLast = index === faqData.length - 1;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div key={index} className="relative">
                      <div
                        className="cursor-pointer transition-colors duration-200 flex items-center justify-between"
                        style={{
                          backgroundColor: isOpen ? "var(--brand-light)" : "var(--brand-white)",
                          padding: "24px",
                          minHeight: "70px",
                        }}
                        onClick={() => toggleFaq(index)}
                      >
                        <span
                          className="font-bold"
                          style={{
                            fontSize: "17px",
                            color: "#111D2B",
                          }}
                        >
                          {isOpen ? "" : "Q: "}{faq.question}
                        </span>
                        <span
                          className="transition-transform duration-200 shrink-0 ml-4"
                          style={{
                            color: isOpen ? "var(--brand-red)" : "#111D2B",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                      </div>

                      {isOpen && (
                        <>
                          <div
                            style={{
                              height: "1px",
                              backgroundColor: "#E5E5E5",
                            }}
                          />
                          <div
                            style={{
                              backgroundColor: "var(--brand-light)",
                              padding: "20px 24px",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "15px",
                                color: "#111D2B",
                                lineHeight: "1.6",
                                 maxWidth: "34vw"
                              }}
                            >
                              A: {faq.answer}
                            </p>
                          </div>
                        </>
                      )}

                      {!isLast && (
                        <div
                          style={{
                            height: "1px",
                            backgroundColor: "#E5E5E5",
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </GridCol>
              <GridCol span="D">
                <></>
              </GridCol>
            </div>
          </GridContainer>
        </GridSection>

        <div
          className="w-full"
          style={{
            height: "1px",
            backgroundColor: "#E5E5E5",
          }}
        />

        <div
          className="w-full bg-white"
          style={{ height: "7vh" }}
        />
      </div>

      <section className="lg:hidden bg-white px-6 py-10">
        <h2
          className="font-extrabold mb-6"
          style={{ fontSize: "25px", color: "#111D2B" }}
        >
          FAQ
        </h2>

        <div>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b"
              style={{ borderColor: "#E5E5E5" }}
            >
              <div
                className="cursor-pointer py-4"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="font-extrabold"
                    style={{
                      fontSize: "14px",
                      color: "#111D2B",
                      lineHeight: "1.4",
                    }}
                  >
                    {openIndex === index ? "" : "Q: "}{faq.question}
                  </span>
                  <span
                    className="transition-transform duration-200 shrink-0 mt-0.5"
                    style={{
                      color: openIndex === index ? "var(--brand-red)" : "#111D2B",
                      transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>

                {openIndex === index && (
                  <p
                    className="mt-2"
                    style={{
                      fontSize: "12px",
                      color: "#111D2B",
                      lineHeight: "1.5",
                    }}
                  >
                    A: {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FaqSection;