"use client";
import React, { useEffect, useState } from "react";
import { urlApi } from "@/app/Utils/api";
import style from "./style.module.css";
import { img } from "@/app/Utils/img";
import Image from "next/image";
import Loading from "./loading";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const ImageCompognent = () => {
  const [listImg, setListImg] = useState<any>([]);
  const [listAlbum, setListAlbum] = useState<any>([]);
  const [albumSetlected, setAlbumSetlected] = useState("");
  const [loadingAlbum, setLoadingAlum] = useState(false);
  const [loadingImg, setLoadingImg] = useState(false);
  const [indexSelected, setIindexSelected] = useState(0);

  const handleAlbum = (album: string) => (e: any) => setAlbumSetlected(album);
  const handleIndexStart = (index: number) => (e: any) => {
    document.querySelectorAll("._ZTBlf").forEach(function (element: any) {
      if (element) {
        element.click();
      }
    });
    setIindexSelected(index);
  };
  const getFavoriteAlbum = async () => {
    setLoadingAlum(true);
    try {
      const fetching = await fetch(`${urlApi}/album`, {
        cache: "no-store",
      });
      const response: any = await fetching.json();
      setAlbumSetlected(response[0].name);
      setListAlbum(response);
      setLoadingAlum(false);
    } catch (err: any) {
      console.error(err);
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
      setLoadingImg(false);
    } catch (err: any) {
      console.error(err);
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

  return (
    <div className={style.containter}>
      <div className={style.Album}>
        <>
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
        </>
      </div>
      <div className="m-b-10">
        {loadingImg ? (
          <Loading />
        ) : (
          <>
            {(listImg || []).map((x: any, index: number) => (
              <div className={style.listImage} key={index} data-aos="flip-left">
                <Image
                  src={`${img(x.path)}`}
                  alt={x.name}
                  fill={true}
                  loading="lazy"
                  onClick={handleIndexStart(index)}
                />
              </div>
            ))}
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
    </div>
  );
};

export default ImageCompognent;
