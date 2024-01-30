import React from "react";
import Audio from "@/app/admin/Component/Audio";
import style from "./style.module.css";

interface Props {
  name: string;
  linkAudio: string;
  onClick: (e: any) => void;
}

const Podcast: React.FC<Props> = ({ linkAudio, name, onClick }) => {
  console.log("linkAudio", linkAudio);
  return (
    <div className={style.cardHorizontal} onClick={onClick}>
      <Audio audioSrc={linkAudio} />
      <p className={style.titleHozontal}>{name}</p>
    </div>
  );
};

export default Podcast;
