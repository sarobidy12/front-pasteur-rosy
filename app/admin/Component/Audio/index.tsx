"use client";
import { useState, FC, useEffect } from "react";
import style from "./style.module.css";

interface Props {
  audioSrc: string;
}

const AudioPlayer: FC<Props> = ({ audioSrc }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio(audioSrc));
  }, [audioSrc]);

  const handlePlayPause = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={handlePlayPause} className={style.button}>
        {isPlaying ? (
          <span className="material-symbols-outlined">pause</span>
        ) : (
          <span className="material-symbols-outlined">play_circle</span>
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
