import React from "react";
import style from "../style.module.css";

const loading = () => {
  return (
    <div className={style.info}>
      <div className="container m-b-10">
        <div className="skeleton horizontal" />
        <br />
        <div className="skeleton line" />
        <br />
        <div className="skeleton line" />
        <br />
        <div className="skeleton line" />
        <br />
        <div className="skeleton line" />
      </div>
    </div>
  );
};

export default loading;
