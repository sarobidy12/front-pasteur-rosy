import React from "react";
import Image from "next/image";
import { img } from "@/app/Utils/img";
import style from "./style.module.css";

interface Props {
  title: string;
  path: string;
  time: string;
  onclick?: (e: any) => void;
}

const card: React.FC<Props> = ({ title, path, time, onclick }) => {
  return (
    <div className={style.cardAdmin} onClick={onclick}>
      <div className={style.cardAdminImg}>
        <Image src={img(path)} alt={title} fill={true} />
      </div>
      <div>
        <h2 className={style.title}>{title}</h2>
      </div>
      <div className={style.time}>{time}</div>
    </div>
  );
};

export default card;
