import React, { FC } from "react";
import style from "../style.module.css";

interface Props {
  onClick: () => void;
}
const addAlbum: FC<Props> = ({ onClick }) => {
  return (
    <button className={style.addAlbum} onClick={onClick}>
      <span className="material-symbols-outlined">add_photo_alternate</span>
      <h4>Cree un album</h4>
    </button>
  );
};

export default addAlbum;
