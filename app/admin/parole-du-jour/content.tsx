"use client";
import React, { useEffect } from "react";
import style from "./style.module.css";
import useWordOfDay from "@/app/Store/WordOfDay";
import Link from "next/link";

const Category = () => {
  const {
    loading,
    getWordOfDay,
    loadingUpdate,
    content,
    onSubmit,
    handleChange,
  } = useWordOfDay();

  useEffect(() => {
    getWordOfDay();
  }, []);

  return (
    <div className={style.root}>
      <div className="space-between-center">
        <h2>
          <Link href="/admin">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          Parole du jour
        </h2>
      </div>
      {loading ? (
        <div className="skeleton scare" />
      ) : (
        <div className="">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="verse"
              onChange={handleChange}
              value={content?.verse || ""}
            />
            <textarea
              name="content"
              onChange={handleChange}
              value={content?.content || ""}
            />
            {loadingUpdate ? (
              <div className="skeleton chip" />
            ) : (
              <div className="flex-row-center">
                <button className="btn-admin" type="submit">
                  Enregistrer
                </button>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default Category;
