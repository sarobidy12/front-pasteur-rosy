"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { DM_Serif_Display, Rowdies } from "next/font/google";
import { urlApi } from "@/app/Utils/api";

const DM_Serif_Display_ = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const Quote = () => {
  const [close, setClose] = useState(false);
  const [quote, setQuote] = useState<any>({});

  const getSpeackOfDay = async () => {
    try {
      const fetching = await fetch(`${urlApi}/wordOfDay`, {
        cache: "no-store",
      });
      const response: any = await fetching.json();
      setQuote(response);
      setClose(true);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSpeackOfDay();
  }, []);

  const handleClose = () => setClose(false);

  if (!close) {
    return;
  }

  return (
    <div className={style.containter}>
      <h2>Parole du jour</h2>
      <p className={DM_Serif_Display_.className}>{quote?.content}</p>
      <b>{quote?.verse}</b>
      <br />
      <button onClick={handleClose}>Fermer</button>
    </div>
  );
};

export default Quote;
