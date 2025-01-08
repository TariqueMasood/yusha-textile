import React from "react";
import styles from "./customer-benefit.module.css";

export const CustomerBenefit = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h3 className={styles.title}>Customer Benefits</h3>
        <p>When our customer&apos;s satisfaction blooms, so does our joy.</p>
        <p>
          At Yusha, your sa sfac on is our priority, and we are dedicated to
          going above and beyond to ensure that you have a posi ve and rewarding
          experience with us.
        </p>

        <div>
          <ul className={styles.unorderList}>
            <li>Tailored Solutions</li>
            <p>
              We work one-on-one with our customers to understand their
              requirements and provide them with products tailored to their
              needs.
            </p>
            <li>Reliability & Consistency</li>
            <p>
              We aim to build a reliable and trustworthy environment with our
              customers through con nuous updates and transparent communica on
              regarding product readiness, pricing, quality, and delivery.
            </p>
            <li>Competitive Pricing</li>
            <p>
              We pre-plan our produc on program by engaging in forecas ng and
              trend analysis to offer you the best prices in the market without
              compromising on quality standards.
            </p>
            <li>Quality Assurance</li>
            <p>
              We follow rigorous steps and protocols to meet high-standard
              product quality. Our quality assurance process includes: raw
              material inspec on, produc on process control, tes ng, employee
              skill training, final product inspec on, customer feedback and
              complaint handling.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};
