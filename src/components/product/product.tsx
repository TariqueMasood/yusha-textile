import React from "react";
import styles from "./product.module.css";
import Image, { StaticImageData } from "next/image";

type ProductProps = {
  productImage: string | StaticImageData;
  imageTitle: string;
  productDetails: string;
};
export const Product = (props: ProductProps) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.content}>
        <div>
          <Image
            className={styles.productImg}
            src={props.productImage}
            alt="yarn-image"
          />
          <div className={styles.imageTitle}>{props.imageTitle}</div>
        </div>
        <div className={styles.productDetail}>{props.productDetails}</div>
      </div>
    </div>
  );
};
