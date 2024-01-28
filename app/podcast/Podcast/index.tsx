"use client";
import { urlApi } from "@/app/Utils/api";
import React, { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import AudioPlayer from "@/app/Component/Audio";
import { img } from "@/app/Utils/img";
import style from "./style.module.css";
import Image from "next/image";

const Podcast: FC = React.memo(function Podcast({}) {
  const searchParams = useSearchParams();

  const [current, setCurrent] = useState<any>({});
  const [loading, setLoading] = useState<any>(false);

  const search = searchParams.get("title");

  const getData = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(
        `${urlApi}/podcast/findbyTitle?title=${search}`,
        {
          cache: "no-store",
        }
      );
      const format = await fetching.json();
      setCurrent(format);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      getData();
    }
  }, [search]);

  if (!search) {
    return <></>;
  }

  return (
    <div className={style.root}>
      <div className={style.contentImg}>
        {loading ? (
          <div className="skeleton scare" />
        ) : (
          <Image src={img(current.urlImg)} fill={true} alt={current.title} />
        )}
      </div>
      <div>
        {loading ? (
          <div>
            <div className="skeleton horizontal" />
            <br />
            <div className="skeleton line" />
          </div>
        ) : (
          <AudioPlayer
            audioSrc={img(current.urlUpload)}
            title={current.title}
            description={current.seoDescription}
          />
        )}
      </div>
    </div>
  );
});

export default Podcast;
