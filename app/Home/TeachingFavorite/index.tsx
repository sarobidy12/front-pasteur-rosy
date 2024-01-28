"use client";
import React, { useState, useEffect } from "react";
import Card from "@/app/Component/Card/Teaching";
import style from "./style.module.css";
import { Rowdies } from "next/font/google";
import { urlApi } from "@/app/Utils/api";
import Loading from "./loading";
import { img } from "@/app/Utils/img";


const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });

const Index = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [teaching, setTeaching] = useState<any>([]);

  const getFavoriteAlbum = async () => {
    setLoading(true);
    try {
      const fetching = await fetch(`${urlApi}/teaching/favorite`, {
        cache: "no-store",
      });
      const response: any = await fetching.json();
      setTeaching(response);
      setLoading(false);

    } catch (err: any) {
      console.error(err);
    }  
  };

  useEffect(() => {
    getFavoriteAlbum();
  }, []);
  return (
    <div className={style.container}>
      <h2 className={`${style.title} ${rowdies_.className}`}>
        <span className="material-symbols-outlined">history_edu</span>les
        enseignements favorites
      </h2>
      {loading ? (
        <Loading />
      ) : (
        <div className={style.scrollContainer}>
          <div className={style.grid}>
            {teaching.map((x: any, index: number) => (
              <div key={index} className={style.itemCard} data-aos="zoom-in">
                <Card
                  imageUrl={img(x.path)}
                  title={x.title}
                  description={x.shortDescription}
                  link={`enseignement/${x.title}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
