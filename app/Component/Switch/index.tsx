import React from "react";
import styles from "./style.module.css";

interface SwitchProps {
  checked: boolean;
  name: string;
  onChange: (e: any) => void;
  
}

const Switch: React.FC<SwitchProps> = ({ name, checked, onChange }) => {
  const handleChange = (e: any) => onChange({ target: { name: name, value: e.target.checked } });
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
