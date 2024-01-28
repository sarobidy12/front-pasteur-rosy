import Link from "next/link";
import React, { FC } from "react";
import style from "./style.module.css";
import Image from "next/image";
interface Ichild {
  href: string;
  srcImg: string;
  title: string;
  time?: string;
  description?: string;
}

const Card: FC<Ichild> = React.memo(async function child({
  href,
  srcImg,
  title,
  time,
  description,
}) {
  return (
    <Link href={href} className={style.cardLink} data-aos="zoom-in">
      <div className={style.content}>
        <div className={style.contentImg}>
          <Image src={srcImg} alt={title} fill={true} className={style.img} />
        </div>
        <div className={style.contentText}>
          <div>
            <h2 className={style.title}>{title}</h2>
            {description && <p className={style.description}>{description}</p>}
            {time && (
              <div className={style.time}>
                <span className="material-symbols-outlined">schedule</span>
                {time} min
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
});

export default Card;
