import React, { useState } from "react";
import styles from "../../styles/Modal.module.css";
import useCart from "@/hooks/UseCart";

type Props = {
  cartModal: boolean;
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ cartModal, setCartModal }: Props) => {
  const { cart } = useCart();
  const [count, setCount] = useState(1);

  const toggleModal = () => {
    setCartModal(!cartModal);
  };

  const increamentCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreamentCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className={`z-[999] ${styles.modal}`}>
      <div onClick={toggleModal} className={`bg-black/40 ${styles.overlay}`} />
      <div
        className={`absolute right-[40px] top-[90px] z-30 mt-3 min-w-56 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5`}
      >
        {/* {cart.length === 0 && (
          <div className="relative rounded-lg p-4 hover:bg-gray-50">
            <a className="block text-sm font-semibold leading-6 text-gray-900">
              Your cart is empty
              <span className="absolute inset-0" />
            </a>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Looks like you haven't added anything to your cart yet
            </p>
          </div>
        )} */}

        {/* {cart.length > 0 && ( */}

        <div>
          {cart &&
            cart.map((item) => (
              <div
                className="flex gap-10 mb-5 justify-between text-black "
                key={item._id}
              >
                <div className="flex gap-2">
                  <img
                    src="/images/dstv.png"
                    alt=""
                    className="h-[50px] w-[50px]"
                  />
                  <div>
                    <div className="font-bold text-sm">{item.name}</div>
                    <div className="text-xs mt-1 text-black/70">
                      NGN {item.price}
                    </div>
                    <div className="text-xs mt-1 text-black/70">
                      +234922113344
                    </div>
                  </div>
                </div>

                <div className="border items-center inline-flex h-[25px] text-sm gap-4 rounded-full px-3">
                  <div
                    className="cursor-pointer font-bold"
                    onClick={decreamentCount}
                  >
                    -
                  </div>
                  <div className="cursor-pointer">{count}</div>
                  <div className="cursor-pointer" onClick={increamentCount}>
                    +
                  </div>
                </div>
              </div>
            ))}
          <hr className="my-5" />
          <div className="flex gap-4">
            <button className=" w-full bg-black/5 rounded-full text-black p-2 text-xs font-medium">
              Keep Shopping
            </button>
            <button className=" w-full rounded-full text-white p-2 text-xs font-medium bg-red">
              Checkout
            </button>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Cart;
