import React, { FC, useState, memo, useLayoutEffect } from "react";
import useThinkingPastor from "@/app/Store/ThinkingPastor";
import Card from "@/app/Component/Card/Click";
import { urlApi } from "@/app/Utils/api";
import LoadingComponent from "./loading";

interface Ichild {
  filter: string;
  page: number;
  category: string;
  mail: string;
  answered: boolean;
}

const child: FC<Ichild> = memo(({ filter, page, category, mail, answered }) => {
  const [loading, setLoading] = useState(false);
  const { setListQuestionAsking, listQuestionAsking, handleSelected } =
    useThinkingPastor();
  const getMyQuestion = async () => {
    setLoading(true);
    setListQuestionAsking([]);
    try {
      const fetching = await fetch(
        `${urlApi}/whatYouThinkPasteur?filter=${filter}&page=${page}&category=${category}&email=${mail}&answered=${answered}`,
        { cache: "no-store" }
      );
      const format = await fetching.json();
      setListQuestionAsking(format);
      setLoading(false);
    } catch (err: any) {
      console.error(err);
    }
  };

  useLayoutEffect(() => {
    getMyQuestion();
  }, [filter, page, category, mail, answered]);

  return (
    <div>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          {listQuestionAsking.length > 0 &&
            listQuestionAsking.map((x: any, index: number) => (
              <Card
                key={index}
                title={x.resumeQuestion}
                description={x.message}
                onClick={handleSelected(x)}
              />
            ))}
        </>
      )}
    </div>
  );
});

export default child;
