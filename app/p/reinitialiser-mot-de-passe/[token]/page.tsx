import React, { FC } from "react";
import { urlApi } from "@/app/Utils/api";
import ResetPassword from "./reset-password";
import style from "../../style.module.css";

import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "Reinitialiser mot de passe - Rosy Mihigo Mbala",
  description:
    "Réinitialisez votre mot de passe en toute simplicité. Suivez notre procédure de récupération sécurisée, saisissez votre adresse e-mail, recevez un lien de réinitialisation, et choisissez un nouveau mot de passe. Garantissez la sécurité de votre compte en quelques étapes faciles",
  openGraph: {
    title: "Reinitialiser mot de passe - Rosy Mihigo Mbala",
    description:
      "Réinitialisez votre mot de passe en toute simplicité. Suivez notre procédure de récupération sécurisée, saisissez votre adresse e-mail, recevez un lien de réinitialisation, et choisissez un nouveau mot de passe. Garantissez la sécurité de votre compte en quelques étapes faciles",
    images: [img("File/seo_/passwordForget.png")],
  },
};

interface Props {
  params: { token: string };
}

const page: FC<Props> = async ({ params }) => {
  const fetching = await fetch(`${urlApi}/user/getInfo`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${params.token}` },
  });

  const response = await fetching.json();

  if (response.err) {
    return (
      <div className={style.rootCenter}>
        <div>
          <span className="material-symbols-outlined">emergency_home</span>
        </div>
        <div>
          <p className={style.textComfirm} data-aos="zoom-in">
            Une erreur est survenue, Veuillier reessayer.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className={style.rootCenter}>
      <ResetPassword
        name={`${response.user.firstName.toUpperCase()} ${
          response.user.lastName
        }`}
        token={params.token}
      />
    </div>
  );
};

export default page;
