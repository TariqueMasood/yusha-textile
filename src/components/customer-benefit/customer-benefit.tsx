import React from "react";
import styles from "./customer-benefit.module.css";
import { CustomerBenefitCard } from "../customer-benefit-card/customer-benefit-card";
import { IoPricetagOutline, IoStopwatchOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { AiOutlineCheckCircle } from "react-icons/ai";

const customerBenefitData = [
  {
    id: 1,
    customerImage: <GiClothes />,
    customerTitle: "Tailored Solutions",
    customerContent:
      "We work one-on-one with our customers to understand their requirements and provide them with products tailored to their needs",
  },
  {
    id: 2,
    customerImage: <IoStopwatchOutline />,
    customerTitle: "Reliability & Consistency",
    customerContent:
      "We aim to build a reliable and trustworthy environment with our customers through con nuous updates and transparent communica on regarding product readiness, pricing, quality, and delivery.",
  },
  {
    id: 3,
    customerImage: <IoPricetagOutline />,
    customerTitle: "Competitive Pricing",
    customerContent:
      "We pre-plan our produc on program by engaging in forecas ng and              trend analysis to offer you the best prices in the market without              compromising on quality standards.",
  },
  {
    id: 4,
    customerImage: <AiOutlineCheckCircle />,
    customerTitle: "Quality Assurance",
    customerContent:
      "We follow rigorous steps and protocols to meet high-standard             product quality. Our quality assurance process includes: raw              material inspec on, produc on process control, tes ng, employee              skill training, final product inspec on, customer feedback and              complaint handling.",
  },
];

export const CustomerBenefit = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h3 className={styles.title}>Customer Benefits</h3>
        <p className={styles.titleContent}>
          When our customer&apos;s satisfaction blooms, so does our joy.At
          Yusha, your sa sfac on is our priority, and we are dedicated to going
          above and beyond to ensure that you have a posi ve and rewarding
          experience with us.
        </p>
        <div className={styles.cardContainer}>
          {customerBenefitData.map((data) => {
            return (
              <CustomerBenefitCard
                key={data.id}
                customerImage={data.customerImage}
                customerTitle={data.customerTitle}
                customerContent={data.customerContent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
