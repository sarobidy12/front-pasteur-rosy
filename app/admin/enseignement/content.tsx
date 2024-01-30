"use client";
import React, { useEffect, useState } from "react";
import style from "../admin.module.css";
import useTeaching from "@/app/Store/Teaching";
import DialogForm from "./form";
import Link from "next/link";
import Card from "@/app/admin/Component/Card/List/card";
import Category from "@/app/Component/Input/ListCategorie";
 

const Teaching = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  const handleChange = (e: any) => setFilter(e.target.value);
  const handleChangeCategory = (e: any) => setCategory(e.target.value);
  const next = (e: any) => setPage(page + 1);
  const back = (e: any) => setPage(page - 1);
  const { getList, onSelect, loading, list, createNew } = useTeaching();

  useEffect(() => {
    getList(filter, page, category);
  }, [page, filter, category]);

  return (
    <div className={style.container}>
      <div className="space-between-center">
        <h2>
          <Link href="/admin">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          Les enseignements
        </h2>
        <label onClick={createNew}>
          <span className="material-symbols-outlined">add_circle</span>
        </label>
      </div>

      <input type="text" onChange={handleChange} className="inputSearchAdmin" />
      <Category onChange={handleChangeCategory} value={category} />

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div>
          <div className="grid">
            {list.map((x: any, index: number) => (
              <Card
                title={x.title}
                path={x.path}
                time={x.time}
                key={index}
                onclick={onSelect(x)}
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
        </div>
      )}
      <DialogForm />
    </div>
  );
};

export default Teaching;
