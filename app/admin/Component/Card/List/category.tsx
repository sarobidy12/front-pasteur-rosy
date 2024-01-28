import React from "react";
import style from "./style.module.css";

interface Props {
  name: string;
  textIcon?: string;
  click?: (e: any) => void;
}

const Category: React.FC<Props> = ({ textIcon, name, click }) => {
  return (
    <div className={style.cardHorizontal} onClick={click}>
      {textIcon && (
        <span className="material-symbols-outlined">{textIcon}</span>
      )}
      <p className={style.titleHozontal}>{name}</p>
    </div>
  );
};

export default Category;
