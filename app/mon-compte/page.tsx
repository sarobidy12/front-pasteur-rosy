import React from "react";
import Profil from "./profil";
import Link from "next/link";
import style from "./style.module.css";
import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "Mon compte - Rosy Mihigo Mbala",
  description:
    "Accédez facilement à votre espace personnel avec notre fonction 'Mon compte'. Connectez-vous, gérez vos informations, consultez l'historique de vos activités et profitez d'une expérience personnalisée. Simplifiez la gestion de votre compte en quelques clics",
  openGraph: {
    title: "Mon compte - Rosy Mihigo Mbala",
    description:
      "Accédez facilement à votre espace personnel avec notre fonction 'Mon compte'. Connectez-vous, gérez vos informations, consultez l'historique de vos activités et profitez d'une expérience personnalisée. Simplifiez la gestion de votre compte en quelques clics",
    images: [img("File/seo_/account.png")],
  },
};

const page = () => {
  return (
    <div className={style.root}>
      <Profil />
      <Link href="/mon-compte/a-decouvrire" data-aos="zoom-in">
        <span className="material-symbols-outlined">psychology_alt</span>
        Decouvrire
      </Link>
      <Link href="/mon-compte/chat" data-aos="zoom-in">
        <span className="material-symbols-outlined">forum</span>
        Chat
      </Link>
      <Link href="/mon-compte/information" data-aos="zoom-in">
        <span className="material-symbols-outlined">manage_accounts</span>
        Mes informations
      </Link>
      <Link href="/mon-compte/poser-des-questions" data-aos="zoom-in">
        <span className="material-symbols-outlined">person_raised_hand</span>
        Poser un question Au pasteur
      </Link>
    </div>
  );
};

export default page;
