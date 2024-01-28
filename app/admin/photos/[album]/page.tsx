"use client";
import React, { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "../../admin.module.css";
import style_ from "./style.module.css";
import Dialog from "@/app/admin/Component/Dialog";
import usePicture from "@/app/Store/Picture";
import Image from "next/image";
import Upload from "@/app/admin/Component/UplaodFile/oneMoreFile";
import Link from "next/link";
import { img } from "@/app/Utils/img";

interface Props {
  params: { album: string };
}

const Admin: FC<Props> = ({ params }) => {
  const {
    listToDeleted,
    listPicture,
    getPicture,
    loading,
    pushNewPhoto,
    handleCheckDeleted,
    loadingUpdate,
    deletePicture,
  } = usePicture();

  const [open, setOpen] = useState(false);
  const decodedText = decodeURIComponent(params.album);
  const toggleOpen = () => setOpen(!open);

  const handleChage = (e: any) => {
    const { value } = e.target;
    pushNewPhoto(value);
    toggleOpen();
  };

  useEffect(() => {
    getPicture(decodedText);
  }, [decodedText]);

  return (
    <div className={style.container}>
      <div className="space-between-center">
        <div className="icon-btn">
          <Link href="/admin/photos">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h2>{decodedText}</h2>
        </div>
        <label htmlFor="dialog-add-img" onClick={toggleOpen}>
          <span className="material-symbols-outlined">add_photo_alternate</span>
        </label>
      </div>

      {listToDeleted.length > 0 ? (
        <div className="space-between-center">
          <h2>Selectionnez ({listToDeleted.length})</h2>
          <button className="btn-delete-admin" disabled={loadingUpdate} onClick={deletePicture}>
            {loadingUpdate ? "Suppression..." : "Supprimer"}
          </button>
        </div>
      ) : (
        <></>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid">
          {listPicture.map((image, index) => (
            <div key={index} className={style_.listImage}>
              <input
                type="checkbox"
                name={image._id}
                onChange={handleCheckDeleted}
                className={style_.checked}
                checked={listToDeleted.includes(image._id)}
              />
              <Image src={img(image.path)} alt={image.name} fill={true} />
            </div>
          ))}
        </div>
      )}
      <Dialog open={open} onClose={toggleOpen}>
        <Upload
          name={decodedText}
          folder={decodedText}
          path={[]}
          onChange={handleChage}
          placeHolder="Ajouter des images"
        />
      </Dialog>
    </div>
  );
};

export default Admin;
