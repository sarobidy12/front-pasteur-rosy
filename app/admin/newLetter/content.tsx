"use client";
import React, { useState } from "react";
import style from "../admin.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import { callApi } from "@/app/Utils/api";
import CountFollower from "./count";
 
const Editor = dynamic(() => import("@/app/admin/Component/Editor"), {
  loading: () => <p>Chargement...</p>,
  ssr: false,
});

const NewLetter = () => {
  const [content, setContent] = useState([]);
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
      await callApi("newLetter/send-all", "POST", {
        title: selected.title,
        content,
      });
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <div className="space-between-center">
        <h2>
          <Link href="/admin">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          NewLetter
        </h2>
        <CountFollower />
      </div>
      <div>
        <div>
          <label>Titre</label>
          <input
            type="text"
            name="title"
            value={selected?.title || ""}
            placeholder="Ajouter un titre"
            className="input-admin"
            required={true}
            onChange={handleChange}
          />
        </div>
        <label>Votre message</label>
        <Editor
          id="form-content-biography"
          name="content"
          value={content || ""}
          handleChange={setContent}
        />
      </div>

      {loading ? (
        <div className="skeleton line" />
      ) : (
        <button className="btn-admin" type="submit" onClick={onSubmit}>
          Envoyer
        </button>
      )}
    </div>
  );
};

export default NewLetter;
