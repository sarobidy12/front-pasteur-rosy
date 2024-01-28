"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { teachingSlice } from "./slice"; // Updated import
import { callApi, UploadOneImg } from "@/app/Utils/api";

const useTeaching = () => {
  // Updated function name
  const state: any = useSelector((state: RootState) => state.teaching); // Updated state reference

  const dispatch = useDispatch();

  const setList = (params: any[]) => {
    dispatch(teachingSlice.actions.setList(params)); // Updated action reference
  };

  const setSelected = (params: any) => {
    dispatch(teachingSlice.actions.setSelected(params)); // Updated action reference
  };

  const setLoadingUpdated = (params: boolean) => {
    dispatch(teachingSlice.actions.setLoadingUpdated(params)); // Updated action reference
  };

  const setLoading = (params: boolean) => {
    dispatch(teachingSlice.actions.setLoading(params)); // Updated action reference
  };

  const setDescription = (params: any) => {
    dispatch(teachingSlice.actions.setDescription(params)); // Updated action reference
  };

  const toggleOpenDialog = () => {
    dispatch(teachingSlice.actions.setOpenDialog(!state.openDialog)); // Updated action reference
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
    const { name, checked, value } = params.target;

    console.log("checked", checked);
    const newData = {
      ...state.selected,
      [name]: checked !== undefined ? checked : value,
    };
    setSelected({
      ...newData,
    });
  };

  const handleChecked = (params: any) => {
    const { name, checked } = params.target;

    setSelected({
      ...state.selected,
      [name]: checked,
    });
  };

  const handleChangeImage = async (params: any) => {
    const { name, files } = params.target;

    const { path } = await UploadOneImg(
      "file/oneFile",
      files[0],
      "teaching" // Updated string reference
    );

    setSelected({
      ...state.selected,
      path: path || "",
    });
  };

  const onSave = async () => {
    setLoadingUpdated(true);
    try {
      const { data } = await callApi("teaching", "POST", {
        // Updated endpoint reference
        ...state.selected,
        description: state.description,
      });
      setList([{ ...data }, ...state.list]);
    } catch (err: any) {
      console.error(err);
    } finally {
      toggleOpenDialog();
      setLoadingUpdated(false);
    }
  };

  const onUpdate = async () => {
    setLoadingUpdated(true);
    try {
      const { data } = await callApi(
        `teaching/${state.selected._id}`,
        "PATCH",
        {
          // Updated endpoint reference
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
      toggleOpenDialog();
      setLoadingUpdated(false);
    }
  };

  const getList = async (filter: string, page: number, category: string) => {
    setLoading(true);
    try {
      const { data } = await callApi(
        `teaching?filter=${filter}&page=${page}&category=${category}`,
        "GET",
        {}
      ); // Updated endpoint reference
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
      const { data } = await callApi(`teaching/${id}`, "DELETE", {}); // Updated endpoint reference
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
    handleChecked,
    createNew,
    onSelect,
    ...state,
  };
};

export default useTeaching; // Updated export
