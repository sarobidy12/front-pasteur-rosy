import React, { FC } from "react";
import styles from "./discover.module.css";
import Link from "next/link";

const Discover: FC = () => {
  return (
    <div className={styles.gridContainer}>
      <Link
        className={styles.gridItem}
        href="enseignement"
        data-aos="flip-left"
      >
        <div className={styles.bgAbove}>
          <span className="material-symbols-outlined">cast_for_education</span>
          <h2 data-testid="redirect-enseignement">Enseignement</h2>
          <p>Decouvre tous les enseignements,sur la parole de dieu.</p>
        </div>
      </Link>
      <Link
        className={styles.gridItem}
        href="que-penses-tu-pasteur"
        data-aos="flip-up"
      >
        <div className={styles.bgAbove}>
          <span className="material-symbols-outlined">psychology_alt</span>
          <h2>Que penses-tu pasteur ?</h2>
          <p>Decouvre les question que autre en poser.</p>
        </div>
      </Link>
      <Link
        className={styles.gridItem}
        href="chretien-qui-fait-exploits"
        data-aos="flip-up"
      >
        <div className={styles.bgAbove}>
          <span className="material-symbols-outlined">military_tech</span>
          <h2>Chretien qui fait exploits</h2>
          <p>Decouver ses chretien qui on accompli des choses exceptionel.</p>
        </div>
      </Link>
      <Link
        className={styles.gridItem}
        href="temoignage-de-sa-vie-avec-jesus"
        data-aos="flip-up"
      >
        <div className={styles.bgAbove}>
          <span className="material-symbols-outlined">escalator_warning</span>
          <h2>Temoignage de sa vie avec jesus</h2>
          <p>Decouvre comment leur rencontre avec jesus a changer leur vie.</p>
        </div>
      </Link>
      <Link className={styles.gridItem} href="podcast" data-aos="flip-down">
        <div className={styles.bgAbove}>
          <span className="material-symbols-outlined">headphones</span>
          <h2>Podcast</h2>
          <p>Decouve tout notre aventures</p>
        </div>
      </Link>
      <div className={styles.endFLoating} />
    </div>
  );
};

export default Discover;
