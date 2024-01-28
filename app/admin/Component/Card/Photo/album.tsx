import React, { FC } from "react";
import style from "../style.module.css";
import Link from "next/link";

interface Props {
  name: string;
}
const Album: FC<Props> = ({ name }) => {
  return (
    <Link href={`/admin/photos/${name}`} className={style.addAlbum}>
      <h4>{name}</h4>
    </Link>
  );
};

export default Album;
