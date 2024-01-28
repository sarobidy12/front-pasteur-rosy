"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { bestCkristianSlice } from "./slice";
import { callApi, UploadOneImg } from "@/app/Utils/api";

const useBestCkristian = () => {
  const state: any = useSelector((state: RootState) => state.bestCkristian);
  const dispatch = useDispatch();

  const setList = (params: any[]) => {
    dispatch(bestCkristianSlice.actions.setList(params));
  };

  const handleToogleDialog = () => {
    dispatch(bestCkristianSlice.actions.setOpenDialog(!state.openDialog));
  };

  const setSelected = (params: any) => {
    dispatch(bestCkristianSlice.actions.setSelected(params));
  };

  const setLoadingUpdated = (params: boolean) => {
    dispatch(bestCkristianSlice.actions.setLoadingUpdated(params));
  };

  const setLoading = (params: boolean) => {
    dispatch(bestCkristianSlice.actions.setLoading(params));
  };

  const createNew = () => {
    setSelected({ type: "create" });
    setDescription(null);
    handleToogleDialog();
  };

  const onSelect = (params: any) => (e: any) => {
    setSelected(params);
    setDescription(params.description);
    handleToogleDialog();
  };

  const handleChange = (params: any) => {
    const { name, value } = params.target;
    setSelected({
      ...state.selected,
      [name]: value,
    });
  };

  const setDescription = (params: any) => {
    dispatch(bestCkristianSlice.actions.setDescription(params));
  };

  const handleChangeImage = async (params: any) => {
    const { name, files } = params.target;

    const { path } = await UploadOneImg(
      "file/oneFile",
      files[0],
      "bestCkristian"
    );

    setSelected({
      ...state.selected,
      path: path || "",
    });
  };

  const onSave = async () => {
    setLoadingUpdated(true);
    try {
      const { data } = await callApi("bestckristian", "POST", {
        ...state.selected,
        description: state.description,
      });
      setList([{ ...data }, ...state.list]);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdated(false);
      handleToogleDialog();
    }
  };

  const onUpdate = async () => {
    setLoadingUpdated(true);
    try {
      const { data } = await callApi(
        `bestckristian/${state.selected._id}`,
        "PATCH",
        {
          ...state.selected,
          description: state.description,
        }
      );

      const listAlbum = [...state.list];

      const index = listAlbum.findIndex(
        (e: any) => e._id === state.selected._id
      );

      listAlbum[index] = data;

      setList(listAlbum);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdated(false);
      handleToogleDialog();
    }
  };

  const getList = async (filter: string, page: number) => {
    setLoading(true);
    try {
      const { data } = await callApi(
        `bestckristian?filter=${filter}&page=${page}`,
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
      const { data } = await callApi(`bestckristian/${id}`, "DELETE", {});
      setList(state.list.filter((x: any) => x._id !== id));
      handleToogleDialog();
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
    getList,
    onDelete,
    onSelect,
    handleChange,
    setDescription,
    handleChangeImage,
    handleToogleDialog,
    createNew,
    ...state,
  };
};

export default useBestCkristian;
