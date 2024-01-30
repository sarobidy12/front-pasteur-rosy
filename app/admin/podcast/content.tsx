"use client";
import React, { useEffect, useState } from "react";
import Card from "@/app/admin/Component/Card/List/podcast";
import Category from "@/app/Component/Input/ListCategorie";
import usePodcast from "@/app/Store/Podcast";
import style from "../admin.module.css";
import { img } from "@/app/Utils/img";
import Link from "next/link";
import Dialog from "./form";
 
const Podcast = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  const handleChange = (e: any) => setFilter(e.target.value);
  const handleChangeCategory = (e: any) => setCategory(e.target.value);
  const next = (e: any) => setPage(page + 1);
  const back = (e: any) => setPage(page - 1);

  const { listPodcast, loading, getPodcast, onSelect, createNew } =
    usePodcast();

  useEffect(() => {
    getPodcast(filter, page, category);
  }, [page, filter, category]);

  return (
    <div className={style.container}>
      <div className="space-between-center">
        <h2>
          <Link href="/admin">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          Les podcasts
        </h2>
        <label onClick={createNew}>
          <span className="material-symbols-outlined">add_circle</span>
        </label>
      </div>
      <input type="text" onChange={handleChange} className="inputSearchAdmin" />
      <Category onChange={handleChangeCategory} value={category} />

      {loading ? (
        <p className="text-center">Chargement...</p>
      ) : (
        <>
          <div className="list-content">
            {listPodcast.map((x: any, index: number) => (
              <Card
                name={x.title}
                key={index}
                onClick={onSelect(x)}
                linkAudio={img(x?.urlUpload)}
              />
            ))}
          </div>
          <div className="space-between-center">
            <button
              onClick={back}
              className="btn-pagination"
              disabled={page <= 1}
            >
              <span className="material-symbols-outlined">arrow_back_ios</span>
              Precedent
            </button>
            <button onClick={next} className="btn-pagination">
              <div>Suivant </div>
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </>
      )}

      <Dialog />
    </div>
  );
};

export default Podcast;
