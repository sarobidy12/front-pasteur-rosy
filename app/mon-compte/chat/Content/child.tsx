import { urlApi } from "@/app/Utils/api";
import React, { FC } from "react";
import Card from "@/app/Component/Card/Link";

const child: FC = React.memo(async function child() {
  const fetching = await fetch(`${urlApi}/chat`, { cache: "no-store" });

  const format = await fetching.json();

  return (
    <div>
      {format.map((x: any, index: number) => (
        <Card
          key={index}
          href={`/mon-compte/chat/${x._id}`}
          title={x.name}
          description={x.description}
        />
      ))}
    </div>
  );
});

export default child;
