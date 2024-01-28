"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { EventSlice } from "./slice";
import { callApi } from "@/app/Utils/api";
import { useCallback } from "react";

const useEvent = () => {
  const state: any = useSelector((state: RootState) => state.event);
  const dispatch = useDispatch();

  const setListEvent = useCallback(
    (params: any) => {
      dispatch(EventSlice.actions.setListEvent(params));
    },
    [dispatch]
  );

  const setLoading = (params: boolean) => {
    dispatch(EventSlice.actions.setLoading(params));
  };

  const handleToggle = () => {
    dispatch(EventSlice.actions.setOpenDialog(!state.openDialog));
  };

  const setLoadingListEventCategory = (params: boolean) => {
    dispatch(EventSlice.actions.setLoadingListEventCategory(params));
  };

  const setSelected = (params: any) => {
    dispatch(EventSlice.actions.setSelected(params));
  };

  const setDescription = (params: any) => {
    dispatch(EventSlice.actions.setDescription(params));
  };

  const onSelect = (params: any) => (e: any) => {
    setSelected({ ...params, type: "update", date: params.date.split("T")[0] });
    setDescription(params.description);
    handleToggle();
  };

  const createNew = (e: any) => {
    setSelected({ type: "create" });
    setDescription(null);
    handleToggle();
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setSelected({
      ...state.selected,
      [name]: value,
    });
  };

  const getEvent = async () => {
    setLoading(true);
    setListEvent([]);
    try {
      const { data } = await callApi(`event`, "GET", {});
      setListEvent(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const saveEvent = async () => {
    setLoadingListEventCategory(true);

    try {
      const { data } = await callApi("event", "POST", {
        ...state.selected,
        description: state.description,
      });
      setListEvent([{ ...data }, ...state.listEvent]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingListEventCategory(false);
    }
  };

  const updateEvent = async () => {
    setLoadingListEventCategory(true);

    try {
      const { data } = await callApi(`event/${state.selected._id}`, "PATCH", {
        ...state.selected,
        description: state.description,
      });

      const list = [...state.listEvent];

      const index = list.findIndex((e: any) => e._id === state.selected._id);

      list[index] = data;

      setListEvent(list);
      handleToggle();
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingListEventCategory(false);
    }
  };

  const onDelete = (id: string) => async (e: any) => {
    setLoadingListEventCategory(true);
    try {
      const { data } = await callApi(`event/${id}`, "DELETE", {});
      setListEvent(state.listEvent.filter((x: any) => x._id !== id));
      handleToggle();
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingListEventCategory(false);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (state.selected.type === "create") {
      saveEvent();
      return;
    }
    updateEvent();
  };

  return {
    onSubmit,
    onChange,
    setLoading,
    getEvent,
    setDescription,
    setLoadingListEventCategory,
    handleToggle,
    onDelete,
    onSelect,
    createNew,
    ...state,
  };
};

export default useEvent;
