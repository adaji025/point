"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is POINTS?",
    answer:
      `POINTS is a leading crypto e-commerce store that allows users to Shop,
      Pay with Crypto and get rewarded for shopping by purchasing digital gift
      cards and phone refills with Bitcoin or crypto. We also offer bill payment in
      specific countries and plan to expand this service to more countries in the 
      future.`
  },

  {
    question: "What cryptocurrencies can I use to shop gift cards?",
    answer:
      "With Points you can purchase gift cards using a variety of cryptocurrencies including Bitcoin, Lightning, Ethereum, USDC, USDT, Binance Pay, Litecoin, Dogecoin or Dash.",
  },
  // More questions...
];

export default function Faq() {
  return (
    <div className="">
      <div className="mx-auto max-w-[1400px]  py-24 sm:py-32  lg:py-40 px-6 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[40%]">
            <h2 className="text-[24px] md:text-[36px] font-bold text-gray-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="flex-1 -mt-4">
            <dl className="gap-6">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-[#A6A7AF]">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
