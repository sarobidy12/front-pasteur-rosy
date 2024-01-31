import React, { FC } from "react";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Photos",
  description: "Administration",
};

interface Props {
  params: { album: string };
}

const Admin: FC<Props> = ({ params }) => {

  return <Content params={{ album: params.album }} />;
};

export default Admin;
