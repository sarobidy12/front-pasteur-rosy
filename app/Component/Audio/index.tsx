"use client";
import { useState, FC, useEffect } from "react";
import style from "./style.module.css";
import Marquee from "@/app/Component/Marquee";

interface Props {
  audioSrc: string;
  title: string;
  description: string;
}

const AudioPlayer: FC<Props> = ({ audioSrc, title, description }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState("0");

  useEffect(() => {
    setAudio(new Audio(audioSrc));
  }, [audioSrc]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audio) {
      const progressBar: any = document.getElementById("progressBar");

      audio.addEventListener("timeupdate", () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        setProgress(progress.toFixed(2));
        if (progress === 100) {
          setIsPlaying(false);
          setProgress("0");
        }
      });

      progressBar.addEventListener("input", function () {
        const newTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = newTime;
      });
    }
  }, [audio]);

  return (
    <div className={style.root}>
      <div className="space-between-center">
        <h2 className="text-white">{title}</h2>
        <div>
          <h2 className="text-white">
            {Math.round(audio?.currentTime || 0)} :{" "}
            {Math.round(audio?.duration || 0)}
          </h2>
        </div>
      </div>
      <div>
        <Marquee>
          <p className={style.description}>{description}</p>
        </Marquee>
      </div>
      <div className={style.contentRange}>
        <input
          type="range"
          id="progressBar"
          value={progress}
          max="100"
          className={style.inputRange}
        />
      </div>
      <div>
        <button onClick={handlePlayPause} className={style.button}>
          {isPlaying ? (
            <span className="material-symbols-outlined">pause</span>
          ) : (
            <span className="material-symbols-outlined">play_circle</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
