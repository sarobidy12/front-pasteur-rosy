"use client";
import React from "react";
import style from "../../style.module.css";
import useUser from "@/app/Store/User";
import Error_ from "./Error";

interface Props {
  name: string;
  token: string;
}

const ResetPassword: React.FC<Props> = ({ name, token }) => {
  const { handleChange, onResetPassowrd, info, loading } = useUser();
  return (
    <>
      <Error_ />
      <div className={style.root}>
        {info.success ? (
          <div className="flex-column-center">
            <div>
              <span className="material-symbols-outlined">task_alt</span>
            </div>
            <div>
              <p className={style.textComfirm} data-aos="zoom-in">
                Votre mot de passe a bien ete modifier
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={onResetPassowrd(token)}>
            <span className="material-symbols-outlined">key</span>
            <h1 data-aos="zoom-in">{name}</h1>
            <p className={style.textComfirm} data-aos="zoom-in">
              Entrer votre nouveaux mot de passe.
            </p>
            <div>
              <input
                data-aos="zoom-in"
                type="password"
                name="password1"
                onChange={handleChange}
                placeholder="Entrer votre nouveaux mot de passe"
                required={true}
              />
            </div>
            <div>
              <input
                data-aos="zoom-in"
                type="password"
                name="password2"
                onChange={handleChange}
                placeholder="Comfirmer votre nouveaux mot de passe"
                required={true}
              />
            </div>
            {loading ? (
              <div className="skeleton line" />
            ) : (
              <button data-aos="zoom-in" type="submit">
                Réinitialiser{" "}
              </button>
            )}
          </form>
        )}
      </div>
    </>
  );
};

export default ResetPassword;
