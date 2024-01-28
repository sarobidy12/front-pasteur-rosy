// CardText.js
import styles from "./style.module.css";

interface CardTextProps {
  name: string;
  text: string;
  onClick: (e: any) => void;
}

const CardText: React.FC<CardTextProps> = ({ name, text, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default CardText;
