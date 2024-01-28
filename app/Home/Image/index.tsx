"use client";
import React, { useEffect, useState } from "react";
import { Rowdies } from "next/font/google";
import { urlApi } from "@/app/Utils/api";
import style from "./style.module.css";
import { img } from "@/app/Utils/img";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/photos/loading";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });

const ImageCompognent = () => {
  const [listImg, setListImg] = useState<any>([]);
  const [listAlbum, setListAlbum] = useState<any>([]);
  const [albumSetlected, setAlbumSetlected] = useState("");
  const [loadingAlbum, setLoadingAlum] = useState(false);
  const [loadingImg, setLoadingImg] = useState(false);
  const [indexSelected, setIindexSelected] = useState(0);

  const handleAlbum = (album: string) => (e: any) => setAlbumSetlected(album);

  const getFavoriteAlbum = async () => {
    setLoadingAlum(true);
    try {
      const fetching = await fetch(`${urlApi}/album?favorite=true`, {
        cache: "no-store",
      });
      const response: any = await fetching.json();
      setAlbumSetlected(response[0].name);
      setListAlbum(response);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingAlum(false);
    }
  };
  const getImageByAlbum = async (album: string) => {
    setLoadingImg(true);
    try {
      const fetching = await fetch(`${urlApi}/picture?album=${album}`, {
        cache: "no-store",
      });
      const response: any = await fetching.json();
      setListImg(response);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingImg(false);
    }
  };

  useEffect(() => {
    getFavoriteAlbum();
  }, []);

  useEffect(() => {
    if (albumSetlected) {
      getImageByAlbum(albumSetlected);
    }
  }, [albumSetlected]);

  const handleIndexStart = (index: number) => (e: any) => {
    document.querySelectorAll("._ZTBlf").forEach(function (element: any) {
      if (element) {
        element.click();
      }
    });
    setIindexSelected(index);
  };

  return (
    <div className={style.containter}>
      <h2 className={`${style.title} ${rowdies_.className}`}>
        <span className="material-symbols-outlined">image</span>
        Les photos
      </h2>
      <div>
        {loadingAlbum ? (
          <div className={style.AlbumInside}>
            <div className="skeleton chip" />
            <div className="skeleton chip" />
            <div className="skeleton chip" />
            <div className="skeleton chip" />
            <div className="skeleton chip" />
          </div>
        ) : (
          <div className={style.AlbumInside}>
            {listAlbum.map((x: any, index: number) => (
              <button
                className={`display-inline ${
                  albumSetlected === x.name ? style.active : ""
                }`}
                key={index}
                onClick={handleAlbum(x.name)}
              >
                {albumSetlected === x.name && (
                  <span className="material-symbols-outlined">star</span>
                )}
                {x.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {loadingImg ? (
        <Loading />
      ) : (
        <>
          {listImg.map((x: any, index: number) => (
            <div key={index} className={style.listImage} data-aos="flip-left">
              <Image
                src={`${img(x.path)}`}
                alt={x.name}
                fill={true}
                onClick={handleIndexStart(index)}
              />
            </div>
          ))}
          <div className="flex-row-center">
            <Link className={style.link} href="/photos">
              Voir toute les photos
            </Link>
          </div>
        </>
      )}

      {listImg.length && (
        <div className={style.carousel}>
          <Carousel
            images={listImg.map((x: any) => {
              return {
                src: img(x.path),
              };
            })}
            shouldLazyLoad={true}
            index={indexSelected}
            playIcon={false}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCompognent;
