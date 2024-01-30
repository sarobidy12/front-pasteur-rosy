"use client";
import React, { FC } from "react";
import Link from "next/link";
import style from "./style.module.css";

const Share: FC = () => {
  (window as any).scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <h3 className={style.share}>Partager sur</h3>

      <div className="flex-row-center">
        <Link
          target="_blank"
          href={`https://twitter.com/share?url=${
            (window as any).location.href
          }&text=Share Buttons Demo&via=sunnyismoi`}
          title="Share on Twitter"
        >
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/facebook-new.png"
            alt="facebook-new"
          />
        </Link>

        <Link
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${
            (window as any).location.href
          }`}
          title="Share on Facebook"
        >
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/twitter-circled--v1.png"
            alt="twitter-circled--v1"
          />
        </Link>

        <Link
          target="_blank"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${
            (window as any).location.href
          }`}
          title="Share on LinkedIn"
        >
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="linkedin"
          />
        </Link>
      </div>
    </>
  );
};

export default Share;
