import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Admin - Vie avec jesus",
  description: "Administration",
};

const LifeWithJesus = () => {
  return <Content />;
};

export default LifeWithJesus;
