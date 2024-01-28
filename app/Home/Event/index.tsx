// EventList.js
"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./style.module.css";
import EventCard from "@/app/Component/Card/Event";
import { urlApi } from "@/app/Utils/api";
import { img } from "@/app/Utils/img";
import { Rowdies } from "next/font/google";

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });

const EventList: FC = () => {
  const [listEvent, setListEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const getEvent = async () => {
    try {
      const fetching = await fetch(`${urlApi}/event`, { cache: "no-store" });
      const json = await fetching.json();
      setListEvent(json);
      setLoading(false);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentHeader}>
          <h2 className={`${styles.title} ${rowdies_.className}`}>
            <span className="material-symbols-outlined">edit_calendar</span>
            Les evenements
          </h2>
          {loading ? (
            <>
              <div className="skeleton card-horizontal" />
              <br />
              <div className="skeleton card-horizontal" />
              <br />
              <div className="skeleton card-horizontal" />
              <br />
              <div className="skeleton card-horizontal" />
            </>
          ) : (
            <>
              {listEvent.map((x: any, index: number) => (
                <div data-aos="flip-up" key={index}>
                  <EventCard
                    date={x.date}
                    description={x.shortDescription}
                    title={x.title}
                    adImageSrc={img(x.path)}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EventList;
