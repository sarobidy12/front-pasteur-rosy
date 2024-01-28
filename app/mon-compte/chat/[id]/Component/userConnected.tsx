"use client";
import React, { FC, memo, useEffect, useLayoutEffect } from "react";
import useMessage from "@/app/Store/Message";
import useUser from "@/app/Store/User";
import style from "../style.module.css";
import Image from "next/image";
import { img } from "@/app/Utils/img";

interface Props {
  canal: string;
  socket: any;
}

const useConnected: FC<Props> = memo(({ canal, socket }) => {
  const { setListUserConnected, listUserConnected } = useMessage();

  const { info } = useUser();
  useEffect(() => {
    socket.emit("user-connect", {
      canal: canal,
      userId: info._id,
      avatar: info.img,
      username: `${info.firstName} ${info.lastName}`,
    });
  }, [canal]);

  const getList = (usersConnected) =>
    setListUserConnected(
      usersConnected.filter((x: any) => x.userId !== info._id)
    );

  useEffect(() => {
    socket.on(`users-connected-${canal}`, getList);
    return () => {
      socket.off(`users-connected-${canal}`, getList);
    };
  }, [canal]);

  return (
    <div className={style.userConnected}>
      <h3>Liste des utilisateurs connectés</h3>
      <ul>
        {listUserConnected.map((x: any, index: number) => (
          <li key={index}>
            <div>
              <Image
                src={
                  x.avatar && x.avatar.includes("File")
                    ? img(x.avatar)
                    : "https://img.icons8.com/fluency-systems-filled/48/user-male-circle.png"
                }
                width={40}
                height={40}
                alt={x.username}
              />
            </div>
            <div>
              <h2>{x.username}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default useConnected;
