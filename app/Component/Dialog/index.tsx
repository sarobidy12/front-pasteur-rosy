// src/components/Modal.js
"use client";
import { FC, ReactNode } from "react";
import styles from "./style.module.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  middleWidth?: boolean;
  fullWidth?: boolean;
  littleWidth?: boolean;
}

const Modal: FC<Props> = ({
  open,
  children,
  onClose,
  fullWidth,
  middleWidth,
  littleWidth = true,
}) => {
  // if (!open) {
  //   return;
  // }

  return (
    <>
      <div
        className={`${styles.modal} ${open ? styles.show : ""} ${
          middleWidth ? styles.middleWidh : ""
        }
        ${fullWidth ? styles.fullWidh : ""}
        ${littleWidth ? styles.littleWidth : ""}
        `}
      >
        <label
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close Modal"
        ></label>
        {children}
      </div>
      {open && !fullWidth && (
        <div className={styles.modalBg} onClick={onClose} />
      )}
    </>
  );
};

export default Modal;
