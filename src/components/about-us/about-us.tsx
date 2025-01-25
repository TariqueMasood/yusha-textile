import React from "react";
import styles from "./about-us.module.css";
import Image from "next/image";

import aboutImg from "../../../public/images/about-image.jpg";

export const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <div className={styles.aboutContent}>
            <h1>About Us</h1>
            <h4>One star export house</h4>
            <p>
              Yusha, a brand opera ng under the legal en ty Kartopack Clothing
              Private Limited, was founded in 2018. Our headquarters are
              situated in Maunath Bhanjan, Varanasi, U ar Pradesh, India. Over
              me, we have experienced consistent growth in both domes c and
              interna onal markets.
            </p>
            <p>
              We are a company specializing in customized yarn varie es. Our
              roots are deeply embedded in the tex les, yarns, garments, and
              sarees industry. Our ancestral business in yarns, and clothing has
              provided a solid founda on, enabling us to expand and establish a
              strong presence in the domes c market, par cularly in South and
              East India. With extensive experience in the yarn industry, we
              have built strong rela onships with yarn mills both in India and
              interna onally.
            </p>
            <p>
              We have established our presence in Nepal, Indonesia, Bangladesh,
              and China for our yarn business. Our highly diversified product
              range includes yarns that are either resistant or non-resistant to
              dyeing and finishing processes. These yarns are readily available
              in various shades, with special colors available upon request. We
              ensure that our export packaging and quality meet the specific
              preferences of our clients. Our dedica on to quality and innova on
              provides a clear advantage, resul ng in increased work efficiency,
              a diverse product range, and minimizing the impacts of knots and
              yarn breakage during weaving and kni ng opera ons. We con nuously
              expand our product offerings to meet market demands.
            </p>
          </div>
          <div className={styles.aboutImg}>
            <Image src={aboutImg} alt="about-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
