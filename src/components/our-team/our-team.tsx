import React from "react";
import styles from "./our-team.module.css";

export const Ourteam = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h3 className={styles.title}>Our Team</h3>
        <p>
          We comprise a team of individuals with backgrounds in management,
          engineering, and marketing.
        </p>
        <p>
          We harness the collective knowledge and experience of our team to
          develop world-class products, strategies our market targets, and
          ultimately deliver a seamless customer experience.
        </p>
      </div>
    </div>
  );
};
