"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { podcastSlice } from "./slice";
import { callApi } from "@/app/Utils/api";
import { useCallback } from "react";

const usePodcast = () => {
  const state: any = useSelector((state: RootState) => state.podcast);
  const dispatch = useDispatch();

  const toggleDialog = () => {
    dispatch(podcastSlice.actions.setOpenDialog(!state.openDialog));
  };

  const setListPodcast = useCallback(
    (params: any) => {
      dispatch(podcastSlice.actions.setListPodcast(params));
    },
    [dispatch]
  );

  const setLoading = (params: boolean) => {
    dispatch(podcastSlice.actions.setLoading(params));
  };

  const setLoadingUpdate = (params: boolean) => {
    dispatch(podcastSlice.actions.setLoadingUpdate(params));
  };

  const setSelected = (params: any) => {
    dispatch(podcastSlice.actions.setSelected(params));
  };

  const onSelect = (params: any) => (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setSelected({ ...params, type: "update" });
    toggleDialog();
  };

  const createNew = (e: any) => {
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

  const getPodcast = async (filter: string, page: number, category: string) => {
    setLoading(true);
    setListPodcast([]);
    try {
      const { data } = await callApi(
        `podcast?filter=${filter}&page=${page}&category=${category}`,
        "GET",
        {}
      );
      setListPodcast(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const savePodcast = async () => {
    setLoadingUpdate(true);

    try {
      const { data } = await callApi("podcast", "POST", {
        ...state.selected,
      });
      setListPodcast([{ ...data }, ...state.listPodcast]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
      toggleDialog();
    }
  };

  const updatePodcast = async () => {
    setLoadingUpdate(true);

    try {
      const { data } = await callApi(`podcast/${state.selected._id}`, "PATCH", {
        ...state.selected,
      });

      const list = [...state.listPodcast];

      const index = list.findIndex((e: any) => e._id === state.selected._id);

      list[index] = data;

      setListPodcast(list);
      toggleDialog();
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
      toggleDialog();
    }
  };

  const onDelete = (id: string) => async (e: any) => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi(`podcast/${id}`, "DELETE", {});
      setListPodcast(state.listPodcast.filter((x: any) => x._id !== id));
      setLoadingUpdate(false);
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
      savePodcast();
      return;
    }
    updatePodcast();
  };

  return {
    onSelect,
    onSubmit,
    onChange,
    onDelete,
    setLoading,
    getPodcast,
    toggleDialog,
    savePodcast,
    updatePodcast,
    setLoadingUpdate,
    createNew,
    ...state,
  };
};

export default usePodcast;
