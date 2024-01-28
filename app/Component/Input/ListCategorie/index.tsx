"use client";
import React, { FC, useState, useEffect } from "react";
import { urlApi } from "@/app/Utils/api";
import style from "./style.module.css";

interface IListCategorie {
  name?: string;
  value: string;
  onChange: (e: any) => void;
}

const ListCategorie: FC<IListCategorie> = ({ name, value, onChange }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allCategory, setAllCategory] = useState(true);

  const getCategory = async (cat: boolean) => {
    setLoading(true);
    try {
      const res = await fetch(`${urlApi}/category?favory=${cat}`);
      const json = await res.json();
      setList(json);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory(allCategory);
  }, [allCategory]);

  const handleChange = (val: any) => (e: any) => {
    e.preventDefault();
    const rigth = value !== val ? val : "";
    onChange({
      target: {
        name: name,
        value: rigth,
      },
    });
  };

  const handleViewAll = () => setAllCategory(!allCategory);

  return (
    <div>
      {loading ? (
        <div className="skeleton horizontal" />
      ) : (
        <>
          {list.map((x, index) => (
            <div
              key={index}
              className={`${style.inlineCategory} ${
                value === x._id && style.active
              }`}
              onClick={handleChange(x._id)}
            >
              <div className={style.cardCategory}>
                <span className="material-symbols-outlined">{x.textIcon}</span>
                <div>{x.name}</div>
              </div>
            </div>
          ))}

          <div className={style.inlineCategory} onClick={handleViewAll}>
            <div className={style.cardCategory}>
              <span className="material-symbols-outlined">apps</span>
              <div>{!allCategory ? "Reduire" : "Plus de categorie"}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListCategorie;
