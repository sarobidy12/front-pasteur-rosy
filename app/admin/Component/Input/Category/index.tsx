"use client";
import React, { FC, useState, useEffect } from "react";
import { urlApi } from "@/app/Utils/api";
import styles from "./style.module.css";

interface ICategorie {
  name: string;
  value: string;
  onChange: (e: any) => void;
  label: string;
}

const Categorie: FC<ICategorie> = ({ name, value, onChange, label }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCategory = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${urlApi}/category`);
      const json = await res.json();
      setList(json);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleChange = (e: any) => {
    onChange({
      target: {
        name: name,
        value: e.target.value,
      },
    });
  };
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <label className={styles.label}>{label}</label>
          <div className={styles.selectWrapper}>
            <select
              required={true}
              className="input-admin"
              value={value}
              onChange={handleChange}
            >
              <option>Selectionner la categorie</option>
              {list.map((x, index) => (
                <option key={index} value={x._id}>
                  {x.name}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default Categorie;
