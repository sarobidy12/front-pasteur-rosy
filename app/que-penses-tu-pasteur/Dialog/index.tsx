"use client";
import React, { memo, useEffect } from "react";
import Dialog from "@/app/Component/Dialog";
import useThinkingPastor from "@/app/Store/ThinkingPastor";
import style from "./style.module.css";
import PreviewRenderer from "@/app/Component/Html";

const DialogAnswer = memo(function DialogAnswer() {
  const { handleToggle, openDialog, selected } = useThinkingPastor();

  useEffect(() => {
    if (openDialog) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openDialog]);
  return (
    <Dialog open={openDialog} onClose={handleToggle} middleWidth={true}>
      <div className="m-b-10">
        <div className={style.root}>
          <h1>{selected.resumeQuestion || ""}</h1>
          <p>{selected.message}</p>
          <div className={style.answer}>
            <h4>Reponse</h4>
            {selected.linkVideo &&
              selected.linkVideo.includes("https://youtu.be") && (
                <iframe
                  src={selected.linkVideo.replace(
                    "https://youtu.be",
                    "https://www.youtube.com/embed"
                  )}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className={style.iframe}
                ></iframe>
              )}
            {selected?.answer && <PreviewRenderer data={selected?.answer} />}
          </div>
        </div>
      </div>
    </Dialog>
  );
});

export default DialogAnswer;
