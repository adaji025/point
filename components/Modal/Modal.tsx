"use client";

import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import styles from "../../styles/Modal.module.css";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Modal = ({ children, title }: Props) => {
  const [modal, setModal] = React.useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add(styles.active_modal);
  } else {
    document.body.classList.remove(styles.active_modal);
  }

  return (
    <>
      {modal && (
        <div className={`z-[999] ${styles.modal}`}>
          <div onClick={toggleModal} className={`bg-black/80 ${styles.overlay}`} />
          <div className={styles.modal_content}>
            <h2 className="font-bold">{title}</h2>
            <div>{children}</div>
            <button className={`absolute top-2 right-2`} onClick={toggleModal}>
              <XCircleIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
