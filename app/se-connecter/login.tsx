"use client";
import React from "react";
import style from "./style.module.css";
import useUser from "../Store/User";
import { Rowdies } from "next/font/google";
import Link from "next/link";
import Error_ from "./Error";

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });

const Login: React.FC = () => {
  const { handleChange, onLogin, loading } = useUser();
  return (
    <>
      <div className={style.root}>
        <form onSubmit={onLogin}>
          <span data-aos="zoom-in" className="material-symbols-outlined">
            account_circle
          </span>
          <h1 className={rowdies_.className} data-aos="zoom-in">
            Se connecter
          </h1>
          <input
            data-aos="zoom-in"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Address e-mail"
            disabled={loading}
          />
          <input
            data-aos="zoom-in"
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={handleChange}
            disabled={loading}
          />
          <p data-aos="zoom-in">
            Pas encore de compte ?{" "}
            <Link href="/s-inscrire">S&apos;incrire</Link>
          </p>
          <p data-aos="zoom-in">
            Mot de passe oublié ?{" "}
            <Link href="/p/mot-de-passe-oublier">Réinitialiser</Link>
          </p>
          {loading ? (
            <div className="skeleton line" />
          ) : (
            <button data-aos="zoom-in" type="submit">
              Se connecter
            </button>
          )}
        </form>
      </div>
      <Error_ />
    </>
  );
};

export default Login;
