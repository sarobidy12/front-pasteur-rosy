"use client";
import React, { FC } from "react";
import Dialog from "@/app/admin/Component/Dialog";
import useChat from "@/app/Store/Chat";

const DialogChat: FC = () => {
  const {
    selected,
    onChange,
    loadingUpdate,
    onSubmit,
    toggleDialog,
    openDialog,
    onDelete,
  } = useChat();

  return (
    <Dialog open={openDialog} onClose={toggleDialog}>
      <h2 className="text-center">
        {selected.type === "create" ? "Ajouter un" : "Modifer ce"} cannal de conversarion
      </h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Nom du canal</label>
          <input
            required={true}
            onChange={onChange}
            type="text"
            name="name"
            value={selected.name}
            placeholder="Nom du album"
            className="input-admin"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            required={true}
            className="input-admin"
            name="description"
            placeholder="Ajouter une description et le but du chat"
            value={selected?.description || ""}
            onChange={onChange}
          />
        </div>
        <div>
          {loadingUpdate ? (
            <div className="skeleton line" />
          ) : (
            <>
              <button type="submit" className="btn-admin">
                {selected.type === "create" ? "Ajouter" : "Modifer"}
              </button>
              <button
                className="btn-delete-admin"
                onClick={onDelete(selected._id)}
              >
                Supprimer
              </button>
            </>
          )}
        </div>
      </form>
    </Dialog>
  );
};

export default DialogChat;
