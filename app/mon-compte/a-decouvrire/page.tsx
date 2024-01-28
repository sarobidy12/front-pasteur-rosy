import React from "react";
import Content from "./Content/main";
import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "À découvrir - Rosy Mihigo Mbala",
  description:
    "Découvrez un univers captivant avec notre section 'À découvrir'. Explorez des contenus variés, des informations intéressantes et des expériences uniques. Plongez dans la diversité et enrichissez votre curiosité en explorant nos suggestions soigneusement sélectionnées.",
  openGraph: {
    title: "À découvrir - Rosy Mihigo Mbala",
    description:
      "Découvrez un univers captivant avec notre section 'À découvrir'. Explorez des contenus variés, des informations intéressantes et des expériences uniques. Plongez dans la diversité et enrichissez votre curiosité en explorant nos suggestions soigneusement sélectionnées.",
    images: [img("File/seo_/discover.png")],
  },
};

const page = () => {
  return (
    <>
      <Content />
    </>
  );
};

export default page;
