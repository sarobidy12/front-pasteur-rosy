"use client";
import React, { useEffect } from "react";
import usePicture from "@/app/Store/Picture";

const Card = () => {
  const { getPicture, loading } = usePicture();

  useEffect(() => {
    getPicture();
  }, [getPicture]);

  return <div>{loading ? <h2>Loading...</h2> : <h1>Redux</h1>}</div>;
};

export default Card;
