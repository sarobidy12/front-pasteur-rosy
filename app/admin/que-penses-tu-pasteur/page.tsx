import React from "react";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Que penses-tu pasteur",
  description: "Administration",
};

const ThinkingPastor = () => {
  return <Content />;
};

export default ThinkingPastor;
