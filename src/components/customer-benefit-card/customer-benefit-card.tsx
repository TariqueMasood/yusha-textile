import React from "react";
import styles from "./customer-benefit-card.module.css";

type CustomerBenefit = {
  customerImage: React.ReactNode;
  customerTitle: string;
  customerContent: string;
};

export const CustomerBenefitCard = (props: CustomerBenefit) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardIcon}>
        <span>{props.customerImage}</span>
      </div>
      <h3 className={styles.title}>{props.customerTitle}</h3>
      <div className={styles.content}>{props.customerContent}</div>
    </div>
  );
};
