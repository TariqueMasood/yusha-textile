import React from "react";
import styles from "./product-title.module.css";

export const ProductTitle = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>Our Products</h1>
        <p>
          Our commitment to quality and innovation offers an obvious advantage
          in terms of greater work efficiency, a rich variety of products, and
          elimination of knots and yarn breakage during weaving and knitting
          operations.
        </p>
      </div>
    </div>
  );
};
