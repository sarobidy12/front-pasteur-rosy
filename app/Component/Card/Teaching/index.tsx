import { FC } from "react";
import styles from "./style.module.css";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const Card: FC<CardProps> = ({ imageUrl, title, description, link }) => {
  return (
    <Link
      href={link}
      className={styles.card}
      aria-describedby="describe-card-teaching"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p id="describe-card-teaching" className={styles.description}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
