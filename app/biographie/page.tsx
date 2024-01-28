import React from "react";
import Content from "./content";
import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "Biography - Rosy Mihigo Mbala",
  description:
    "Une biographie est un récit écrit qui offre une description détaillée de la vie d'une personne. Elle couvre généralement divers aspects tels que les expériences personnelles, les réussites, les défis et les événements significatifs. Les biographies visent à fournir des informations sur le caractère, les valeurs et les contributions d'un individu à la société.",
  openGraph: {
    title: "Biography - Rosy Mihigo Mbala",
    description:
      "Une biographie est un récit écrit qui offre une description détaillée de la vie d'une personne. Elle couvre généralement divers aspects tels que les expériences personnelles, les réussites, les défis et les événements significatifs. Les biographies visent à fournir des informations sur le caractère, les valeurs et les contributions d'un individu à la société.",
    images: [img("File/seo_/biography.png")],
  },
};

const page = () => {
  return <Content />;
};

export default page;
