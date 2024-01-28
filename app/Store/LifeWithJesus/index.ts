"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { lifeWithJesusSlice } from "./slice";
import { callApi, UploadOneImg } from "@/app/Utils/api";

const useLifeWithJesus = () => {
  const state: any = useSelector((state: RootState) => state.lifeWithJesus);
  const dispatch = useDispatch();

  const setList = (params: any[]) => {
    dispatch(lifeWithJesusSlice.actions.setList(params));
  };

  const setSelected = (params: any) => {
    dispatch(lifeWithJesusSlice.actions.setSelected(params));
  };

  const setLoadingUpdated = (params: boolean) => {
    dispatch(lifeWithJesusSlice.actions.setLoadingUpdated(params));
  };

  const setLoading = (params: boolean) => {
    dispatch(lifeWithJesusSlice.actions.setLoading(params));
  };

  const setDescription = (params: any) => {
    dispatch(lifeWithJesusSlice.actions.setDescription(params));
  };

  const toggleOpenDialog = () => {
    dispatch(lifeWithJesusSlice.actions.setOpenDialog(!state.openDialog));
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

    const { path } = await UploadOneImg(
      "file/oneFile",
      files[0],
      "lifeWithJesus"
    );

    setSelected({
      ...state.selected,
      path: path || "",
    });
  };

  const onSave = async () => {
    setLoadingUpdated(true);
    try {
      const { data } = await callApi("lifeWithJesus", "POST", {
        ...state.selected,
        description: state.description,
      });
      setList([{ ...data }, ...state.list]);
      toggleOpenDialog()
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
        `lifeWithJesus/${state.selected._id}`,
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
      toggleOpenDialog()

    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdated(false);
    }
  };

  const getList = async (filter, page) => {
    setLoading(true);
    try {
      const { data } = await callApi(
        `lifeWithJesus?filter=${filter}&page=${page}`,
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
      const { data } = await callApi(`lifeWithJesus/${id}`, "DELETE", {});
      setList(state.list.filter((x: any) => x._id !== id));
      toggleOpenDialog()

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
    getList,
    onSubmit,
    onSelect,
    onDelete,
    createNew,
    handleChange,
    setDescription,
    toggleOpenDialog,
    handleChangeImage,
    ...state,
  };
};

export default useLifeWithJesus;
