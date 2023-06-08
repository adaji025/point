import React from 'react'

const HowItWorks = () => {
  return (
    <div className="mt-10">
        <span className="font-bold text-[24px] sm:text-[42px] block">
          How gift cards work
        </span>
        <div className="mt-5 flex flex-col sm:flex-row gap-6">
          <div className="sm:w-1/3">
            <div className="w-full bg-white shadow-sm border rounded-[12px] h-[200px]"></div>
            <div className="mt-3">
              <h2 className="text-[24px] font-semibold">Enter the amount</h2>
              <p className="text-black/70">
                Select or type the amount you want the card to have.
              </p>
            </div>
          </div>
          <div className="sm:w-1/3">
            <div className="w-full bg-white shadow-sm border rounded-[12px] h-[200px]"></div>
            <div className="mt-3">
              <h2 className="text-[24px] font-semibold">Pay with your preferred coin</h2>
              <p className="text-black/70">
                Your payment is confirmed the same minute in most cases.
              </p>
            </div>
          </div>
          <div className="sm:w-1/3">
            <div className="w-full bg-white shadow-sm border rounded-[12px] h-[200px]"></div>
            <div className="mt-3">
              <h2 className="text-[24px] font-semibold">That's it, ready to use it!</h2>
              <p className="text-black/70">
                Redeem your card at your chosen retailer according to their
                instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HowItWorks
