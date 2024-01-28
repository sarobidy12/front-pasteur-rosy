"use client";
import React, { useEffect, useRef } from "react";
import style from "../admin.module.css";
import Card from "@/app/admin/Component/Card/List/category";
import useCategory from "@/app/Store/Category";
import Link from "next/link";
import DialogCategory from "./form";

const Category = () => {
  const { listCategory, loading, getCategory, onCreate, onSelect } =
    useCategory();

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className={style.container}>
      <div className="space-between-center">
        <h2>
          <Link href="/admin">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          Les categories
        </h2>
        <label onClick={onCreate}>
          <span className="material-symbols-outlined">add_circle</span>
        </label>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {listCategory.map((x: any, index: number) => (
            <Card
              name={x.name}
              textIcon={x.textIcon}
              key={index}
              click={onSelect(x)}
            />
          ))}
        </div>
      )}

      <DialogCategory />
    </div>
  );
};

export default Category;
