"use client";
import React, { FC, useRef, useState } from "react";
import Dialog from "@/app/admin/Component/Dialog";
import usePicture from "@/app/Store/Picture";

interface IDialogFavory {
  open: boolean;
  handleClose: () => void;
}

const DialogFavory: FC<IDialogFavory> = ({ open, handleClose }) => {
  const [loading, setLoading] = useState(false);

  const { listAlbum, handleFavorite, saveFavoriteAlbum } = usePicture();

  const onSubmit = async (e: any) => {
    console.log("onSubmit");
    e.preventDefault();
    e.stopPropagation();
    console.log("2");
    setLoading(true);
    try {
      console.log("try");
      const { data } = await saveFavoriteAlbum();
      handleClose();
    } catch (err: any) {
      console.log("err");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <h1>Ajouter un album a l'acceuil</h1>
      <form onSubmit={onSubmit}>
        {listAlbum.map((x: any, index: number) => (
          <div key={index}>
            <input
              type="checkbox"
              id={x.name}
              name={x.name}
              checked={!!x.favorite}
              onChange={handleFavorite}
            />
            <label htmlFor={x.name}>{x.name}</label>
          </div>
        ))}
        {loading ? (
          <div className="skeleton horizontal" />
        ) : (
          <button className="btn-admin" type="submit">
            Enregistrer
          </button>
        )}
      </form>
    </Dialog>
  );
};

export default DialogFavory;
