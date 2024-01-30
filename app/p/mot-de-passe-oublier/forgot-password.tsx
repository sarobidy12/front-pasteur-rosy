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
      <div className={style.root}>
        {info.token ? (
          <div className="flex-column-center">
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
              <div className="skeleton chip" />
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

export default ForgotPassword;
