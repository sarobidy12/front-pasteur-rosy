// EventList.js
import React, { FC } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import Chip from "./chip";
import { Rowdies } from "next/font/google";

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });

// Interface for the props of EventList, including the event data and ad image source
interface EventListProps {
  date: string;
  title: string;
  description: string;
  adImageSrc: string;
}

const EventList: FC<EventListProps> = ({
  date,
  title,
  description,
  adImageSrc,
}) => {
  return (
    <Link href={`/evenement/${title}`} className={styles.card}>
      <div className={styles.content}>
        <div>
          <Chip date={date} />
        </div>
        <div className={styles.description}>
          <h1 className={rowdies_.className}>{title}</h1>
          <ul>
            {description
              .split("-")
              .filter((x: any) => x !== "")
              .map((x: any, index) => (
                <li key={index}>{x}</li>
              ))}
          </ul>
        </div>
        <div className={styles.imgEvent}>
          <Image src={adImageSrc} alt={title} fill={true} />
        </div>
      </div>
    </Link>
  );
};

export default EventList;
