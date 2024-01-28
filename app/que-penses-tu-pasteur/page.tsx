import React from "react";
import Content from "./Content/main";
import Dialog from "./Dialog";
import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "Que penses-tu pasteur - Rosy Mihigo Mbala",
  description:
    "Que penses-tu? est une invitation à partager tes pensées, opinions ou réflexions sur un sujet donné. Cela sert à demander à quelqu'un de partager son point de vue ou ses sentiments sur une question spécifique.",
  openGraph: {
    title: "Que penses-tu pasteur - Rosy Mihigo Mbala",
    description:
      "Que penses-tu? est une invitation à partager tes pensées, opinions ou réflexions sur un sujet donné. Cela sert à demander à quelqu'un de partager son point de vue ou ses sentiments sur une question spécifique.",
    images: [img("File/seo_/thinking.png")],
  },
};

const Admin = () => {
  return (
    <div>
      <Content />
      <Dialog />
    </div>
  );
};

export default Admin;
