"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { wordOfDaySlice } from "./slice";
import { callApi } from "@/app/Utils/api";

const useWordOfDay = () => {
  const state: any = useSelector((state: RootState) => state.wordOfDay);
  const dispatch = useDispatch();

  const setLoading = (params: boolean) => {
    dispatch(wordOfDaySlice.actions.setLoading(params));
  };

  const setLoadingUpdate = (params: boolean) => {
    dispatch(wordOfDaySlice.actions.setLoadingUpdate(params));
  };

  const setId = (params: string) => {
    dispatch(wordOfDaySlice.actions.setId(params));
  };

  const setContent = (params: any) => {
    dispatch(wordOfDaySlice.actions.setContent(params));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setContent({
      ...state.content,
      [name]: value,
    });
  };

  const createWordOfDay = async () => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi("wordOfDay", "POST", {
        ...state.content,
      });
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const updateWordOfDay = async () => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi(`wordOfDay/${state.id}`, "PATCH", {
        ...state.content,
      });
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const getWordOfDay = async () => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi("wordOfDay", "GET", {});
      setContent({ ...data });
      setId(data._id);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setLoadingUpdate(true);
    if (state?.id) {
      updateWordOfDay();
      return;
    }
    createWordOfDay();
  };

  return {
    onSubmit,
    setLoading,
    setContent,
    getWordOfDay,
    createWordOfDay,
    updateWordOfDay,
    handleChange,
    ...state,
  };
};

export default useWordOfDay;
