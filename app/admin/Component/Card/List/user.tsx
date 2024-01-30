import React from "react";
import Image from "next/image";
import style from "./style.module.css";
import { img } from "@/app/Utils/img";

interface Props {
  name: string;
  link: string;
  gender: string;
  onClick: (e: any) => void;
}

const User: React.FC<Props> = ({ link, name, gender, onClick }) => {
  return (
    <div className={style.cardHorizontal} onClick={onClick}>
      {link ? (
        <>
          <Image src={img(link)} width={50} height={50} alt={name} />
        </>
      ) : (
        <>
          {gender === "homme" ? (
            <span className="material-symbols-outlined" data-aos="zoom-in">
              face
            </span>
          ) : (
            <span className="material-symbols-outlined" data-aos="zoom-in">
              face_3
            </span>
          )}
        </>
      )}
      <p className={style.titleHozontal}>{name}</p>
    </div>
  );
};

export default User;
