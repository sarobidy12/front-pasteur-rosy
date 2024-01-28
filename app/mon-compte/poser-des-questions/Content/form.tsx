import CategorySelect from "@/app/Component/Input/Category";
import useThinkingPastor from "@/app/Store/ThinkingPastor";
import PreviewRenderer from "@/app/Component/Html";
import React, { memo } from "react";
import { Raleway } from "next/font/google";
import Modal from "@/app/Component/Dialog";
import style from "./style.module.css";

const raleway = Raleway({ subsets: ["latin"] });

const Form = memo(function Form() {
  const { onChange, selected, handleToggle, openDialog, saveQuestion } =
    useThinkingPastor();


  return (
    <div>
      <button className={style.btnAsk} onClick={handleToggle}>
        Poser une question ?
      </button>
      <Modal
        open={openDialog}
        onClose={handleToggle}
        middleWidth={selected.answered !== undefined}
      >
        <div className={style.formAsk}>
          {selected.answered !== undefined ? (
            <>
              <h1>{selected?.resumeQuestion}</h1>
              <p>{selected?.message}</p>
              {(selected.linkVideo || selected?.answer) && (
                <div className={style.answer}>
                  <h3>Reponse</h3>
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
                  {selected?.answer && (
                    <PreviewRenderer data={selected?.answer} />
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              <h2>Poser une question</h2>
              <form onSubmit={saveQuestion}>
                <CategorySelect
                  name="category"
                  value={selected?.category || ""}
                  onChange={onChange}
                  label="Selection la categorie de votre question"
                />
                <input
                  type="text"
                  required={true}
                  onChange={onChange}
                  value={selected?.resumeQuestion}
                  name="resumeQuestion"
                  placeholder="Resumer de votre question"
                />
                <textarea
                  className={raleway.className}
                  placeholder="# ecriver votre question ici"
                  onChange={onChange}
                  name="message"
                  required={true}
                  value={selected?.message}
                />
                <button className={style.btnSend} type="submit">
                  Envoyer votre question
                </button>
              </form>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
});

export default Form;
