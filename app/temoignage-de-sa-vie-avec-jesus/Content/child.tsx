import { urlApi } from "@/app/Utils/api";
import React, { FC } from "react";
import style from "./style.module.css";
import { img } from "@/app/Utils/img";
import Card from "@/app/Component/Card/Simple";

interface Ichild {
  filter: string;
  page: number;
}

const child: FC<Ichild> = React.memo(async function child({ filter, page }) {
  const fetching = await fetch(
    `${urlApi}/lifeWithJesus?filter=${filter}&page=${page}`,
    { cache: "no-store" }
  );

  const format = await fetching.json();
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className={style.root}>
      {format.map((x: any, index: number) => (
        <Card
          key={index}
          href={`temoignage-de-sa-vie-avec-jesus/${x.title}`}
          srcImg={img(x.path)}
          title={x.title}
          time={x.time || "5"}
          description={x.seoDescription}
        />
      ))}
    </div>
  );
});

export default child;
