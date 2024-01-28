"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { chatSlice } from "./slice";
import { callApi } from "@/app/Utils/api";
import { useCallback } from "react";

const useChat = () => {
  const state: any = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();

  const toggleDialog = () => {
    dispatch(chatSlice.actions.setOpenDialog(!state.openDialog));
  };

  const setListChat = useCallback(
    (params: any) => {
      dispatch(chatSlice.actions.setListChat(params));
    },
    [dispatch]
  );

  const setLoading = (params: boolean) => {
    dispatch(chatSlice.actions.setLoading(params));
  };

  const setLoadingUpdate = (params: boolean) => {
    dispatch(chatSlice.actions.setLoadingUpdate(params));
  };

  const setSelected = (params: any) => {
    dispatch(chatSlice.actions.setSelected(params));
  };

  const clicked = (param: any) => (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setSelected({ ...param, type: "update" });
    toggleDialog();
  };

  const createNew = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setSelected({ type: "create" });
    toggleDialog();
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setSelected({
      ...state.selected,
      [name]: value,
    });
  };

  const getListChat = async () => {
    setLoading(true);
    setListChat([]);
    try {
      const { data } = await callApi("chat", "GET", {});
      setListChat(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const saveCategory = async () => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi("chat", "POST", {
        ...state.selected,
      });
      setListChat([{ ...data }, ...state.listChat]);
      toggleDialog();
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const updateCategory = async () => {
    setLoadingUpdate(true);

    try {
      const { data } = await callApi(`chat/${state.selected._id}`, "PATCH", {
        ...state.selected,
      });
      const list = [...state.listChat];
      const index = list.findIndex((e: any) => e._id === state.selected._id);
      list[index] = data;
      setListChat(list);
      toggleDialog();
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const onDelete = (id: string) => async (e: any) => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi(`chat/${id}`, "DELETE", {});
      setListChat(state.listChat.filter((x: any) => x._id !== id));
      toggleDialog();
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (state.selected.type === "create") {
      saveCategory();
      return;
    }
    updateCategory();
  };

  return {
    onSubmit,
    onChange,
    onDelete,
    setLoading,
    setListChat,
    toggleDialog,
    saveCategory,
    updateCategory,
    setLoadingUpdate,
    clicked,
    getListChat,
    createNew,
    ...state,
  };
};

export default useChat;
