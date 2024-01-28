"use client";
import React from "react";
import style from "../style.module.css";
import useUser from "@/app/Store/User";
import Error_ from "./Error";

const ForgotPassword: React.FC = () => {
  const { handleChange, onSendMailResetPassowrd, info, loading } = useUser();
  return (
    <>
      <Error_ />
      {info.token ? (
        <div className={style.rootCenter}>
          <div>
            <span className="material-symbols-outlined">mail_lock</span>
          </div>
          <div>
            <p className={style.textComfirm} data-aos="zoom-in">
              Un email a ete envoyer, qui contient les elements pour
              renitialiser votre mot de passe.
            </p>
          </div>
        </div>
      ) : (
        <div className={style.root}>
          <form onSubmit={onSendMailResetPassowrd}>
            <span className="material-symbols-outlined">lock_open</span>
            <p className={style.textComfirm} data-aos="zoom-in">
              Entrer votre address e-mail pour renitialiser votre mot de passe.
            </p>
            <div>
              <input
                data-aos="zoom-in"
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="utilisateur@utilisateur.com"
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
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
