import React, { FC } from "react";
import style from "./style.module.css";
import { urlApi } from "@/app/Utils/api";
import Image from "next/image";
import { img } from "@/app/Utils/img";
import PreviewRenderer from "@/app/Component/Html";
import type { Metadata, ResolvingMetadata } from "next";
import Share from "@/app/Component/share";

interface Props {
  params: { title: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // fetch data
  const current = await fetch(
    `${urlApi}/teaching/findyText?title=${params.title}`
  ).then((res) => res.json());

  return {
    title: current.title,
    description: current.seoDescription,
    openGraph: {
      title: current.title,
      description: current.seoDescription,
      images: [img(current.path)],
    },
  };
}

const page: FC<Props> = async ({ params }) => {
  const fetching = await fetch(
    `${urlApi}/teaching/findyText?title=${params.title}`,
    { cache: "no-store" }
  );

  const currentLive = await fetching.json();
    return (
    <>
      <div className="head">
        <div className="container">
          <div className={style.contentImg}>
            {currentLive.linkVideo ? (
              <iframe
                src={currentLive.linkVideo.replace(
                  "https://youtu.be",
                  "https://www.youtube.com/embed"
                )}
                className={style.iframe}
                title="YouTube video player"
                allow="accelerometer; 
    autoplay; 
    clipboard-write; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture; 
    web-share"
              ></iframe>
            ) : (
              <Image
                src={img(currentLive.path)}
                alt={currentLive.title}
                fill={true}
              />
            )}
          </div>
          <Share />
        </div>
      </div>
      <div className="container">
        <h1 className={style.title}>{currentLive.title}</h1>
        <div className={style.content}>
          <PreviewRenderer data={currentLive.description} />
        </div>
      </div>
    </>
  );
};

export default page;
