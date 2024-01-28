import React, { FC } from "react";
import styles from "./hero.module.css";
import { Rowdies, Karma } from "next/font/google";
import Link from "next/link";
import Slide from "./Slide";

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });
const karma_ = Karma({ subsets: ["latin"], weight: "400" });

const Hero: FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1 className={rowdies_.className} data-aos="zoom-in-up">
          Pasteur Rosy Mihigo MBALA{" "}
        </h1>
        <p className={karma_.className} data-aos="zoom-in-up">
          <span className="material-symbols-outlined">format_quote</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          doloremque id ipsam commodi a quod tenetur quos fuga, blanditiis neque
          quisquam ipsum assumenda omnis cupiditate ipsa atque nemo nisi.
          <span className="material-symbols-outlined">format_quote</span>
        </p>
        <div>
          <div className="display-inline">
            <Link
              href="/biographie"
              className={`${styles.link} ${styles.fill}`}
              data-aos="zoom-in-up"
            >
              <span className="material-symbols-outlined">person_book</span>
              Lire la biographie du pasteur
            </Link>
          </div>
          <div className="display-inline">
            <Link
              href="https://cal.com/ranaivomanana-tahiana/rendez-avec-pasteur-rosy"
              className={`${styles.link} ${styles.empty}`}
              data-aos="zoom-in-up"
              target="_blank"
            >
              <span className="material-symbols-outlined">calendar_clock</span>
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer} data-aos="zoom-in">
        <Slide
          images={[
            "/pasteur-rosy-1.png",
            "/pasteur-rosy-2.png",
            "/pasteur-rosy-3.png",
            "/pasteur-rosy-4.png",
          ]}
        />
      </div>
    </div>
  );
};

export default Hero;
