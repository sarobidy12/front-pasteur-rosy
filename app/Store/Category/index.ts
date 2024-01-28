"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { categorySlice } from "./slice";
import { callApi } from "@/app/Utils/api";
import { useCallback } from "react";

const useCategory = () => {
  const state: any = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  const toggleDialog = () => {
    dispatch(categorySlice.actions.setOpenDialog(!state.openDialog));
  };

  const setListCategory = useCallback(
    (params: any) => {
      dispatch(categorySlice.actions.setListCategory(params));
    },
    [dispatch]
  );

  const setLoading = (params: boolean) => {
    dispatch(categorySlice.actions.setLoading(params));
  };

  const setLoadingUpdateCategory = (params: boolean) => {
    dispatch(categorySlice.actions.setLoadingUpdateCategory(params));
  };

  const setSelected = (params: any) => {
    dispatch(categorySlice.actions.setSelected(params));
  };

  const onSelect = (params: any) => (e: any) => {
    setSelected({ ...params, type: "update" });
    toggleDialog();
  };

  const onCreate = (e: any) => {
    setSelected({ type: "create" });
    toggleDialog();
  };

  const onChange = (e: any) => {
    const { name, checked, value } = e.target;
    setSelected({
      ...state.selected,
      [name]: checked !== undefined ? checked : value,
    });
  };

  const onChecked = (e: any) => {
    const { name, checked } = e.target;
    setSelected({
      ...state.selected,
      [name]: checked,
    });
  };

  const getCategory = async () => {
    setLoading(true);
    setListCategory([]);
    try {
      const { data } = await callApi(`category`, "GET", {});
      setListCategory(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const saveCategory = async () => {
    setLoadingUpdateCategory(true);

    try {
      const { data } = await callApi("category", "POST", {
        ...state.selected,
      });
      setListCategory([{ ...data }, ...state.listCategory]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingUpdateCategory(false);
      toggleDialog();
    }
  };

  const updateCategory = async () => {
    setLoadingUpdateCategory(true);
    try {
      const { data } = await callApi(
        `category/${state.selected._id}`,
        "PATCH",
        {
          ...state.selected,
        }
      );
      const list = [...state.listCategory];
      const index = list.findIndex((e: any) => e._id === state.selected._id);
      list[index] = data;
      setListCategory(list);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingUpdateCategory(false);
      toggleDialog();
    }
  };

  const onDelete = async (id: string) => {
    setLoadingUpdateCategory(true);
    try {
      const { data } = await callApi(`category/${id}`, "DELETE", {});
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdateCategory(false);
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
    getCategory,
    toggleDialog,
    saveCategory,
    updateCategory,
    setLoadingUpdateCategory,
    onSelect,
    setSelected,
    onCreate,
    onChecked,
    ...state,
  };
};

export default useCategory;
