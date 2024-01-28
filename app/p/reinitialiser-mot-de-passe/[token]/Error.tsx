"use client";
import React from "react";
import useUser from "@/app/Store/User";
import Error from "@/app/Component/Error";

const Error_: React.FC = () => {
  const { info, setInfo } = useUser();
  const handleClose = () => setInfo({});
  return (
    <Error open={info.error} onClose={handleClose}>
      <p>{info.error}</p>
    </Error>
  );
};

export default Error_;
