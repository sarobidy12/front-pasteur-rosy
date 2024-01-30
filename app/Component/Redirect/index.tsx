"use client";
import { useRouter } from "next/navigation";
import useUser from "@/app/Store/User";

const Redirect = () => {
  const { info } = useUser();

  const { push } = useRouter();

  if (!info?._id) {
    return push("/se-connecter");
  }

  return <div />;
};

export default Redirect;
