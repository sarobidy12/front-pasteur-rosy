// PlantCard.js
import Image from "next/image";
import styles from "./style.module.css";

interface PlantCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: (e: any) => void;
}

const PlantCard: React.FC<PlantCardProps> = ({
  title,
  description,
  imageUrl,
  onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardPicWrap}>
        <Image
          src={imageUrl}
          alt={`Plant: ${title}`}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <ul>
          {description
            .split("-")
            .filter((x) => x !== "")
            .map((x: string) => (
              <li>{x}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PlantCard;
