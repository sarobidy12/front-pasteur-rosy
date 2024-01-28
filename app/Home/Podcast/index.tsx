"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import AudioPlayer from "@/app/Component/Audio";
import { urlApi } from "@/app/Utils/api";
import { img } from "@/app/Utils/img";
import { Rowdies } from "next/font/google";

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });

const Podcast = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [podcast, setPodcast] = useState<any>({});

  const getFavoriteAlbum = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(`${urlApi}/podcast/lastedPodcast`, {
        cache: "no-store",
      });
      const response: any = await fetching.json();
      setPodcast(response);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFavoriteAlbum();
  }, []);

  return (
    <>
      <div>
        <h1 className={`${styles.title_podcast} ${rowdies_.className}`}>
          <span className="material-symbols-outlined">headphones</span>
          Le dernier Podcast
        </h1>
      </div>
      <div className={styles.root_podcast}>
        <div className={styles.imageContainer}>
          {loading ? (
            <div className="skeleton scare" />
          ) : (
            <Image
              src={img(podcast?.urlImg)}
              alt={podcast?.title}
              fill={true}
              data-aos="flip-down"
            />
          )}
        </div>
        <div className={styles.textContainer}>
          {loading ? (
            <>
              <div className="skeleton horizontal" />
              <br />
              <div className="skeleton line" />
            </>
          ) : (
            <div data-aos="flip-up">
              <AudioPlayer
                audioSrc={img(podcast?.urlUpload)}
                title={podcast?.title}
                description={podcast?.seoDescription}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Podcast;
