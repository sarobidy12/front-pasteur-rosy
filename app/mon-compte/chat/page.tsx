import React from "react";
import Content from "./Content/main";
import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "Posez des questions - Rosy Mihigo Mbala",
  description:
    "Posez des questions et obtenez des réponses pertinentes. Explorez notre plateforme pour poser des questions sur divers sujets, échanger des connaissances et bénéficier de perspectives variées. Une communauté prête à partager son savoir vous attend.",
  openGraph: {
    title: "Posez des questions - Rosy Mihigo Mbala",
    description:
      "Posez des questions et obtenez des réponses pertinentes. Explorez notre plateforme pour poser des questions sur divers sujets, échanger des connaissances et bénéficier de perspectives variées. Une communauté prête à partager son savoir vous attend.",
    images: [img("File/seo_/askQuestion.png")],
  },
};

const page = () => {
  return <Content />;
};

export default page;
