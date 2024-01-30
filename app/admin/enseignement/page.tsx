import React from "react";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Enseignement",
  description: "Administration",
};

const Teaching = () => {
  return <Content />;
};

export default Teaching;
