"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { pictureSlice } from "./slice";
import { callApi, UploadImg } from "@/app/Utils/api";
import { useCallback } from "react";

const usePicture = (albumCurrent?: string) => {
  const state: any = useSelector((state: RootState) => state.picture);
  const dispatch = useDispatch();

  const setListPicture = useCallback(
    (params: any) => {
      dispatch(pictureSlice.actions.setListPicture(params));
    },
    [dispatch]
  );

  const setLoading = (params: boolean) => {
    dispatch(pictureSlice.actions.setLoading(params));
  };

  const setOpenDialog = (params: boolean) => {
    dispatch(pictureSlice.actions.setOpenDialog(params));
  };

  const setListToDeleted = (params: any[]) => {
    dispatch(pictureSlice.actions.setListToDeleted(params));
  };

  const handleCheckDeleted = (e: any) => {
    const { name, checked } = e.target;
    const list = state.listToDeleted || [];

    if (!list.includes(name) && checked) {
      setListToDeleted([...state.listToDeleted, name]);
      return;
    }

    if (list.includes(name) && !checked) {
      setListToDeleted(list.filter((x) => x !== name));
    }
  };

  const handleToggleModal = (e: string) => () => {
    setOpenDialog({
      ...state.openDialog,
      [e]: !state.openDialog[e],
    });
  };

  const setUploaded = (params: boolean) => {
    dispatch(pictureSlice.actions.setUploaded(params));
  };

  const setListAlbum = (params: any[]) => {
    dispatch(pictureSlice.actions.setListAlbum(params));
  };

  const setLoadingUpdate = (params: boolean) => {
    dispatch(pictureSlice.actions.setLoadingUpdate(params));
  };

  const deletePicture = async (e: any) => {
    setLoadingUpdate(true);
    try {
      const { data } = await callApi(`picture`, "DELETE", {
        list: state.listToDeleted,
      });
      setListPicture(
        state.listPicture.filter(
          (x: any) => !state.listToDeleted.includes(x._id)
        )
      );
      setListToDeleted([]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingUpdate(false);
    }
  };

  const getPicture = async (albumName: string) => {
    setLoading(true);
    setListPicture([]);
    try {
      const { data } = await callApi(`picture?album=${albumName}`, "GET", {});
      setListPicture(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const saveAlbum = async (name: string) => {
    return callApi("album/create", "POST", { name });
  };

  const getListAlbum = async () => {
    setLoading(true);
    setListAlbum([]);
    try {
      const { data } = await callApi(`album`, "GET", {});
      setListAlbum(data);
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles) => {
      setUploaded(false);
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("images", file);
      });

      try {
        const response = await UploadImg(
          `picture/upload?folder=${albumCurrent}`,
          formData
        );
        // Assuming the server responds with the uploaded file information
        const uploadedFiles = response.data;
        setUploaded(true);
        setListPicture([...uploadedFiles, ...state.listPicture]);
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    },
    [setListPicture, state]
  );

  const pushNewPhoto = (newPhoto: any[]) => {
    setListPicture([...newPhoto, ...state.listPicture]);
  };

  const handleFavorite = async (e: any) => {
    const { name, checked } = e.target;
    const index = state.listAlbum.findIndex((e: any) => e.name === name);

    const listAlbum = [...state.listAlbum];

    listAlbum[index] = {
      ...state.listAlbum[index],
      favorite: checked,
    };

    setListAlbum(listAlbum);
  };

  const saveFavoriteAlbum = async () => {
    return callApi("album/favory", "PATCH", {
      album: state.listAlbum.filter((x: any) => x.favorite),
    });
  };

  return {
    setListPicture,
    setLoading,
    getPicture,
    onDrop,
    saveAlbum,
    getListAlbum,
    handleFavorite,
    saveFavoriteAlbum,
    handleToggleModal,
    pushNewPhoto,
    handleCheckDeleted,
    deletePicture,
    ...state,
  };
};

export default usePicture;
