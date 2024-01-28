import useThinkingPastor from "@/app/Store/ThinkingPastor";
import { urlApi } from "@/app/Utils/api";
import Card from "@/app/Component/Card/Click";
import React, { FC } from "react";

interface Ichild {
  filter: string;
  page: number;
  category: string;
  email?: string;
}

const Child: FC<Ichild> = React.memo(async function Child({
  filter,
  page,
  category,
}) {
  const { handleSelected } = useThinkingPastor();

  const fetching = await fetch(
    `${urlApi}/whatYouThinkPasteur?answered=true&filter=${filter}&page=${page}&category=${category}`,
    { cache: "no-store" }
  );

  const format = await fetching.json();

  return (
    <div>
      {format.map((x: any, index: number) => (
        <Card
          key={index}
          title={x.resumeQuestion}
          description={x.message}
          onClick={handleSelected(x)}
        />
      ))}
    </div>
  );
});
export default Child;
