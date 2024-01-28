"use client";
import React, { Suspense, memo, useState } from "react";
import Child from "./child";
import ListCategorie from "@/app/Component/Input/ListCategorie";

const Content = memo(function Content() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  const handleChange = (e: any) => setFilter(e.target.value);
  const handleChangeCategory = (e: any) => setCategory(e.target.value);
  const next = (e: any) => setPage(page + 1);
  const back = (e: any) => setPage(page - 1);
  return (
    <>
      <div className="head">
        <div className="container">
          <input type="text" onChange={handleChange} className="inputSearch" />
          <h2 className="text-white">Enseignement.</h2>
          <p className="text-white">
            L'enseignement est le moyen principal par lequel les connaissances
            sont transmises d'une génération à l'autre. Il permet la
            préservation et la diffusion des découvertes, des idées et des
            compétences accumulées au fil du temps.
          </p>
          <ListCategorie onChange={handleChangeCategory} value={category} />
        </div>
      </div>
      <div className="container m-b-10 m-t-5">
        <Suspense
          fallback={
            <>
              <div className="skeleton card-vertical" />
              <div className="skeleton card-vertical" />
              <div className="skeleton card-vertical" />
              <div className="skeleton card-vertical" />
              <div className="skeleton card-vertical" />
              <div className="skeleton card-vertical" />
              <div className="skeleton card-vertical" />
              <div className="skeleton card-vertical" />
              <div className="skeleton card-vertical" />
              <div className="skeleton card-vertical" />
              <div className="skeleton card-vertical" />
              <div className="skeleton card-vertical" />
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
    </>
  );
});

export default Content;
