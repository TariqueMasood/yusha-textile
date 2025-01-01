import React from "react";
import styles from "./about-us.module.css";
import Image from "next/image";

import aboutImg from "../../../public/images/about-img-1.jpg";

export const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.aboutImg}
              src={aboutImg}
              alt="about-image"
            />
          </div>
          <div className={styles.aboutContent}>
            <h1>About Us</h1>
            <h4>One star export house</h4>
            <p>
              We are a company that supplies Special Category of Yarns. We were
              incorporated in 2016 and have grown by 100% every year since. This
              has solely been because of our commitment to quality and customer
              satisfaction. We are also a member of government recognized export
              promotion councils like SRTEPC and SGCCI.
            </p>
            <p>
              The highly-diversified product range includes yarns which are
              resistant/non-resistant to dyeing and finishing procedures. The
              yarns are easily available in the shades, though special colors
              can be supplied on request. Following international preferences,
              our export packing and quality is of the Japanese type.
            </p>
            <p>
              Our commitment to quality and innovation offers an obvious
              advantage in terms of greater work efficiency, a rich variety of
              products, and elimination of knots and yarn breakage during
              weaving and knitting operations. The product range has been
              steadily expanded to include all the popular speciality yarns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
