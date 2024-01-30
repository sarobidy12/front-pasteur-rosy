"use client";
import useUser from "@/app/Store/User";
import React from "react";
import style from "../style.module.css";
import { Rowdies } from "next/font/google";
import Error from "@/app/s-inscrire/Error";
import UploadFile from "@/app/Component/UplaodFile/oneFile";
import Redirect from "@/app/Component/Redirect";

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });

const Infomation = () => {
  const { handleChange, onUpdate, loading, info } = useUser();

  return (
    <>
      <Error />
      <div className={style.info}>
        <h1 className={rowdies_.className}>
          <span className="material-symbols-outlined">manage_accounts</span>
          Mes informations
        </h1>

        {info.success && (
          <div className={style.success}>
            <span className="material-symbols-outlined">task_alt</span>
            <p>Les informations ont ete modifier avec succe.</p>
          </div>
        )}
        <div data-aos="zoom-in">
          <UploadFile
            name="img"
            onChange={handleChange}
            path={info?.img || ""}
            folder="user"
            placeHolder="Ajouter une photo de profil"
          />
        </div>

        <form onSubmit={onUpdate}>
          <div data-aos="zoom-in">
            <input
              type="text"
              name="firstName"
              value={info?.firstName || ""}
              onChange={handleChange}
              required={true}
              placeholder="Nom"
            />
          </div>
          <div data-aos="zoom-in">
            <input
              type="text"
              name="lastName"
              value={info?.lastName || ""}
              onChange={handleChange}
              required={true}
              placeholder="Prenom"
            />
          </div>
          <div data-aos="zoom-in">
            <input
              type="text"
              name="email"
              value={info?.email || ""}
              onChange={handleChange}
              required={true}
              disabled={true}
              placeholder="address e-mail"
            />
          </div>
          <div data-aos="zoom-in">
            <input
              type="password"
              name="password1"
              value={info?.password1 || ""}
              onChange={handleChange}
              placeholder="Nouveau mot de passe"
            />
          </div>
          <div data-aos="zoom-in">
            <input
              type="password"
              name="password2"
              value={info?.password2 || ""}
              onChange={handleChange}
              placeholder="Comfirmer votre nouveau mot de passe"
            />
          </div>
          <div data-aos="zoom-in">
            {loading ? (
              <div className="skeleton horizontal" />
            ) : (
              <button type="submit">Modifier</button>
            )}
          </div>
        </form>
        <Redirect />
      </div>
    </>
  );
};

export default Infomation;
