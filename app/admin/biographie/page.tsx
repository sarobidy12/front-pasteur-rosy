"use client";
import React, { useEffect } from "react";
import style from "../admin.module.css";
import useBiography from "@/app/Store/Biography";
import Link from "next/link";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/app/admin/Component/Editor"), {
  loading: () => <p>Chargement...</p>,
  ssr: false,
});

const Category = () => {
  const {
    loading,
    getBiography,
    loadingUpdated,
    content,
    setContent,
    onSubmit,
  } = useBiography();

  useEffect(() => {
    getBiography();
  }, []);

  return (
    <div className={style.container}>
      <div className="space-between-center">
        <h2>
          <Link href="/admin">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          Biographie de pasteur
        </h2>
        {loadingUpdated ? (
          <p>Loading...</p>
        ) : (
          <span className="material-symbols-outlined" onClick={onSubmit}>
            save
          </span>
        )}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Editor
            id="form-content-biography"
            name="content"
            value={content || ""}
            handleChange={setContent}
          />
        </div>
      )}
    </div>
  );
};

export default Category;
