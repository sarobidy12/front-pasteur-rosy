"use client";
import React from "react";
import style from "./style.module.css";
import useUser from "../Store/User";
import { Rowdies } from "next/font/google";
import Error_ from "./Error";
import Link from "next/link";

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });

const Sign: React.FC = () => {
  const { handleChange, onRegister, info, onComfirm, loading } = useUser();
  return (
    <>
      <Error_ />
      <div className={style.root}>
        {info.code ? (
          <form onSubmit={onRegister}>
            <p className={style.textComfirm} data-aos="zoom-in">
              Un code comfirmation a ete envoyer{" "}
              <b className={rowdies_.className}>{info.email}</b>
            </p>
            <div>
              <input
                data-aos="zoom-in"
                type="text"
                name="codeInput"
                onChange={handleChange}
                placeholder="####"
              />
            </div>
            {loading ? (
              <div className="skeleton line" />
            ) : (
              <button data-aos="zoom-in" type="submit">
                S&lsquo;inscire
              </button>
            )}
          </form>
        ) : (
          <form onSubmit={onComfirm}>
            <div data-aos="zoom-in">
              <span className="material-symbols-outlined">
                connect_without_contact
              </span>
            </div>
            <div data-aos="zoom-in">
              <h1 className={rowdies_.className}>S&apos;incrire</h1>
            </div>
            <p data-aos="zoom-in">Vous ete ?</p>
            <div className="flex-row-center">
              <div className={style.radio} data-aos="zoom-in">
                <input
                  type="radio"
                  required={true}
                  id="Homme"
                  name="gender"
                  value="homme"
                  onChange={handleChange}
                />
                <label htmlFor="Homme">Homme</label>
              </div>
              <div className={style.radio} data-aos="zoom-in">
                <input
                  type="radio"
                  required={true}
                  id="Femme"
                  name="gender"
                  value="homme"
                  onChange={handleChange}
                />
                <label htmlFor="Femme">Femme</label>
              </div>
            </div>
            <input
              required={true}
              type="text"
              name="firstName"
              placeholder="Nom"
              onChange={handleChange}
              data-aos="zoom-in"
            />
            <input
              required={true}
              type="text"
              name="lastName"
              placeholder="Prenom"
              onChange={handleChange}
              data-aos="zoom-in"
            />
            <input
              required={true}
              type="email"
              name="email"
              placeholder="Address e-mail"
              onChange={handleChange}
              data-aos="zoom-in"
            />
            <input
              required={true}
              type="password"
              name="password1"
              placeholder="Mot de passe"
              onChange={handleChange}
              data-aos="zoom-in"
            />
            <input
              required={true}
              type="password"
              name="password2"
              placeholder="Comfirmer le mot de passe"
              onChange={handleChange}
              data-aos="zoom-in"
            />
            <div className={style.cgu} data-aos="zoom-in">
              <input
                required={true}
                type="checkbox"
                id="cgu"
                name="gender"
                value="true"
              />
              <label htmlFor="cgu">
                Veuillez cliquer sur le lien ci-dessous pour accepter les{" "}
                <Link href="/condition-general-utilisation">CGU</Link>
              </label>
            </div>
            <div data-aos="zoom-in">
              {loading ? (
                <div className="skeleton line" />
              ) : (
                <button data-aos="zoom-in" type="submit">
                  S&lsquo;inscire
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Sign;
