import React from "react";
import style from "./style.module.css";

interface Props {
  name: string;
  linkAudio: string;
  onClick: (e: any) => void;
}

const Podcast: React.FC<Props> = ({ linkAudio, name, onClick }) => {
  return (
    <div className={style.cardHorizontal} onClick={onClick}>
      <p className={style.titleHozontal}>{name}</p>
    </div>
  );
};

export default Podcast;
