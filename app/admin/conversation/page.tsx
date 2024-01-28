"use client";
import React, { useEffect } from "react";
import style from "../admin.module.css";
import Card from "@/app/admin/Component/Card/Text";
import useChat from "@/app/Store/Chat";
import Link from "next/link";
import DialogChat from "./form";

const Conversation = () => {
  const { listChat, loading, getListChat, clicked, createNew } = useChat();

  useEffect(() => {
    getListChat();
  }, []);

  return (
    <div className={style.container}>
      <div className="space-between-center">
        <h2>
          <Link href="/admin">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          Les conversations
        </h2>
        <label onClick={createNew}>
          <span className="material-symbols-outlined">add_circle</span>
        </label>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {listChat.map((x: any, index: number) => (
            <Card
              name={x.name}
              text={x.description}
              onClick={clicked(x)}
              key={index}
            />
          ))}
        </div>
      )}

      <DialogChat />
    </div>
  );
};

export default Conversation;
