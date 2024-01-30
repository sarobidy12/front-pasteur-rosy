"use client";
import React, { FC } from "react";
import Dialog from "@/app/admin/Component/Dialog";
import useLifeWithJesus from "@/app/Store/LifeWithJesus";
import UplaodFile from "@/app/admin/Component/UplaodFile/oneFile";
import style from "@/app/admin/admin.module.css";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/app/admin/Component/Editor"), {
  loading: () => <p>Chargement...</p>,
  ssr: false,
});
interface Props {
  modalId: string;
}

const DialogBestCkristian: FC<Props> = ({ modalId }) => {
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
  } = useLifeWithJesus();

  return (
    <Dialog onClose={toggleOpenDialog} open={openDialog} fullWidth={true}>
      <h2 className="text-center">
        {selected.type === "create" ? "Ajouter un" : "Modifer ce"} témoignage de
        sa vie avec Jésus
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
                disabled={selected.type !== "create"}
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
              <label htmlFor="linkVideo">Ajouter une url video</label>
              <input
                type="text"
                className="input-admin"
                name="linkVideo"
                placeholder="Ajouter une url video (Youtube/TikTok)"
                value={selected?.linkVideo || ""}
                onChange={handleChange}
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

export default DialogBestCkristian;
