"use client";
import React, { Suspense, memo } from "react";
import useUser from "@/app/Store/User/index";
import { useRouter } from "next/navigation";
import Child from "./child";

const Content = memo(function Content() {
  const { info } = useUser();

  const { push } = useRouter();

  if (!info._id) {
    push("/se-connecter");
  }

  return (
    <div>
      <div className="head">
        <div className="container">
          <h1 className="text-white">List des cannal de discution</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            tempore voluptas quia voluptatem vitae est provident hic suscipit
            nam repellendus aut mollitia quo accusamus, consequatur corporis! Ex
            totam praesentium quod?
          </p>
        </div>
      </div>
      <div className="container list-content">
        <Suspense
          fallback={
            <>
              <div className="skeleton horizontal" />
              <br />
              <div className="skeleton horizontal" />
              <br />
              <div className="skeleton horizontal" />
              <br />
              <div className="skeleton horizontal" />
              <br />
              <div className="skeleton horizontal" />
            </>
          }
        >
          <Child />
        </Suspense>
      </div>
    </div>
  );
});

export default Content;
