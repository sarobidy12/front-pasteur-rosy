import React from "react";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - NewLetter",
  description: "Administration",
};

const NewLetter = () => {
  return <Content />;
};

export default NewLetter;
