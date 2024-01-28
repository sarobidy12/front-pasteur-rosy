"use client";
import React, { useEffect, useState } from "react";
import style from "../admin.module.css";
import useLifeWithJesus from "@/app/Store/LifeWithJesus";
import DialogForm from "./form";
import Link from "next/link";
import Card from "@/app/admin/Component/Card/List/card";

const LifeWithJesus = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const { getList, loading, list, toggleOpenDialog, onSelect } =
    useLifeWithJesus();

  useEffect(() => {
    getList(filter, page);
  }, [filter, page]);

  const handleChange = (e: any) => setFilter(e.target.value);
  const next = (e: any) => setPage(page + 1);
  const back = (e: any) => setPage(page - 1);

  return (
    <div className={style.container}>
      <div className="space-between-center">
        <h2>
          <Link href="/admin">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          Témoignage de la vie avec Jésus
        </h2>
        <label onClick={toggleOpenDialog}>
          <span className="material-symbols-outlined">add_circle</span>
        </label>
      </div>

      <input type="text" onChange={handleChange} className="inputSearchAdmin" />

      {loading ? (
        <p className="text-center">Chargement...</p>
      ) : (
        <div>
          <div className="list-admin">
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
      <DialogForm modalId="dialog-selected" />
    </div>
  );
};

export default LifeWithJesus;
