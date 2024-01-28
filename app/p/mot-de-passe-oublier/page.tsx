import React from "react";
import ForgotPassword from "./forgot-password";
import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "Mot de passe oublier - Rosy Mihigo Mbala",
  description:
    "Mot de passe oublié ? Pas de soucis. Utilisez notre fonction de récupération pour réinitialiser votre mot de passe en quelques étapes simples. Fournissez votre adresse e-mail, suivez le lien de réinitialisation que nous vous enverrons, et regagnez rapidement l'accès à votre compte en toute sécurité.",
  openGraph: {
    title: "Mot de passe oublier - Rosy Mihigo Mbala",
    description:
      "Mot de passe oublié ? Pas de soucis. Utilisez notre fonction de récupération pour réinitialiser votre mot de passe en quelques étapes simples. Fournissez votre adresse e-mail, suivez le lien de réinitialisation que nous vous enverrons, et regagnez rapidement l'accès à votre compte en toute sécurité.",
    images: [img("File/seo_/passwordForget.png")],
  },
};

const page = () => {
  return <ForgotPassword />;
};

export default page;
