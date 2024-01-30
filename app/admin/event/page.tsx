import React from "react";
import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Evenement",
  description: "Administration",
};

const Event = () => {
  return <Content />;
};

export default Event;
