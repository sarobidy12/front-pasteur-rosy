"use client";
import React, { useEffect } from "react";
import useBiography from "@/app/Store/Biography";
import PreviewRenderer from "@/app/Component/Html";
import style from "./style.module.css";

const Category = () => {
  const { loading, getBiography, content } = useBiography();

  useEffect(() => {
    getBiography();
  }, []);

  return (
    <div className={style.root}>
      {loading ? (
        <>
          <div className="skeleton horizontal" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton line" />
          <br />
          <div className="skeleton scare" />
        </>
      ) : (
        <div>{content ? <PreviewRenderer data={content} /> : <></>}</div>
      )}
    </div>
  );
};

export default Category;
