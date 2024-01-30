import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Admin - Utilisateur",
  description: "Administration",
};

const Utilisateur = () => {
  return <Content />;
};

export default Utilisateur;
