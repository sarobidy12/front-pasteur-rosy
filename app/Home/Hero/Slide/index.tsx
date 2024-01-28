"use client";
import React, { useState, useEffect, FC, useLayoutEffect } from "react";
import styles from "./style.module.css"; // Import your CSS module
import Image from "next/image";

interface Prpos {
  images: string[];
}

const ImageCarousel: FC<Prpos> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isload, setIsLoad] = useState(false);

  const handleLoad = () => setIsLoad(true);
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current image index
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 10 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className={`${styles.imageCarousel} ${isload ? styles.isLoad : ""} `}>
      <Image
        src={images[currentImage]}
        alt={`Image ${currentImage}`}
        fill={true}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default ImageCarousel;
