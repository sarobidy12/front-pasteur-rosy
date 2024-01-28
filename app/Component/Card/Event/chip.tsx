import React from "react";
import styles from "./style.module.css";
import { Rowdies } from "next/font/google";
import moment from "moment";

moment.locale("Fr");

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });

interface Props {
  date: string;
}

const Chip: React.FC<Props> = ({ date }) => {
  return (
    <div className={`${styles.chip} ${rowdies_.className}`} data-aos="flip-up">
      <h1>{moment(date).format("DD")}</h1>
      <h2>{moment(date).format("MMMM")}</h2>
    </div>
  );
};

export default Chip;
