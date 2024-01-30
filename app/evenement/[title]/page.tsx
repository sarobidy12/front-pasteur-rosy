import React, { FC } from "react";
import { urlApi } from "@/app/Utils/api";
import PreviewRenderer from "@/app/Component/Html";
import Map from "@/app/Component/GoogleMap";
import style from "./style.module.css";
import Chip from "@/app/Component/Card/Event/chip";
import { Rowdies } from "next/font/google";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { img } from "@/app/Utils/img";
import Share from "@/app/Component/share";

interface Props {
  params: { title: string };
}

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // fetch data
  const current = await fetch(
    `${urlApi}/event/filterByTitle?title=${params.title}`
  ).then((res) => res.json());

  return {
    title: current.title,
    description: current.shortDescription,
    openGraph: {
      title: current.title,
      description: current.shortDescription,
      images: [img(current.path)],
    },
  };
}
const Evenement: FC<Props> = async ({ params }) => {
  const resp = await fetch(
    `${urlApi}/event/filterByTitle?title=${params.title}`,
    {
      cache: "no-store",
    }
  );

  const currentEvent = await resp.json();
  return (
    <div className="container m-b-10">
      <div className={style.root}>
        <Chip date={currentEvent.date} />
        <h1
          className={`${style.title} ${rowdies_.className}`}
          data-aos="fade-left"
        >
          {currentEvent.title}
        </h1>
        <PreviewRenderer
          data={currentEvent.description}
          data-aos="fade-right"
        />
        {currentEvent.live && (
          <Link href={currentEvent.live} target="_blank" className={style.live}>
            Participer au live
          </Link>
        )}
        {currentEvent.place && (
          <Map place={currentEvent.place} data-aos="flip-right" />
        )}
        <Share />
      </div>
    </div>
  );
};

export default Evenement;
