import React from "react";
import Main from "./Content/main";
import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "Des témoignages de vie avec Jésus - Rosy Mihigo Mbala",
  description:
    "Les témoignages de vie avec Jésus sont des récits personnels où des individus partagent leurs expériences spirituelles, leurs rencontres avec Jésus-Christ et l'impact que cela a eu sur leur vie. Ces témoignages varient grandement, reflétant la diversité des expériences spirituelles des personnes. Voici quelques exemples généraux de témoignages de vie avec Jésus.",
  openGraph: {
    title: "Des témoignages de vie avec Jésus - Rosy Mihigo Mbala",
    description:
      "Les témoignages de vie avec Jésus sont des récits personnels où des individus partagent leurs expériences spirituelles, leurs rencontres avec Jésus-Christ et l'impact que cela a eu sur leur vie. Ces témoignages varient grandement, reflétant la diversité des expériences spirituelles des personnes. Voici quelques exemples généraux de témoignages de vie avec Jésus.",
    images: [img("File/seo_/lifeWithJesus.png")],
  },
};

const Admin = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default Admin;
