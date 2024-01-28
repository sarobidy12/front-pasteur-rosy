"use client";
import React, { Suspense, memo, useState } from "react";
import Child from "./child";

const Content = memo(function Content() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const handleChange = (e: any) => setFilter(e.target.value);
  const next = (e: any) => setPage(page + 1);
  const back = (e: any) => setPage(page - 1);
  return (
    <div>
      <div className="head">
        <div className="container">
          <input type="text" onChange={handleChange} className="inputSearch" />
          <h2 className="text-white">Des témoignages de vie avec Jésus.</h2>
          <p className="text-white">
            Les témoignages de vie avec Jésus sont des récits personnels où des
            individus partagent leurs expériences spirituelles, leurs rencontres
            avec Jésus-Christ et l'impact que cela a eu sur leur vie. Ces
            témoignages varient grandement, reflétant la diversité des
            expériences spirituelles des personnes. Voici quelques exemples
            généraux de témoignages de vie avec Jésus.
          </p>
        </div>
      </div>
      <div className="container m-t-5 m-b-10">
        <Suspense
          fallback={
            <>
              <div className="skeleton card-horizontal" />
              <br />
              <div className="skeleton card-horizontal" />
              <br />
              <div className="skeleton card-horizontal" />
              <br />
              <div className="skeleton card-horizontal" />
              <br />
              <div className="skeleton card-horizontal" />
              <br />
              <div className="skeleton card-horizontal" />
            </>
          }
        >
          <Child page={page} filter={filter} />
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
