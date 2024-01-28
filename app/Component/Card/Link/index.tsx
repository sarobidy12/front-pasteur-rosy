import Link from "next/link";
import React, { FC } from "react";
import style from "./style.module.css";

interface Ichild {
  href: string;
  title: string;
  description?: string;
}

const Card: FC<Ichild> = React.memo(async function child({
  href,
  title,
  description,
}) {
  return (
    <Link href={href} className={style.card} data-aos="zoom-in">
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        {description && <p className={style.description}>{description}</p>}
      </div>
    </Link>
  );
});

export default Card;
