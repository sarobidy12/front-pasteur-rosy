"use client";
import React, { FC } from "react";
import Dialog from "@/app/admin/Component/Dialog";
import usePodcast from "@/app/Store/Podcast";
import UplaodFile from "@/app/admin/Component/UplaodFile/oneFile";
import Categorie from "@/app/admin/Component/Input/Category";
import style from "@/app/admin/admin.module.css";

const DialogCategory: FC = () => {
  const {
    selected,
    onChange,
    loadingUpdate,
    onSubmit,
    toggleDialog,
    openDialog,
    onDelete,
  } = usePodcast();

  return (
    <Dialog open={openDialog} onClose={toggleDialog} fullWidth={true}>
      <h2 className="text-center">
        {selected.type === "create" ? "Ajouter un" : "Modifer ce"} podcast
      </h2>
      <div className={style.flexContent}>
        <form onSubmit={onSubmit}>
          <div>
            <label>Nom du cateogorie</label>
            <input
              required={true}
              onChange={onChange}
              type="text"
              name="title"
              value={selected.title || ""}
              placeholder="titre du poscast"
              className="input-admin"
              disabled={selected.type !== "create"}
            />
          </div>
          <div>
            <label>Seo description</label>
            <textarea
              required={true}
              className="input-admin"
              name="seoDescription"
              placeholder="Ajouter le SEO description"
              value={selected?.seoDescription || ""}
              onChange={onChange}
            />
          </div>
          <div>
            <Categorie
              name="category"
              value={selected.category}
              onChange={onChange}
              label="Selectionner votre categorie"
            />
          </div>
          <div>
            <UplaodFile
              name="urlImg"
              onChange={onChange}
              folder="podcastImg"
              path={selected.urlImg || ""}
            />
          </div>

          <div>
            <UplaodFile
              name="urlUpload"
              onChange={onChange}
              folder="podcast"
              path={selected.urlUpload || ""}
              placeHolder="Ajouter une audio"
              type="audio"
            />
          </div>
          <div>
            {loadingUpdate ? (
              <div className="skeleton line" />
            ) : (
              <>
                <button type="submit" className="btn-admin">
                  {selected.type === "create" ? "Enregistrer" : "Modifer"}
                </button>
                {selected.type !== "create" ? (
                  <div className="flex-row-center">
                    <button
                      className="btn-delete-admin"
                      onClick={onDelete(selected._id)}
                    >
                      Supprimer
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default DialogCategory;
