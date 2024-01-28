import Link from "next/link";
import React, { FC, ReactNode } from "react";
import style from "../style.module.css";

interface Props {
  icon: ReactNode;
  href: string;
  title: string;
  description: string;
}

const Module: FC<Props> = ({ icon, href, title, description }) => {
  return (
    <Link href={href} className={style.container}>
      <h2>
        {icon} {title}
      </h2>
      <p>{description}</p> 
    </Link>
  );
};

export default Module;
