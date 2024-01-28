"use client";
import React, { FC, memo, useState } from "react";
import style from "../style.module.css";
import Image from "next/image";

// eslint-disable-next-line react/prop-types

interface Props {
  handleSend: (e: any) => void;
}

const MessageInput: FC<Props> = memo(({ handleSend }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setMessage("");
    handleSend(message);
  };

  return (
    <div className={style.input}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Votre message"
          onChange={handleChange}
          value={message}
        />
        <button type="submit" disabled={!message}>
          <span className="material-symbols-outlined">send</span>
        </button>
      </form>
    </div>
  );
});

export default MessageInput;
