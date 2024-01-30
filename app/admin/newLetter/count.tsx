"use client";
import React, { useEffect, useState } from "react";
import { callApi } from "@/app/Utils/api";

const CountFollower = () => {
  const [count, setCount] = useState<any>(0);
  const [loading, setLoading] = useState(true);

  const getCount = async () => {
    setLoading(true);
    try {
      const { data } = await callApi("newLetter/count", "GET", {});
      setCount(data.count);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <>
      {loading ? <div className="skeleton chip" /> : <h2>{count} Inscrit</h2>}
    </>
  );
};

export default CountFollower;
