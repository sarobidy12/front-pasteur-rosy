"use client";
import React from "react";
import style from "./style.module.css";

const Index = () => {
  return (
    <div className={style.scrollContainer}>
      <div className={style.grid}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
          (x: any, index: number) => (
            <div
              key={index}
              className={`skeleton scare ${style.itemCardLoading}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Index;
