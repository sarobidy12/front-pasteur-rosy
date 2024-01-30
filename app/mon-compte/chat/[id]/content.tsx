"use client";
import React, { FC, memo, useEffect } from "react";
import UserConnected from "./Component/userConnected";
import useUser from "@/app/Store/User";
import { useRouter } from "next/navigation";
import Message from "./Component/message";
import InputMessage from "./Component/inputMessage";
import { urlApiSocket } from "@/app/Utils/api";
import socketIOClient from "socket.io-client";
import style from "./style.module.css";
import useMessage from "@/app/Store/Message";
import { Rowdies } from "next/font/google";

const rowdies_ = Rowdies({ subsets: ["latin"], weight: "700" });

interface Props {
  title: string;
  description: string;
  canal: string;
}

const socket = socketIOClient(urlApiSocket);

const page: FC<Props> = memo(({ title, description, canal }) => {
  const { info } = useUser();
  const { getMessage } = useMessage();

  const { push } = useRouter();

  if (!info._id) {
    push("/se-connecter");
  }
  
  const handleSend = (message: string) => {
    socket.emit("send-message", {
      path: info.img,
      user: info._id,
      message: message,
      canal: canal,
    });
  };

  const reciveMessage = (data: any) => {
    getMessage(data);
    const audio = new Audio("https://bigsoundbank.com/UPLOAD/mp3/2038.mp3");
    audio.play();
  };

  useEffect(() => {
    socket.on(canal, reciveMessage);
    return () => {
      socket.off(canal, reciveMessage);
    };
  }, [canal, reciveMessage]);

  return (
    <div className={style.root}>
      <div className={style.description}>
        <h2 className={rowdies_.className}>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <Message canal={canal} />
        <InputMessage handleSend={handleSend} />
      </div>
      <div>
        <UserConnected canal={canal} socket={socket} />
      </div>
    </div>
  );
});

export default page;
