"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { BiographySlice } from "./slice";
import { callApi } from "@/app/Utils/api";

const useBiography = () => {
  const state: any = useSelector((state: RootState) => state.biography);
  const dispatch = useDispatch();

  const setLoading = (params: boolean) => {
    dispatch(BiographySlice.actions.setLoading(params));
  };

  const setLoadingUpdate = (params: boolean) => {
    dispatch(BiographySlice.actions.setLoadingUpdate(params));
  };

  const setId = (params: string) => {
    dispatch(BiographySlice.actions.setId(params));
  };

  const setContent = (params: any) => {
    dispatch(BiographySlice.actions.setContent(params));
  };

  const createBiography = async () => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi("biography", "POST", {
        content: state.content,
      });
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const updateBiography = async () => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi(`biography/${state.id}`, "PATCH", {
        content: state.content,
      });
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const getBiography = async () => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi("biography", "GET", {});
      setContent({ ...data.content });
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
      updateBiography();
      return;
    }
    createBiography();
  };

  return {
    onSubmit,
    setLoading,
    setContent,
    getBiography,
    createBiography,
    updateBiography,
    ...state,
  };
};

export default useBiography;
