import { urlApi } from "@/app/Utils/api";
import React, { FC } from "react";
import Image from "next/image";
import { img } from "@/app/Utils/img";
import PreviewRenderer from "@/app/Component/Html";
import type { Metadata, ResolvingMetadata } from "next";
import style from "./style.module.css";
import Share from "@/app/Component/share";
import Redirect from "@/app/Component/Redirect";

interface Props {
  params: { id: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // fetch data
  const current = await fetch(`${urlApi}/discover/${params.id}`).then((res) =>
    res.json()
  );

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
  const fetching = await fetch(`${urlApi}/discover/${params.id}`, {
    cache: "no-store",
  });

  const currentLive = await fetching.json();

  return (
    <div>
      <Redirect />
      <div className="head">
        <div className="container">
          <div className={style.contentImg}>
            <Image
              src={img(currentLive.path)}
              alt={currentLive.title}
              fill={true}
            />
          </div>
        </div>
      </div>
      <div className="container m-t-5 m-b-10">
        <h1 className={style.title}>{currentLive.title}</h1>
        <div className={style.content}>
          <PreviewRenderer data={currentLive.description} />
        </div>
        <Share />
      </div>
    </div>
  );
};

export default page;
