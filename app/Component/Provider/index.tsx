// Header.js
"use client";
import React, { FC, ReactNode, useEffect } from "react";
import useUser from "@/app/Store/User";

interface IProvider {
  children: ReactNode;
}
const Provider: FC<IProvider> =  ({ children }) => {
  const { VerifyIfConnected } = useUser();

  useEffect(() => VerifyIfConnected(), []);

  return <>{children}</>;
};

export default Provider;
