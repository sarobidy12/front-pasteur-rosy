"use client";
import React, { useEffect } from "react";
import style from "../admin.module.css";
import AddAlbum from "@/app/admin/Component/Card/Photo/add.album";
import Album from "@/app/admin/Component/Card/Photo/album";
import Dialogfavorite from "./dialogfavorite";
import DialogAddAlbum from "./dialogAddAlbum";
import usePicture from "@/app/Store/Picture";
import Link from "next/link";

const AdminPhoto = () => {
  const { getListAlbum, loading, listAlbum, handleToggleModal, openDialog } =
    usePicture();

  useEffect(() => {
    getListAlbum();
  }, []);

  return (
    <div className={style.container}>
      <div className="space-between-center">
        <div className="icon-btn">
          <Link href="/admin">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h2>Les albums</h2>
        </div>
        <label onClick={handleToggleModal("favorite")}>
          <span className="material-symbols-outlined">star_half</span>
        </label>
      </div>

      {loading ? (
        <p className="text-center">Chargement...</p>
      ) : (
        <div>
          <div className="grid">
            {listAlbum.map((x: any, index: number) => (
              <Album name={x.name} key={index} />
            ))}
            <AddAlbum onClick={handleToggleModal("addAlbum")} />
          </div>
        </div>
      )}
      <Dialogfavorite
        open={!!openDialog?.favorite}
        handleClose={handleToggleModal("favorite")}
      />
      <DialogAddAlbum
        open={!!openDialog?.addAlbum}
        handleClose={handleToggleModal("addAlbum")}
      />
    </div>
  );
};

export default AdminPhoto;
