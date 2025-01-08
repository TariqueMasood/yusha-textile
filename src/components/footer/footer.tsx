import Link from "next/link";
import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <nav>
            <h4>Links</h4>
            <ul className={styles.list}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Product</Link>
              </li>
              <li>
                <Link href="#">People</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h4>Product</h4>
            <ul className={styles.list}>
              <li>
                <Link href="#">Kota Yarn</Link>
              </li>
              <li>
                <Link href="#">Monica Yarn</Link>
              </li>
              <li>
                <Link href="#">ATY Dyed/Dhupian</Link>
              </li>
              <li>
                <Link href="#">Litchi Yarn</Link>
              </li>
              <li>
                <Link href="#">Metallic Yarn</Link>
              </li>
            </ul>
          </nav>
          {/* <nav>
            <h4>Business Office</h4>
            <ul className={styles.list}>
              <li>
                <Link href="#">Lorem</Link>
              </li>
              <li>
                <Link href="#">Lorem</Link>
              </li>
              <li>
                <Link href="#">Lorem</Link>
              </li>
              <li>
                <Link href="#">Lorem</Link>
              </li>
            </ul>
          </nav> */}
          <div className={styles.contact}>
            <h4>Contact Details</h4>
            <div>
              <h2 className={styles.director}>Director: Monazir Ahsan</h2>
              <p className={styles.address}>
                Regd. Office: 223, hunsapura near dr.sarfraz <br />
                kopaganj (mau) U.P IND <br />
                (275305)
              </p>
              <p>
                Business Office: Above Chasma Ghar, <br /> Sadar Bazar, Near
                BATA Showroom <br /> Maunath Bhanjan 275101 Distt Mau U.P. INDIA
              </p>
              <br />
              <p>
                <Link href="tel:+91 9935177951">Phone: +91 9935177951</Link>
              </p>
              <p>
                Email:{" "}
                <Link href="mailto:kartopack.clothing2018@gmail.com">
                  kartopack.clothing2018@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialContainer}>
        <div className="container">
          <div className={styles.social}>
            <div className={styles.copyright}>
              <p>Copyright &copy; DesignStudio 2024.All Rights Reserved</p>
            </div>
            <div>
              <span>
                <Link href="#">
                  <FaInstagram />
                </Link>
              </span>
              <span>
                <Link href="#">
                  <FaTwitter />
                </Link>
              </span>
              <span>
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </span>
              <span>
                <Link href="#">
                  <FaLinkedin />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
