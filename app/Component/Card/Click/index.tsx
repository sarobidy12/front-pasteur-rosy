import React, { FC } from "react";
import style from "./style.module.css";

interface Ichild {
  onClick?: (e: any) => void;
  title: string;
  description?: string;
}

const Card: FC<Ichild> = React.memo(function child({
  title,
  onClick,
  description,
}) {
  return (
    <button className={style.card} onClick={onClick}>
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        {description && <p className={style.description}>{description}</p>}
      </div>
    </button>
  );
});

export default Card;
