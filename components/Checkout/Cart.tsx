import React from "react";
import styles from "../../styles/Modal.module.css";

type Props = {
  cartModal: boolean;
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ cartModal, setCartModal }: Props) => {
  const toggleModal = () => {
    setCartModal(!cartModal);
  };

  return (
    <div className={`z-[999] ${styles.modal}`}>
      <div onClick={toggleModal} className={`bg-black/40 ${styles.overlay}`} />
      <div
        className={`absolute right-[40px] top-[90px] z-30 mt-3 w-56 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5`}
      >
        <div className="relative rounded-lg p-4 hover:bg-gray-50">
          <a className="block text-sm font-semibold leading-6 text-gray-900">
            Your cart is empty
            <span className="absolute inset-0" />
          </a>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Looks like you haven't added anything to your cart yet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
