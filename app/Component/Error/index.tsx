"use client";
import React, { ReactNode, FC } from "react";
import style from "./style.module.css";

interface IError {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Error: FC<IError> = ({ open, children, onClose }) => {
  if (!open) {
    return;
  }

  return (
    <div className={style.error}>
      <span className="material-symbols-outlined">warning</span>
      {children}
      <button className={style.btn} onClick={onClose}>Fermer</button>
    </div>
  );
};

export default Error;
