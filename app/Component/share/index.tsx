"use client";
import React, { FC } from "react";
import Link from "next/link";
import style from "./style.module.css";

const Share: FC = () => {
  (window as any).scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <h3 className={style.share}>
        Parteger <span className="material-symbols-outlined">share</span>
      </h3>

      <Link
        target="_blank"
        className="share-btn share-btn-twitter"
        href={`https://twitter.com/share?url=${
          (window as any).location.href
        }&text=Share Buttons Demo&via=sunnyismoi`}
        title="Share on Twitter"
      >
        <span className="share-btn-icon"></span>
        <span className="share-btn-text">Twitter</span>
      </Link>

      <Link
        target="_blank"
        className="share-btn share-btn-facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${
          (window as any).location.href
        }`}
        title="Share on Facebook"
      >
        <span className="share-btn-icon"></span>
        <span className="share-btn-text">Facebook</span>
      </Link>

      <Link
        target="_blank"
        className="share-btn share-btn-linkedin"
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${
          (window as any).location.href
        }`}
        title="Share on LinkedIn"
      >
        <span className="share-btn-icon"></span>
        <span className="share-btn-text">LinkedIn</span>
      </Link>
    </>
  );
};

export default Share;
