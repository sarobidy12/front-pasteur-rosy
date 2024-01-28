// components/Marquee.js
import React, { FC, ReactNode } from "react";
import styles from "./style.module.css"; // Import your module CSS file

interface IMarquee {
  children: ReactNode;
}
const Marquee: FC<IMarquee> = ({ children }) => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>{children}</div>
    </div>
  );
};

export default Marquee;
