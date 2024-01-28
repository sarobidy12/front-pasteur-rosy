"use client";
import React, { useEffect } from "react";
import style from "../admin.module.css";
import useEvent from "@/app/Store/Event";
import DialogForm from "./form";
import Link from "next/link";
import Card from "@/app/admin/Component/Card/Event";
import { img } from "@/app/Utils/img";

const Event = () => {
  const {
    getEvent,
    loading,
    listEvent,
    onSelect,
    createNew,
  } = useEvent();

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className={style.container}>
      <div className="space-between-center">
        <h2>
          <Link href="/admin">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          Les evenements
        </h2>
        <label onClick={createNew}>
          <span className="material-symbols-outlined">add_circle</span>
        </label>
      </div>

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div>
          <div>
            {listEvent.map((x: any, index: number) => (
              <Card
                title={x.title}
                description={x.shortDescription}
                imageUrl={img(x.path)}
                key={index}
                onClick={onSelect(x)}
              />
            ))}
          </div>
        </div>
      )}
      <DialogForm />
    </div>
  );
};

export default Event;
