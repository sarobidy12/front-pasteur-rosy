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

  return {
    setInfo,
    onLogin,
    onUpdate,
    onComfirm,
    onRegister,
    getConnected,
    handleChange,
    onResetPassowrd,
    onSendMailResetPassowrd,
    ...state,
  };
};

export default useUser;
