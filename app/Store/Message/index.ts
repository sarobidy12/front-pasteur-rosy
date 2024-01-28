"use client";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { MessageSlice } from "./slice";
import style from "./style.module.css";
import { urlApiSocket } from "@/app/Utils/api";
import socketIOClient from "socket.io-client";

const socket = socketIOClient(urlApiSocket);

const useMessage = () => {
  const state: any = useSelector((state: RootState) => state.message);

  const dispatch = useDispatch();

  const setListMessage = (params: any[]) => {
    dispatch(MessageSlice.actions.setListMessage(params));
  };

  const setListUserConnected = (params: any[]) => {
    const list = [];
    const exist = [];

    for (let i = 0; i < params.length; i++) {
      if (!exist.includes(params[i].id)) {
        list.push(params[i]);
        exist.push(params[i].id);
      }
    }
    dispatch(MessageSlice.actions.setListUserConnected(list));
  };

  const pushMessage = (params: any) => {
    dispatch(MessageSlice.actions.pushMessage(params));
  };

  const getMessage = useCallback((message) => {
    pushMessage(message);
  }, []);

  return {
    setListMessage,
    setListUserConnected,
    getMessage,
    ...state,
  };
};

export default useMessage;
