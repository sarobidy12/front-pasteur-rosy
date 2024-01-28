import Card from "@/app/Component/Card/Vertical";
import { urlApi } from "@/app/Utils/api";
import React, { FC } from "react";
import { img } from "@/app/Utils/img";

interface Ichild {
  filter: string;
  page: number;
  category: string;
}

const child: FC<Ichild> = React.memo(async function child({
  filter,
  page,
  category,
}) {
  const fetching = await fetch(
    `${urlApi}/discover?filter=${filter}&page=${page}&category=${category}`,
    { cache: "no-store" }
  );

  const format = await fetching.json();

  return (
    <div>
      {format.map((x: any, index: number) => (
        <Card
          key={index}
          href={`/mon-compte/a-decouvrire/${x._id}`}
          srcImg={img(x.path)}
          title={x.title}
        />
      ))}
    </div>
  );
});

export default child;
