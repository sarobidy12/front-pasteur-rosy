"use client";
import React, { FC } from "react";
import Dialog from "@/app/admin/Component/Dialog";
import useEvent from "@/app/Store/Event";
import UplaodFile from "@/app/admin/Component/UplaodFile/oneFile";
import style from "@/app/admin/admin.module.css";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/app/admin/Component/Editor"), {
  loading: () => <p>Chargement...</p>,
  ssr: false,
});

const DialogBestCkristian: FC = () => {
  const {
    loadingListEventCategory,
    onChange,
    onSubmit,
    selected,
    description,
    setDescription,
    handleToggle,
    openDialog,
    onDelete,
  } = useEvent();

  return (
    <Dialog onClose={handleToggle} open={openDialog} fullWidth={true}>
      <div>
        <div className={style.flexContent}>
          <h2>
            {selected.type === "create" ? "Ajouter un" : "Modifer cette"}{" "}
            evenements
          </h2>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="titre">Titre</label>
              <input
                type="text"
                required={true}
                className="input-admin"
                name="title"
                placeholder="Ajouter un titre de l'evenement"
                value={selected?.title || ""}
                onChange={onChange}
                disabled={selected.type !== "create"}
              />
            </div>
            <div>
              <label>Description courte</label>
              <textarea
                required={true}
                className="input-admin"
                name="shortDescription"
                placeholder="Ajouter une description courte"
                value={selected?.shortDescription || ""}
                onChange={onChange}
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
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="linkVideo">
                Ajouter la date de l&apos;evenements
              </label>
              <input
                type="date"
                required={true}
                className="input-admin"
                name="date"
                value={selected?.date || ""}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="linkVideo">Ajouter le map</label>
              <input
                type="text"
                required={true}
                className="input-admin"
                name="place"
                placeholder="Ajouter une url position geographique (google map)"
                value={selected?.place || ""}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="linkVideo">Ajouter lien de live</label>
              <input
                type="text"
                className="input-admin"
                name="live"
                placeholder="Ajouter un lien de live"
                value={selected?.live || ""}
                onChange={onChange}
              />
            </div>
            <div>
              <label>Description de l&apos;evenements</label>
              {openDialog ? (
                <Editor
                  id="form-event"
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
                onChange={onChange}
                folder="bestCkristiant"
                path={selected.path || ""}
              />
            </div>

            {loadingListEventCategory ? (
              <div className="skeleton line" />
            ) : (
              <>
                <button type="submit" className="btn-admin">
                  {selected.type === "create" ? "Enregistrer" : "Modifer"}
                </button>
                {selected.type !== "create" ? (
                  <button
                    className="btn-delete-admin"
                    onClick={onDelete(selected._id)}
                  >
                    Supprimer
                  </button>
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
