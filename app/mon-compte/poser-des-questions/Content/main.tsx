"use client";
import React, { memo, useState } from "react";
import Category from "@/app/Component/Input/ListCategorie";
import useUser from "@/app/Store/User/index";
import Switch from "@/app/Component/Switch";
import Child from "./child";
import Form from "./form";
import style from "./style.module.css";

const Content = memo(function Content() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  const [answered, setAnswered] = useState(false);
  const handleChange = (e: any) => setFilter(e.target.value);
  const handleChangeCategory = (e: any) => setCategory(e.target.value);
  const handleToggle = (e: any) => setAnswered(e.target.value);
  const next = (e: any) => setPage(page + 1);
  const back = (e: any) => setPage(page - 1);
  const { info } = useUser();
  return (
    <div>
      <div className="head">
        <div className="container">
          <input type="text" onChange={handleChange} className="inputSearch" />
          <h2 className="text-white">Poser des questions au pasteur.</h2>
          <p className="text-white">
            Église Connectée est une application novatrice qui vise à renforcer
            la connexion spirituelle en intégrant les enseignements pastoraux
            avec les possibilités offertes par la technologie moderne.
          </p>
          <Category onChange={handleChangeCategory} value={category} />
        </div>
      </div>

      <div className="container m-b-10 m-t-5">
        <Form />

        <div className={style.switch}>
          <Switch onChange={handleToggle} name="switch" checked={answered} />
          <span>{answered ? "Repondu" : "Pas encore repondu"}</span>
        </div>

        <Child
          page={page}
          filter={filter}
          category={category}
          mail={info.email}
          answered={answered}
        />
        <div className="space-between-center">
          <button
            onClick={back}
            className="btn-pagination"
            disabled={page <= 1}
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
            Precedent
          </button>
          <button onClick={next} className="btn-pagination">
            <div>Suivant </div>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Content;
