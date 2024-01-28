"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import axios from "axios";
import style from "./style.module.css";
import { urlApi } from "@/app/Utils/api";
import { img } from "@/app/Utils/img";

interface Props {
  name: string;
  folder: string;
  path: string;
  onChange: (e: any) => void;
  placeHolder?: string;
}

const UploadFile: FC<Props> = React.memo(function UploadFile({
  name,
  folder,
  path,
  placeHolder = "Ajouter une image",
  onChange,
}) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleChangeImage = async (e: any) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("images", e.target.files[0]);

    try {
      const response = await axios.post(
        `${urlApi}/file/oneFile?folder=${folder}`,
        formData,
        {
          onUploadProgress: (e: any) => {
            const pourcent = Math.round(e.progress * 100);
            setProgress(pourcent);
          },
          headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `${window.sessionStorage.getItem("token")}`,
          },
        }
      );

      // Assuming the server responds with the uploaded file information
      onChange({
        target: {
          name: name,
          value: response?.data?.path || "",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className={style.root}>
      {uploading ? (
        <h1>{progress}%</h1>
      ) : (
        <>
          <label htmlFor={`add-img-${name}`}>
            {path ? (
              <Image src={img(path)} alt={path} width={300} height={300} />
            ) : (
              placeHolder
            )}
          </label>
          <input
            type="file"
            className={style.hidden}
            name="path"
            id={`add-img-${name}`}
            onChange={handleChangeImage}
          />
        </>
      )}
    </div>
  );
});

export default UploadFile;
