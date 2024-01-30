"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { callApi } from "@/app/Utils/api";
import Link from "next/link";

const Support = () => {
  const [selected, setSelected] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setSelected((select) => ({
      ...select,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    try {
      await callApi("support", "POST", { ...selected });
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.root}>
      <div className="space-between-center">
        <h2>
          <Link href="/admin">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          Support Technique
        </h2>
      </div>
      <div className="">
        <p>
          Le support technique vous assiste pour que vous ayez la meilleure
          expérience possible.
        </p>
        <p>
          Pour décrire votre problème, par exemple, il y a un problème lors de
          l'ajout du podcast, donc.
        </p>
        <p>
          Titre : <b> Problème d'ajout podcast</b>
        </p>
        <p>Description : décrivez le problème, soit simple et concis. </p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={selected?.title || ""}
            placeholder="Titre"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={selected?.content || ""}
            placeholder="Description"
          />
          {loading ? (
            <div className="skeleton line" />
          ) : (
            <div className="flex-row-center">
              <button className="btn-admin" type="submit">
                Enregistrer
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Support;
