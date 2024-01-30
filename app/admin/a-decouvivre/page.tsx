import React from "react";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - a decouvrire",
  description: "Administration",
};
const page = () => {
  return <Content />;
};

export default page;
