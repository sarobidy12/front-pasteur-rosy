"use client";
import { redirect } from 'next/navigation'

import useUser from "@/app/Store/User";

const Redirect = () => {
  const { info } = useUser();

  if (!info?._id) {
    redirect("/se-connecter");
  }

  return <div />;
};

export default Redirect;
