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
  path: any[];
  onChange: (e: any) => void;
  placeHolder?: string;
}

const UploadMore: FC<Props> = React.memo(function UploadMore({
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
    console.log(" e.target.files", e.target.files.length);
    console.log(" e.target.files", e.target.files);
    [...e.target.files].forEach((file) => {
      formData.append("images", file);
    });
    try {
      const response = await axios.post(
        `${urlApi}/picture/upload?folder=${folder}`,
        formData,
        {
          onUploadProgress: (e: any) => {
            const pourcent = Math.round(e.progress * 100);
            console.log("e", pourcent);
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
          value: response?.data || "",
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
        <h1>{progress || 0}%</h1>
      ) : (
        <>
          <label htmlFor={`add-img-${name}`}>
            {path.length > 0 ? (
              <>
                {path.map((x: any) => (
                  <Image
                    src={img(x.path)}
                    alt={x.path}
                    width={300}
                    height={300}
                  />
                ))}
              </>
            ) : (
              placeHolder
            )}
          </label>
          <input
            multiple={true}
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

export default UploadMore;
