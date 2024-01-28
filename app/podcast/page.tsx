import React from "react";
import Main from "./main";
import Podcast from "./Podcast";
import { urlApi } from "@/app/Utils/api";
import { img } from "@/app/Utils/img";
import type { Metadata, ResolvingMetadata } from "next";

interface Props {
  searchParams: any;
}

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  if (searchParams.title) {
    const current = await fetch(
      `${urlApi}/podcast/findbyTitle?title=${searchParams.title}`
    ).then((res) => res.json());
    return {
      title: current.title,
      description: current.seoDescription,
      openGraph: {
        title: current.title,
        description: current.seoDescription,
        images: [img(current.urlImg)],
      },
    };
  }

  return {
    title: "Podcast - Rosy Mihigo Mbala",
    description:
      "Découvrez un trésor rare de connaissances dans notre podcast exclusif. Des enseignements rares, des expertises pointues et des idées qui transcendent : plongez dans l&apos;exceptionnel, disponible seulement ici.",
    openGraph: {
      title: "Podcast - Rosy Mihigo Mbala",
      description:
        "Découvrez un trésor rare de connaissances dans notre podcast exclusif. Des enseignements rares, des expertises pointues et des idées qui transcendent : plongez dans l&apos;exceptionnel, disponible seulement ici.",
      images: [img("File/seo_/podcast.png")],
    },
  };
}

const Admin = () => {
  return (
    <div>
      <Podcast />
      <Main />
    </div>
  );
};

export default Admin;
