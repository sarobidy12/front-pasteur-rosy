"use client";
import React, { FC, useEffect } from "react";
import Dialog from "@/app/admin/Component/Dialog";
import useCategory from "@/app/Store/Category";

const DialogCategory: FC = () => {
  const {
    selected,
    onChange,
    loadingUpdateCategory,
    onSubmit,
    toggleDialog,
    openDialog,
    onChecked,
  } = useCategory();

  return (
    <Dialog open={openDialog} onClose={toggleDialog}>
      <h2>
        {selected.type === "create" ? "Ajouter un" : "Modifer ce"} categorie
      </h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Nom du cateogorie</label>
          <input
            type="text"
            name="name"
            value={selected?.name || ""}
            placeholder="Nom du album"
            className="input-admin"
            required={true}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Seo description</label>
          <textarea
            required={true}
            className="input-admin"
            name="seoDescription"
            placeholder="Ajouter l'SEO description"
            value={selected?.seoDescription || ""}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Icon</label>
          <input
            onChange={onChange}
            type="text"
            name="textIcon"
            value={selected?.textIcon || ""}
            placeholder="text des icons [google font]"
            className="input-admin"
            required={true}
          />
        </div>
        <div>
          <input
            id="favorite"
            type="checkbox"
            checked={!!selected.favorite}
            name="favorite"
            onChange={onChecked}
          />
          <label htmlFor="favorite">Categorie favorie</label>
        </div>
        <div>
          {loadingUpdateCategory ? (
            <div className="skeleton line" />
          ) : (
            <div className="flex-row-center">
              <button className="btn-admin" type="submit">
                {selected.type === "create" ? "Ajouter" : "Modifer"}
              </button>
            </div>
          )}
        </div>
      </form>
    </Dialog>
  );
};

export default DialogCategory;
