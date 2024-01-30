"use client";
import { useRouter } from "next/navigation";
import useUser from "@/app/Store/User";

const Redirect = () => {
  const { info } = useUser();

  const { push } = useRouter();

  if (!info._id) {
    push("/se-connecter");
  }

  return <></>;
};

export default Redirect;
