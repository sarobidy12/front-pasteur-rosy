"use client";
import React, { FC, useState, useEffect, memo } from "react";
import { urlApi } from "@/app/Utils/api";

interface ICategorie {
  name?: string;
  value: string;
  onChange: (e: any) => void;
  label?: string;
}

const Categorie: FC<ICategorie> = memo(({ name, value, onChange, label }) => {
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
        <div className="skeleton horizontal" />
      ) : (
        <>
          <label>{label}</label>
          <div>
            <select
              required={true}
              className="input-admin select"
              value={value}
              onChange={handleChange}
            >
              <option value="">Selectionner la categorie</option>
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
});

Categorie.displayName = "Categorie-select";

export default Categorie;
