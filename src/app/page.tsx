import { AboutUs } from "@/components/about-us/about-us";
import styles from "./page.module.css";
import { Hero } from "@/components/hero/hero";
import { Product } from "@/components/product/product";
import productImg1 from "../../public/images/kota-yarn.jpg";
import productImg2 from "../../public/images/monica-yarn.jpg";
import productImg3 from "../../public/images/dhupiane-yarn.jpg";
import productImg4 from "../../public/images/metallic-yarn.jpg";
import productImg5 from "../../public/images/metallic-yarn.jpg";
import productImg6 from "../../public/images/kota-yarn.jpg";
import productImg7 from "../../public/images/dhupiane-yarn.jpg";
import { ProductTitle } from "@/components/product-title/product-title";

const productData = [
  {
    id: 1,
    productImage: productImg1,
    productDetails:
      "We are capable of sourcing an excellent quality range of Kota yarn. It has been used in warping of Hand looms, Air Jet looms, Jacquard Looms, and Water Jet looms. Kota yarn will be offered at most competitive price. It is available in Semi Dull, Dope Dyed, and Bright Luster.",
  },
  {
    id: 2,
    productImage: productImg2,
    productDetails:
      "We are sourcing top quality Cationic Monica Yarn which is widely used in Bangladesh to produce best quality sarees and other related fabrics, which has high demand in Bangladeshi market. We are capable of getting very unique colors of Monica Yarn, which are well accepted in local market.",
  },
  {
    id: 3,
    productImage: productImg3,
    productDetails:
      "This is our speciality yarn which we have developed for our top grade saree/fabric manufacturers. It is a mixture of Cationic Monica and Monofilament to make it lucrative and shining like never before.",
  },
  {
    id: 4,
    productImage: productImg4,
    productDetails:
      "This is a new category of yarn which is made of DTY/FDY. It is conventional dyed form of the DTY/FDY yarn which is being used in weft, different kinds of lusters like Cationic/SD/Bright and various deniers are available.",
  },
  {
    id: 5,
    productImage: productImg5,
    productDetails:
      "Silk polyester has been used in Surat (India) textile market since many years for sarees and dupatta. Mainly it is being used for warping; it is conventional dyed and twisted, which gives it silk type of look as a fabric.",
  },
  {
    id: 6,
    productImage: productImg6,
    productDetails:
      "In Bangladesh people call it Jute Yarn, we have more than hundred shades for ATY/Dhupian in various lusters and deniers which is widely used in Bangladesh. Also we have developed space dyed yarn in ATY/Dhupian and Spray Dyeing Yarn with slub effect.",
  },
  {
    id: 7,
    productImage: productImg7,
    productDetails:
      "Metallic yarns are used in most domains of the textile industry such as circular and flat frame knitting, weaving, hosiery and embroidery. In addition, they also serve as a component in textile accessories, including military regalia, apparel, braids, laces, ribbons, and upholstery.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <AboutUs />
        <ProductTitle />
        <div className={`container ${styles.productContainer}`}>
          {productData.map((data) => {
            return (
              <Product
                key={data.id}
                productImage={data.productImage}
                productDetails={data.productDetails}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
