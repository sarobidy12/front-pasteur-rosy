"use client";
import React, { Suspense, memo, useState } from "react";
import ListCategorie from "@/app/Component/Input/ListCategorie";
import Child from "./child";

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
          <h2 className="text-white">A decouvrire</h2>
          <p className="text-white">
            Découvrez l'inattendu avec notre module exclusif ! Explorez des
            fonctionnalités cachées, des astuces pratiques et des contenus
            exclusifs. Enrichissez votre expérience en vous laissant surprendre
            par ce voyage captivant d'apprentissage.
          </p>
          <ListCategorie onChange={handleChangeCategory} value={category} />
        </div>
      </div>
      <div className="container m-t-5">
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
