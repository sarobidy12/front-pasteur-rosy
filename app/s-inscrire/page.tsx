import React from "react";
import Sign from "./sign";
import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "S'inscrire - Rosy Mihigo Mbala",
  description:
    "Après avoir validé votre inscription, vous pouvez vous connecter à votre nouveau compte en utilisant les identifiants que vous avez créés.",
  openGraph: {
    title: "S'inscrire - Rosy Mihigo Mbala",
    description:
      "Après avoir validé votre inscription, vous pouvez vous connecter à votre nouveau compte en utilisant les identifiants que vous avez créés.",
    images: [img("File/seo_/sign.png")],
  },
};

const Sinscrire: React.FC = () => {
  return (
    <div>
      <Sign />
    </div>
  );
};

export default Sinscrire;
