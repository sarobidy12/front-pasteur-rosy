"use client";
import React, { FC, useState, useRef } from "react";
import Dialog from "@/app/admin/Component/Dialog";
import usePicture from "@/app/Store/Picture";
import { useRouter } from "next/navigation";

interface IdialogAddAlbum {
  open: boolean;
  handleClose: () => void;
}

const DialogAddAlbum: FC<IdialogAddAlbum> = ({ open, handleClose }) => {
  const inputRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const { saveAlbum } = usePicture();

  const { push } = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    try {
      const { data } = await saveAlbum(inputRef.current.value.trim());
      push(`/admin/photos/${data.name}`);
      handleClose();
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <h2>Cree un nouvel album</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            required={true}
            type="text"
            ref={inputRef}
            className="input-admin"
            placeholder="Ajouter le nom de l'album"
          />
        </div>
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

export default DialogAddAlbum;
