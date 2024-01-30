import React from "react";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Podcast",
  description: "Administration",
};

const Podcast = () => {
  return <Content />;
};

export default Podcast;
