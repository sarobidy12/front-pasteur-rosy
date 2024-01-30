"use client";
import React, { FC } from "react";
import Dialog from "@/app/admin/Component/Dialog";
import useThinkingPastor from "@/app/Store/ThinkingPastor";
import style from "@/app/admin/admin.module.css";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/app/admin/Component/Editor"), {
  loading: () => <p>Chargement...</p>,
  ssr: false,
});

const DialogQuePenseTuPasteur: FC = () => {
  const {
    onSubmit,
    selected,
    description,
    setDescription,
    handleToggle,
    openDialog,
    onChange,
    loadingUpdate,
    onDelete,
  } = useThinkingPastor();
  console.log("selected", selected);
  return (
    <Dialog onClose={handleToggle} open={openDialog} fullWidth={true}>
      <h2 className="text-center">Repondre a la question</h2>

      <form onSubmit={onSubmit}>
        <div className={style.flexContent}>
          <div>
            <h2>{selected.resumeQuestion || ""}</h2>
            <p>{selected.message}</p>
            <span>{selected.name}</span>
          </div>
          <div>
            <label>Ajouter un lien video Youtube</label>
            <input
              required={true}
              onChange={onChange}
              type="text"
              name="https://you"
              value={selected.linkVideo}
              placeholder="Nom du album"
              className="input-admin"
            />
          </div>
          <div>
            <label>Description de l&apos;evenements</label>
            <Editor
              id="form-thinking-pastor"
              name="description"
              value={description || ""}
              handleChange={setDescription}
            />
          </div>
          <div>
            {loadingUpdate ? (
              <div className="skeleton line" />
            ) : (
              <>
                <button type="submit" className="btn-admin">
                  Enregistrer
                </button>
                <div className="flex-row-center">
                  <button
                    className="btn-delete-admin"
                    onClick={onDelete(selected._id)}
                  >
                    Supprimer
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default DialogQuePenseTuPasteur;
