import React from "react";
import styles from "./product2.module.css";

export const Product2 = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h3 className={styles.title}>1- Polyester Yarn</h3>
        <ul>
          <li>DTY: 30D to 600D NIM, SIM, HIM</li>
          <li>FDY: 50D to 600D</li>
          <li>Polyester Spun Yarn: 20/1 to 50/1</li>
          <li>Polyester Sewing Thread: 20/2 to 60/2</li>
          <li>Polyester Recycled Yarn: 50D to 300D with GRS cer ficate.</li>
          <li>Polyester Covering Yarn (ACY): 75D + 20D to 600D</li>
        </ul>
        <h3 className={styles.title}>2- Cotton Yarn</h3>
        <ul>
          <li>Ne 7s Open End to 100s Combed and Combed Compact</li>
        </ul>
        <h3 className={styles.title}>3- Viscose</h3>
        <ul>
          <li>30/1 to 60/1 Ring Spun/Vortex for both kni ng and weaving.</li>
        </ul>
        <h3 className={styles.title}>4- Nylon</h3>
        <ul>
          <li>20/1 mono to 40/1 mono and Nylon DTY as well as FDY.</li>
        </ul>
        <h3 className={styles.title}>Fancy Items</h3>
        <p>
          Metallic yarns: MS type, MX type, ST type, Lurex, Cording and Gli
          eringCa onic yarns: 110D/72F Monica, Litchi, Zena, 50D Resham and so
          silk yarns.Polyester Kota 30D Raw White, Black and dyed.
        </p>
        <p>
          ATY: from 110D to 300D Raw White/Bright/Ca onic and dyed with variety
          of colours.Yarns for labels are available for both warp and we .
        </p>
        <h3 className={styles.title}>5- Carpet Yarns</h3>
        <ul>
          <li>300/2 SB</li>
          <li>300/2X 7PLY</li>
          <li>1400/2 SF</li>
          <li>200/14 DA</li>
          <li>2400/3 SPACE</li>
          <li>4500 GLORY</li>
        </ul>
      </div>
    </div>
  );
};
