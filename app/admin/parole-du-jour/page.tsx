import React from "react";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Parole du jour",
  description: "Administration",
};
const page = () => {
  return <Content />;
};

export default page;
