import React, { FC } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { urlApi } from "@/app/Utils/api";
import Content from "./content";

interface Props {
  params: { id: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // fetch data
  const current = await fetch(`${urlApi}/chat/info/${params.id}`).then((res) =>
    res.json()
  );

  return {
    title: current.name,
    description: current.description,
    openGraph: {
      title: current.name,
      description: current.description,
    },
  };
}

const page: FC<Props> = async ({ params }) => {
  const current = await fetch(`${urlApi}/chat/info/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <Content
      title={current.name}
      description={current.description}
      canal={params.id}
    />
  );
};

export default page;
