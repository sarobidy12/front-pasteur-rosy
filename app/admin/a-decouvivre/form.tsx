"use client";
import React, { FC } from "react";
import Dialog from "@/app/admin/Component/Dialog";
import useDiscover from "@/app/Store/Discover";
import UplaodFile from "@/app/admin/Component/UplaodFile/oneFile";
import dynamic from "next/dynamic";
import style from "@/app/admin/admin.module.css";
import Categorie from "@/app/admin/Component/Input/Category";

const Editor = dynamic(() => import("@/app/admin/Component/Editor"), {
  loading: () => <p>Chargement...</p>,
  ssr: false,
});

const DialogDiscover: FC = () => {
  const {
    loadingUpdated,
    handleChange,
    onSubmit,
    selected,
    description,
    setDescription,
    openDialog,
    toggleOpenDialog,
    onDelete,
  } = useDiscover();

  return (
    <Dialog onClose={toggleOpenDialog} open={openDialog} fullWidth={true}>
      <h2 className="text-center">
        {selected.type === "create" ? "Ajouter un" : "Modifer cette"} a
        decouvrire
      </h2>
      <div>
        <div className={style.flexContent}>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="titre">Titre</label>
              <input
                type="text"
                required={true}
                className="input-admin"
                name="title"
                placeholder="Ajouter un titre"
                value={selected?.title || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Seo description</label>
              <textarea
                required={true}
                className="input-admin"
                name="seoDescription"
                placeholder="Ajouter l'SEO description"
                value={selected?.seoDescription || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <Categorie
                name="category"
                value={selected.category}
                onChange={handleChange}
                label="Selectionner la categorie"
              />
            </div>
            <div>
              <label>Ajouter la description</label>
              {openDialog ? (
                <Editor
                  id="form-life-with-jesus"
                  name="description"
                  value={description || ""}
                  handleChange={setDescription}
                />
              ) : (
                <></>
              )}
            </div>
            <div>
              <UplaodFile
                name="path"
                onChange={handleChange}
                folder="bestCkristiant"
                path={selected.path || ""}
              />
            </div>
            {loadingUpdated ? (
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
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogDiscover;
