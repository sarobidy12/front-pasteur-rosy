"use client";
import React, { Suspense, memo, useState } from "react";
import Child from "./child";
import Category from "@/app/Component/Input/ListCategorie";
import style from "./style.module.css";

const Content = memo(function Content() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  const handleChange = (e: any) => setFilter(e.target.value);
  const handleChangeCategory = (e: any) => setCategory(e.target.value);
  const next = (e: any) => setPage(page + 1);
  const back = (e: any) => setPage(page - 1);
  return (
    <div>
      <div className="head">
        <div className="container">
          <input type="text" onChange={handleChange} className="inputSearch" />
          <h1 className="text-white">Podcast</h1>
          <p className="text-white">
            Découvrez un trésor rare de connaissances dans notre podcast
            exclusif. Des enseignements rares, des expertises pointues et des
            idées qui transcendent : plongez dans l&apos;exceptionnel,
            disponible seulement ici.
          </p>
          <Category onChange={handleChangeCategory} value={category} />
        </div>
      </div>
      <div className={`container ${style.root}`}>
        <Suspense
          fallback={
            <>
              <div className="skeleton horizontal" />
              <br />
              <div className="skeleton horizontal" />
              <br />
              <div className="skeleton horizontal" />
              <br />
              <div className="skeleton horizontal" />
              <br />
              <div className="skeleton horizontal" />
              <br />
              <div className="skeleton horizontal" />
              <br />
            </>
          }
        >
          <Child page={page} filter={filter} category={category} />
        </Suspense>
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
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Content;
