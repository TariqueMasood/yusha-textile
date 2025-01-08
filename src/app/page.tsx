import { AboutUs } from "@/components/about-us/about-us";
import styles from "./page.module.css";
import { Hero } from "@/components/hero/hero";
import { Product } from "@/components/product/product";
import productImg1 from "../../public/images/kota-yarn.jpg";
import productImg2 from "../../public/images/monica-yarn.jpg";
import productImg3 from "../../public/images/dhupiane-yarn.jpg";
import productImg4 from "../../public/images/metallic-yarn.jpg";
import { ProductTitle } from "@/components/product-title/product-title";
import { Product2 } from "@/components/product2/product2";
import { Ourteam } from "@/components/our-team/our-team";
import { CustomerBenefit } from "@/components/customer-benefit/customer-benefit";

const productData = [
  {
    id: 1,
    productImage: productImg1,
    imageTitle: "kota yarn",
    productDetails:
      "(Polyester/Nylon): We believe in sourcing superior quality range of kota yarns, suitable for warping on hand looms, air jet looms, acquard looms, and ater jet looms. Our Kota yarn is available at the most competitive prices and comes in various finishes, including semi dull, dope dyed, and right luster. ",
  },
  {
    id: 2,
    productImage: productImg2,
    imageTitle: "monika gold yarn",
    productDetails:
      "We believe in sourcing premium quality monica gold yarn renowned for its exceptional performance and versatility. It is widely used in manufacturing of sarees.",
  },
  {
    id: 3,
    productImage: productImg3,
    imageTitle: "litchi yarn",
    productDetails:
      "We source this category of yarn which is a novel category of yarn made from Draw Textured Yarn (DTY) or Fully Drawn Yarn (FDY). It represents a conventionally dyed form of these yarns, designed for use in the weft (horizontal threads) of woven fabrics.",
  },
  {
    id: 4,
    productImage: productImg4,
    imageTitle: "metallic yarn",
    productDetails:
      "Metallic yarns are used in most domains of the textile industry such as circular and flat frame knitting, weaving, hosiery and embroidery. In addition, they also serve as a component in textile accessories, including military regalia, apparel, braids, laces, ribbons, and upholstery",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <AboutUs />
        <Ourteam />
        <CustomerBenefit />
        <ProductTitle />
        <div className={`container ${styles.productContainer}`}>
          {productData.map((data) => {
            return (
              <Product
                key={data.id}
                productImage={data.productImage}
                imageTitle={data.imageTitle}
                productDetails={data.productDetails}
              />
            );
          })}
        </div>
        <Product2 />
      </main>
    </div>
  );
}
