import React from "react";
import Content from "./Content/main";
import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "Enseignement - Rosy Mihigo Mbala",
  description:
    "L'enseignement est le moyen principal par lequel les connaissances sont transmises d'une génération à l'autre. Il permet la préservation et la diffusion des découvertes, des idées et des compétences accumulées au fil du temps.",
  openGraph: {
    title: "Enseignement - Rosy Mihigo Mbala",
    description:
      "L'enseignement est le moyen principal par lequel les connaissances sont transmises d'une génération à l'autre. Il permet la préservation et la diffusion des découvertes, des idées et des compétences accumulées au fil du temps.",
    images: [img("File/seo_/enseignement.png")],
  },
};

const Admin = () => {
  return <Content />;
};

export default Admin;
