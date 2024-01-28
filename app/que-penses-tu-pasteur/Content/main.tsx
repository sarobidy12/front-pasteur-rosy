"use client";
import React, { Suspense, memo, useState } from "react";
import Child from "./child";
import Category from "@/app/Component/Input/ListCategorie";
import useUser from "@/app/Store/User";
import Link from "next/link";

const Content = memo(function Content() {
  const { info } = useUser();
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
          <h2 className="text-white">Que penses tu pasteur.</h2>
          <p className="text-white">
            "Que penses-tu ?" est une invitation à partager tes pensées, opinions
            ou réflexions sur un sujet donné. Cela sert à demander à quelqu'un
            de partager son point de vue ou ses sentiments sur une question
            spécifique.
          </p>
          {info._id ? (
            <p className="text-white">
              Vous avez une question{" "}
              <Link
                href="/mon-compte/poser-des-questions"
                className="text-white"
              >
                <b>Poser une question ?</b>
              </Link>
            </p>
          ) : (
            <p className="text-white">
              <Link href="/se-connecter" className="text-white">
                <b> Connectez-vous</b>
              </Link>{" "}
              pour poser des questions.{" "}
            </p>
          )}
          <Category onChange={handleChangeCategory} value={category} />
        </div>
      </div>

      <div className="container m-b-10 m-t-5">
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
