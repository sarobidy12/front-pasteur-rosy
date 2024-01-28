"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { thinkingPastorSlice } from "./slice";
import { callApi } from "@/app/Utils/api";

const useThinkingPastor = () => {
  const state: any = useSelector((state: RootState) => state.thinkingPastor);
  const user: any = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const setSelected = (params: any) => {
    dispatch(thinkingPastorSlice.actions.setSelected(params));
  };

  const handleToggle = () => {
    dispatch(thinkingPastorSlice.actions.setOpenDialog(!state.openDialog));
  };

  const setListQuestionAsking = (params: any) => {
    dispatch(thinkingPastorSlice.actions.setListQuestionAsking(params));
  };

  const setDescription = (params: any) => {
    dispatch(thinkingPastorSlice.actions.setDescription(params));
  };

  const setLoading = (params: boolean) => {
    dispatch(thinkingPastorSlice.actions.setLoading(params));
  };

  const setLoadingUpdate = (params: boolean) => {
    dispatch(thinkingPastorSlice.actions.setLoadingUpdate(params));
  };

  const handleSelected = (params: any) => (e: any) => {
    e.preventDefault();
    setSelected(params);
    dispatch(thinkingPastorSlice.actions.setOpenDialog(true));
  };

  const selectQuestion = (params: any) => (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setSelected({ ...params, linkVideo: "", type: "answered" });
    setDescription([]);
    handleToggle();
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setSelected({
      ...state.selected,
      [name]: value,
    });
  };

  const getQuestion = async (
    filter: string,
    page: number,
    category: string
  ) => {
    setLoading(true);
    setListQuestionAsking([]);
    try {
      const { data } = await callApi(
        `whatYouThinkPasteur?answered=false&filter=${filter}&page=${page}&category=${category}`,
        "GET",
        {}
      );
      setListQuestionAsking([...data]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const saveQuestion = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setLoadingUpdate(true);
    try {
      const { data } = await callApi("whatYouThinkPasteur", "POST", {
        ...state.selected,
        name: `${user.info.firstName} ${user.info.lastName}`,
        email: user.info.email,
      });
      const list = [{ ...data }, ...state.listQuestionAsking];
      setListQuestionAsking(list);
      handleToggle();
      setSelected({});
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const answeredQuestion = async () => {
    setLoadingUpdate(true);

    try {
      const { data } = await callApi(
        `whatYouThinkPasteur/${state.selected._id}`,
        "PATCH",
        {
          ...state.selected,
          answer: state.description,
          answered: true,
        }
      );
      setListQuestionAsking(
        [...state.listQuestionAsking].filter((x: any) => x._id !== data._id)
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
      handleToggle();
    }
  };

  const onDelete = (id: string) => async (e: any) => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi(`whatYouThinkPasteur/${id}`, "DELETE", {});
      setListQuestionAsking(
        [...state.listQuestionAsking].filter((x: any) => x._id !== id)
      );
      handleToggle();
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (state.selected.type === "answered") {
      answeredQuestion();
      return;
    }
  };

  return {
    onSubmit,
    onChange,
    onDelete,
    setLoading,
    getQuestion,
    handleToggle,
    saveQuestion,
    selectQuestion,
    setDescription,
    handleSelected,
    setLoadingUpdate,
    setListQuestionAsking,
    ...state,
  };
};

export default useThinkingPastor;
