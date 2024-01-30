// src/components/Modal.js
"use client";
import { FC, ReactNode, useEffect } from "react";
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
  useEffect(() => {
    if (open) {
      document.getElementById("admin").style.overflow = "hidden";
    }

    return () => {
      document.getElementById("admin").style.overflow = "auto";
    };
  }, [open]);

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
