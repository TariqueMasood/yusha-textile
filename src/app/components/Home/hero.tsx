import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

import bannerImg from "../../../../public/images/banner1.jpg";

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={bannerImg}
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      ></Image>
      <h1 className={styles.bannerTitle}>
        Transform Skeins <br /> Into Stunning Creations
      </h1>
    </div>
  );
};
