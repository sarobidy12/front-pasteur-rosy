"use client";
import React from "react";
import useUser from "@/app/Store/User/index";
import { useRouter } from "next/navigation";
import style from "./style.module.css";
import { Rowdies } from "next/font/google";
import Image from "next/image";
import { img } from "../Utils/img";

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });

const Profil = () => {
  const { info } = useUser();

  const { push } = useRouter();

  // if (!info._id) {
  //   push("/se-connecter");
  // }

  return (
    <div className={style.profil}>
      {info.img ? (
        <>
          <Image
            src={img(info.img)}
            alt={info.lastName}
            width={120}
            height={120}
            data-aos="flip-left"
          />
        </>
      ) : (
        <>
          {info.gender === "homme" ? (
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

      <h2 className={rowdies_.className} data-aos="zoom-in">
        {info.lastName || "NOM"} {info.firstName || "Prenom"}
      </h2>
    </div>
  );
};

export default Profil;
