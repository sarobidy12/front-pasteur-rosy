"use client";
import Link from "next/link";
import React, { useState } from "react";
import style from "./style.module.css";
import { Rowdies } from "next/font/google";
import { usePathname } from "next/navigation";
import { callApi } from "@/app/Utils/api";

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({});
  const path = usePathname();

  if (path.includes("/admin")) {
    return <></>;
  }

  const handleChange = (e: any) => {
    setSelected((select) => ({
      ...select,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    try {
      await callApi("newLetter/add", "POST", { ...selected });
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={style.newLetter} data-aos="flip-down">
        <span className="material-symbols-outlined">mail</span>
        <h2>Newsletter</h2>
        <p>
          Inscrivez-vous à notre newsletter et recevez chaque matin "La Pensée
          du Jour", "Le verset du Jour - PassLeMot" et toutes les nouveautés
          TopMusic, TopTV, TopMessages, etc. David Nolent, notre directeur, vous
          dévoilera les coulisses, les projets et les nouveautés en exclusivité
          ! Restez connecté(e) !
        </p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre prenom"
            onChange={handleChange}
            required={true}
          />
          <input
            type="email"
            name="email"
            required={true}
            onChange={handleChange}
            placeholder="Votre address e-mail"
          />
          {loading ? (
            <div className="skeleton chip" />
          ) : (
            <button type="submit">Je m'inscris!</button>
          )}
        </form>
      </div>
      <div className={style.footer}>
        <div className={style.content}>
          <div data-aos="zoom-in">
            <h2 className={rowdies_.className}>Notre mission</h2>
            <p>
              Nous avons pour vocation de partager le message d’Amour et de
              Pardon de Dieu pour tous les Hommes et d'encourager les chrétiens
              à grandir dans leur foi, de devenir et de faire des disciples de
              Jésus-Christ.
            </p>
          </div>
          <div data-aos="zoom-in">
            <h2 className={rowdies_.className}>Incontournables</h2>
            <ul>
              <li>
                <Link href="/enseignement">Enseignement</Link>
              </li>
              <li>
                <Link href="/que-penses-tu-pasteur">Que penses-tu pasteur</Link>
              </li>
              <li>
                <Link href="/chretien-qui-fait-exploits">
                  Chretien qui fait exploits{" "}
                </Link>
              </li>
              <li>
                <Link href="/temoignage-de-sa-vie-avec-jesus">
                  Temoignage de sa vie avec jesus{" "}
                </Link>
              </li>
              <li>
                <Link href="/podcast">Podcast</Link>
              </li>
            </ul>
          </div>
          <div data-aos="zoom-in">
            <h2 className={rowdies_.className}>Découvrez aussi</h2>
            <ul>
              <li>
                <Link href="">Condition d'utilisation</Link>
              </li>
              <li>
                <Link href="/se-connecter">Connectez-vous</Link>
              </li>
              <li>
                <Link href="/s-inscrire">S'inscrire</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
