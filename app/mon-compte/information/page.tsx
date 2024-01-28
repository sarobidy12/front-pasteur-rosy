import React from "react";
import Information from "./information";
import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "Mes information - Rosy Mihigo Mbala",
  description:
    "Accédez facilement à votre espace personnel avec notre fonction 'Mon compte'. Connectez-vous, gérez vos informations, consultez l'historique de vos activités et profitez d'une expérience personnalisée. Simplifiez la gestion de votre compte en quelques clics",
  openGraph: {
    title: "Mes information - Rosy Mihigo Mbala",
    description:
      "Accédez facilement à votre espace personnel avec notre fonction 'Mon compte'. Connectez-vous, gérez vos informations, consultez l'historique de vos activités et profitez d'une expérience personnalisée. Simplifiez la gestion de votre compte en quelques clics",
    images: [img("File/seo_/account.png")],
  },
};

const page = () => {
  return (
    <div className="m-b-10">
      <Information />
    </div>
  );
};

export default page;
