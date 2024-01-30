"use client";
import { useRouter } from "next/navigation";
import useUser from "@/app/Store/User";

const Redirect = () => {
  const { info } = useUser();

  const { push } = useRouter();

  return <div>redirect</div>;
};

export default Redirect;
