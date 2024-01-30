import Content from "./content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Album",
  description: "Administration",
};

const AdminPhoto = () => {
  return <Content />;
};

export default AdminPhoto;
