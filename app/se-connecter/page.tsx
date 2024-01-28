import React from "react";
import Login from "./login";
import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "Se connecter - Rosy Mihigo Mbala",
  description:
    "Une fois connecté, vous aurez accès aux fonctionnalités de votre compte, que ce soit pour consulter des informations, partager des contenus, effectuer des achats, ou toute autre action spécifique au service.",
  openGraph: {
    title: "Se connecter - Rosy Mihigo Mbala",
    description:
      "Une fois connecté, vous aurez accès aux fonctionnalités de votre compte, que ce soit pour consulter des informations, partager des contenus, effectuer des achats, ou toute autre action spécifique au service.",
    images: [img("File/seo_/login.png")],
  },
};

const LoginComponent: React.FC = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginComponent;
