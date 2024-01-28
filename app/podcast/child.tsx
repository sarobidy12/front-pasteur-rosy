import { urlApi } from "@/app/Utils/api";
import React, { FC } from "react";
import Card from "@/app/Component/Card/Simple";
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
    `${urlApi}/podcast?filter=${filter}&page=${page}&category=${category}`,
    { cache: "no-store" }
  );

  const format = await fetching.json();

  return (
    <div>
      {format.map((x: any, index: number) => (
        <Card
          href={`podcast?title=${x.title}`}
          key={index}
          title={x.title}
          description={x.seoDescription}
          srcImg={img(x.urlImg)}
        />
      ))}
    </div>
  );
});

export default child;
