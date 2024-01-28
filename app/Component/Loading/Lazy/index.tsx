import React from "react";
import style from "./style.module.css";
import Image from "next/image";

const index = () => {
  return (
    <div className={style.root}>
      <Image src="/loading.gif" width={50} height={50} alt="Loaidng lazy" />
    </div>
  );
};

export default index;
