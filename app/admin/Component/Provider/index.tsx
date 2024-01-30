"use client";
import { useRef, useState } from "react";
import style from "./style.module.css";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [connected, setConnected] = useState(false);
  const ref: any = useRef();

  const onSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (ref.current.value.trim() === "1234@") {
      setConnected(true);
    }
  };
  return (
    <>
      {connected ? (
        <div>{children}</div>
      ) : (
        <div className={style.root}>
          <form onSubmit={onSubmit} className="flex-column-center">
            <h2>
              <span className="material-symbols-outlined">passkey</span>
            </h2>
            <input type="password" name="password" ref={ref} />
            <button className="btn-admin">Se connecter</button>
          </form>
        </div>
      )}
    </>
  );
}
