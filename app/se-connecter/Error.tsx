"use client";
import React from "react";
import useUser from "../Store/User";
import Error from "@/app/Component/Error";

const Error_: React.FC = () => {
  const { info, setInfo } = useUser();
  const handleClose = () => setInfo({});
  return (
    <Error open={info.type === "err"} onClose={handleClose}>
      <h3>Erreur de Connexion : Impossible d&apos;accéder à votre compte</h3>
      <p>
        Nous sommes désolés, mais une erreur s&apos;est produite lors de la
        tentative de connexion à votre compte. Veuillez vérifier les éléments
        suivants :
      </p>
      <ul>
        <li>
          Assurez-vous que votre nom d&apos;utilisateur et votre mot de passe
          sont corrects.
        </li>
        <li>
          Vérifiez votre connexion Internet pour vous assurer qu&apos;elle est
          stable.
        </li>
        <li>
          Si vous avez oublié votre mot de passe, utilisez l&apos;option
          &apos;Mot de passe oublié&apos; pour le réinitialiser.
        </li>
      </ul>
    </Error>
  );
};

export default Error_;
