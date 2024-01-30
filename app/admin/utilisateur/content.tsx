"use client";
import Card from "@/app/admin/Component/Card/List/user";
import React, { useEffect, useState } from "react";
import style from "../admin.module.css";
import useUser from "@/app/Store/User";
import DialogForm from "./form";
import Link from "next/link";

const User = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const { getList, loading, list, createNew, onSelect, getTotalUser, count } =
    useUser();

  useEffect(() => {
    getList(filter, page);
  }, [filter, page]);

  useEffect(() => {
    getTotalUser();
  }, []);

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
          Utilisateur {count > 0 ? `(${count})` : ""}
        </h2>
        <label onClick={createNew}>
          <span className="material-symbols-outlined">add_circle</span>
        </label>
      </div>
      <input type="text" onChange={handleChange} className="inputSearchAdmin" />
      {loading ? (
        <p className="text-center">Chargement...</p>
      ) : (
        <div>
          <div className="list-content">
            {list.map((x: any, index: number) => (
              <Card
                key={index}
                name={`${x.firstName} ${x.lastName}`}
                gender={x.gender}
                link={x.img}
                onClick={onSelect(x)}
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

export default User;
