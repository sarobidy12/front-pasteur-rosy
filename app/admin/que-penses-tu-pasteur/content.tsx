"use client";
import React, { useEffect, useState } from "react";
import style from "../admin.module.css";
import useThikingPastor from "@/app/Store/ThinkingPastor";
import DialogForm from "./form";
import Category from "@/app/Component/Input/ListCategorie";
import Link from "next/link";
import Card from "@/app/admin/Component/Card/Text";
 

const ThinkingPastor = () => {
  const { getQuestion, loading, listQuestionAsking, selectQuestion } =
    useThikingPastor();

  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  const handleChange = (e: any) => setFilter(e.target.value);
  const handleChangeCategory = (e: any) => setCategory(e.target.value);
  const next = (e: any) => setPage(page + 1);
  const back = (e: any) => setPage(page - 1);

  useEffect(() => {
    getQuestion(filter, page, category);
  }, [page, filter, category]);

  return (
    <div className={style.container}>
      <div className="space-between-center">
        <h2>
          <Link href="/admin">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          Les questions Que pense tu pasteur {listQuestionAsking.length}
        </h2>
      </div>

      <input type="text" onChange={handleChange} className="inputSearchAdmin" />

      <Category onChange={handleChangeCategory} value={category} />

      {loading ? (
        <p className="text-center">Chargement...</p>
      ) : (
        <div>
          <div className="list-content">
            {(listQuestionAsking || []).map((x: any, index: number) => (
              <Card
                name={x.resumeQuestion}
                text={x.message}
                key={index}
                onClick={selectQuestion(x)}
              />
            ))}
          </div>{" "}
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
        </div>
      )}

      <DialogForm />
    </div>
  );
};

export default ThinkingPastor;
