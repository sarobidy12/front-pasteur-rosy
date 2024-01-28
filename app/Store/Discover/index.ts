"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { discoverSlice } from "./slice";
import { callApi, UploadOneImg } from "@/app/Utils/api";

const useDiscover = () => {
  const state: any = useSelector((state: RootState) => state.discover);
  const dispatch = useDispatch();

  const setList = (params: any[]) => {
    dispatch(discoverSlice.actions.setList(params));
  };

  const setSelected = (params: any) => {
    dispatch(discoverSlice.actions.setSelected(params));
  };

  const setLoadingUpdated = (params: boolean) => {
    dispatch(discoverSlice.actions.setLoadingUpdated(params));
  };

  const setLoading = (params: boolean) => {
    dispatch(discoverSlice.actions.setLoading(params));
  };

  const setDescription = (params: any) => {
    dispatch(discoverSlice.actions.setDescription(params));
  };

  const toggleOpenDialog = () => {
    dispatch(discoverSlice.actions.setOpenDialog(!state.openDialog));
  };

  const createNew = () => {
    setSelected({ type: "create" });
    setDescription(null);
    toggleOpenDialog();
  };

  const onSelect = (params: any) => (e: any) => {
    setSelected({ ...params, type: "update" });
    setDescription(params.description);
    toggleOpenDialog();
  };

  const handleChange = (params: any) => {
    const { name, value } = params.target;

    const newData = {
      ...state.selected,
      [name]: value,
    };
    setSelected({
      ...newData,
    });
  };

  const handleChangeImage = async (params: any) => {
    const { name, files } = params.target;

    const { path } = await UploadOneImg("file/oneFile", files[0], "discover");

    setSelected({
      ...state.selected,
      path: path || "",
    });
  };

  const onSave = async () => {
    setLoadingUpdated(true);
    try {
      const { data } = await callApi("discover", "POST", {
        ...state.selected,
        description: state.description,
      });
      setList([{ ...data }, ...state.list]);
      toggleOpenDialog();
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdated(false);
    }
  };

  const onUpdate = async () => {
    setLoadingUpdated(true);
    try {
      const { data } = await callApi(
        `discover/${state.selected._id}`,
        "PATCH",
        {
          ...state.selected,
          description: state.description,
        }
      );

      const list = [...state.list];

      const index = list.findIndex((e: any) => e._id === state.selected._id);

      list[index] = data;

      setList(list);
      toggleOpenDialog();
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdated(false);
    }
  };

  const getList = async (filter: string, page: number) => {
    setLoading(true);
    try {
      const { data } = await callApi(
        `discover?filter=${filter}&page=${page}`,
        "GET",
        {}
      );
      setList(data);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onDelete = (id: string) => async (e: any) => {
    setLoadingUpdated(true);
    try {
      const { data } = await callApi(`discover/${id}`, "DELETE", {});
      setList(state.list.filter((x: any) => x._id !== id));
      toggleOpenDialog();
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdated(false);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (state.selected.type === "create") {
      onSave();
      return;
    }
    onUpdate();
  };

  return {
    onSubmit,
    handleChange,
    getList,
    onDelete,
    handleChangeImage,
    setDescription,
    toggleOpenDialog,
    createNew,
    onSelect,
    ...state,
  };
};

export default useDiscover;
