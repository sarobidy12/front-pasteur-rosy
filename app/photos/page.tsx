import React from "react";
import Photo from "./photo";
import type { Metadata } from "next";
import { img } from "@/app/Utils/img";

export const metadata: Metadata = {
  title: "Photo - Rosy Mihigo Mbala",
  description:
    "Traditionnellement, les photos étaient capturées sur des films photographiques, mais aujourd'hui, la plupart sont prises numériquement à l'aide d'appareils photo numériques, de smartphones, ou d'autres dispositifs.",
  openGraph: {
    title: "Photo - Rosy Mihigo Mbala",
    description:
      "Traditionnellement, les photos étaient capturées sur des films photographiques, mais aujourd'hui, la plupart sont prises numériquement à l'aide d'appareils photo numériques, de smartphones, ou d'autres dispositifs.",
    images: [img("File/seo_/photo.png")],
  },
};

const page = () => {
  return (
    <div>
      <Photo />
    </div>
  );
};

export default page;
