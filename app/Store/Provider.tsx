"use client";
import React, { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./index";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  children: ReactNode;
}

const ProviderRedux: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default ProviderRedux;
