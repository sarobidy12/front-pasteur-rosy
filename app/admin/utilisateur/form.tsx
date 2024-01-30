"use client";
import React, { FC } from "react";
import Dialog from "@/app/admin/Component/Dialog";
import useUser from "@/app/Store/User";
import UplaodFile from "@/app/admin/Component/UplaodFile/oneFile";
import style from "@/app/admin/admin.module.css";

const DialogUtilisateur: FC = () => {
  const {
    handleChange,
    onSubmit,
    info,
    openDialog,
    toggleOpenDialog,
    onDelete,
    onBlock,
    loadingUpdate,
  } = useUser();

  return (
    <Dialog onClose={toggleOpenDialog} open={openDialog} fullWidth={true}>
      <h2 className="text-center">
        {info.type === "create" ? "Ajouter un" : "Modifer cette"} Utilisateur
      </h2>
      <div>
        <div className={style.flexContent}>
          <form onSubmit={onSubmit}>
            <div>
              <UplaodFile
                name="img"
                onChange={handleChange}
                folder="user"
                path={info.img || ""}
              />
            </div>
            <div>
              <label>Nom</label>
              <input
                type="text"
                name="firstName"
                value={info?.firstName || ""}
                onChange={handleChange}
                required={true}
                placeholder="Nom"
                className="input-admin"
              />
            </div>
            <div>
              <label>Prenom</label>
              <input
                type="text"
                name="lastName"
                value={info?.lastName || ""}
                onChange={handleChange}
                required={true}
                placeholder="Prenom"
                className="input-admin"
              />
            </div>
            <div>
              <label>Address e-mail</label>
              <input
                type="text"
                name="email"
                value={info?.email || ""}
                onChange={handleChange}
                required={true}
                placeholder="address e-mail"
                className="input-admin"
              />
            </div>
            <div>
              <label>Mot de passe</label>
              <input
                type={info.type === "create" ? "text" : "password"}
                name="password"
                value={info.type === "create" ? "1234@" : ""}
                disabled={info.type === "create"}
                onChange={handleChange}
                className="input-admin"
              />
            </div>
            {info?.err && info?.err === "create" && (
              <p className="flex-row-center color-red">
                <span className="material-symbols-outlined">warning</span>
                Adresse mail déjà utilisé
              </p>
            )}
            {loadingUpdate ? (
              <div className="skeleton line" />
            ) : (
              <>
                <button type="submit" className="btn-admin">
                  {info.type === "create" ? "Enregistrer" : "Modifer"}
                </button>
                {info.type !== "create" ? (
                  <div className="flex-row-center">
                    <button
                      className="btn-delete-admin"
                      onClick={onDelete(info._id)}
                    >
                      Supprimer
                    </button>
                    <button
                      className="btn-delete-admin"
                      onClick={onBlock(info._id)}
                    >
                      {!info.block ? "Blocker" : "Deblocker"}
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

export default DialogUtilisateur;
