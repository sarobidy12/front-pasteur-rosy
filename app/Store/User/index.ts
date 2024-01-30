"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { UserSlice } from "./slice";
import { callApi } from "@/app/Utils/api";
import { useRouter } from "next/navigation";

const useUser = () => {
  const state: any = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const { push } = useRouter();

  const setInfo = (params: any) => {
    dispatch(UserSlice.actions.setInfo(params));
  };

  const setLoading = (params: boolean) => {
    dispatch(UserSlice.actions.setLoading(params));
  };

  const setCount = (params: number) => {
    dispatch(UserSlice.actions.setCount(params));
  };

  const toggleOpenDialog = () => {
    console.log("call");
    dispatch(UserSlice.actions.setOpenDialog(!state.openDialog));
  };

  const setLoadingUpdate = (params: boolean) => {
    dispatch(UserSlice.actions.setLoadingUpdate(params));
  };

  const setList = (params: any) => {
    dispatch(UserSlice.actions.setList(params));
  };

  const handleChange = (e: any) => {
    setInfo({
      ...state.info,
      [e.target.name]: e.target.value,
    });
  };

  const onLogin = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    try {
      const { data } = await callApi("user/login", "POST", { ...state.info });
      setInfo({
        ...state.info,
        ...data,
      });
      push("/mon-compte");
    } catch (err: any) {
      console.error(err);
      setInfo({
        ...state.info,
        type: "err",
      });
    } finally {
      setLoading(false);
    }
  };
  const onRegister = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (+state.info.codeInput !== +state.info.code) {
      setInfo({
        ...state.info,
        error: `le code est incorrect.`,
      });
      return;
    }
    setLoading(true);
    try {
      const { data } = await callApi("user/register", "POST", {
        ...state.info,
        password: state.info.password1,
      });
      setInfo(data);
      push("/mon-compte");
    } catch (err: any) {
      setInfo({
        ...state.info,
        error: `Une erreur est survenue, réessayez plus tard.`,
      });
    } finally {
      setLoading(false);
    }
  };

  const onComfirm = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    setInfo({ ...state.info, error: false });
    if (state.info.password1.trim() !== state.info.password2.trim()) {
      setInfo({
        ...state.info,
        error: `Les 2 mots de passe ne sont pas identiques. `,
      });
      return;
    }
    try {
      const { data } = await callApi("user/comfirm", "POST", {
        email: state.info.email,
        lastName: state.info.lastName,
      });
      handleChange({
        target: {
          name: "code",
          value: data.code,
        },
      });
    } catch (err: any) {
      setInfo({
        ...state.info,
        error: `Cette adresse mail "${state.info.email}" est déjà utilisée, veuillez utiliser une autre. `,
      });
    } finally {
      setLoading(false);
    }
  };

  const onSendMailResetPassowrd = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);

    try {
      const { data } = await callApi("user/sendMailResetPassowrd", "POST", {
        email: state.info.email,
      });

      setInfo(data);
    } catch (err: any) {
      setInfo({
        ...state.info,
        error: `Cette adresse mail "${state.info.email}" n'est inscrit chez nous. `,
      });
    } finally {
      setLoading(false);
    }
  };

  const onResetPassowrd = (token: string) => async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (state.info.password1.trim() !== state.info.password2.trim()) {
      setInfo({
        ...state.info,
        error: `Les 2 mots de passe ne sont pas identiques. `,
      });
      return;
    }
    setLoading(true);
    try {
      const { data } = await callApi("user/resetPassword", "PATCH", {
        token: token,
        password: state.info.password1.trim(),
      });
      setInfo(data);
    } catch (err: any) {
      setInfo({
        ...state.info,
        error: `Une erreur est survenue, Veuillier reessayer. `,
      });
    } finally {
      setLoading(false);
    }
  };

  const getConnected = () => {};

  const onUpdate = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (state.info.password1 && state.info.password2) {
      if (state.info.password1.trim() !== state.info.password2.trim()) {
        setInfo({
          ...state.info,
          error: `Les 2 mots de passe ne sont pas identiques. `,
        });
        return;
      }
    }

    setLoading(true);
    try {
      const { data } = await callApi(
        `user/udpdate/${state.info._id}`,
        "PATCH",
        {
          ...state.info,
          password: state.info.password1,
        }
      );
      setInfo({ success: "ok", ...data });
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getList = async (filter, page) => {
    setLoading(true);
    try {
      const { data } = await callApi(
        `user?filter=${filter}&page=${page}`,
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

  const getTotalUser = async (filter, page) => {
    try {
      const { data } = await callApi(`user/count`, "GET", {});
      setCount(data.count);
    } catch (err: any) {
      console.error(err);
    }
  };

  const createNew = () => {
    setInfo({ type: "create" });
    toggleOpenDialog();
  };

  const onSelect = (params: any) => (e: any) => {
    setInfo({ ...params, type: "update" });
    toggleOpenDialog();
  };

  const onDelete = (id: string) => async (e: any) => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi(`user/${id}`, "DELETE", {});
      setList(state.list.filter((x: any) => x._id !== id));
      toggleOpenDialog();
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const onBlock = (id: string) => async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setLoadingUpdate(true);
    try {
      const { data } = await callApi(`user/block-user/${id}`, "GET", {});
      const list = [...state.list];
      const index = list.findIndex((e: any) => e._id === state.info._id);
      list[index] = data;
      setList(list);
      toggleOpenDialog();
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const onCreate = async () => {
    setLoadingUpdate(true);
    setInfo({ ...state.info, err: false });
    try {
      const { data } = await callApi("user/admin-create", "POST", {
        ...state.info,
        password: "1234@",
      });
      setList([...state.list, { ...data }]);
      toggleOpenDialog();
    } catch (err: any) {
      setInfo({ ...state.info, err: "create" });
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const onPatch = async () => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi(
        `user/admin-udpdate/${state.info._id}`,
        "PATCH",
        {
          ...state.info,
        }
      );
      const list = [...state.list];
      const index = list.findIndex((e: any) => e._id === state.info._id);
      list[index] = data;
      setList(list);
      toggleOpenDialog();
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (state.info.type === "create") {
      onCreate();
      return;
    }
    onPatch();
  };

  return {
    onSubmit,
    createNew,
    onSelect,
    setInfo,
    onLogin,
    onUpdate,
    onComfirm,
    onRegister,
    getConnected,
    handleChange,
    onResetPassowrd,
    onSendMailResetPassowrd,
    getList,
    onBlock,
    getTotalUser,
    onDelete,
    toggleOpenDialog,
    ...state,
  };
};

export default useUser;
