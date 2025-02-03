"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import NavList from "../nav-list/nav-list";
import logo from "../../../public/images/yusha-logo.jpg";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { BsEnvelopeOpen, BsTelephone } from "react-icons/bs";

const TopHeader = () => {
  return (
    <div className="container">
      <div className={styles.topHeaderWrapper}>
        <div className={styles.locationIcon}>
          <MdLocationOn />
          <div>Hunsapura Near Dr.Sarfraz Kopaganj (MAU)</div>
        </div>
        <div className={styles.phoneNumber}>
          <Link className={styles.phoneLink} href="tel:+91 9935177951">
            <BsTelephone />
            <span>+91 9935177951</span>
          </Link>
          <div className={styles.border}></div>
          <Link
            className={styles.phoneLink}
            href="mailto:kartopack.clothing2018@gmail.com"
          >
            <BsEnvelopeOpen />
            <span>kartopack.clothing2018@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.topHeader}>
        <TopHeader />
      </div>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerWrapper}>
            <div className={styles.logo}>
              <Link href="/">
                <Image width={100} height={60} src={logo} alt="Logo" />
              </Link>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={styles.hamburger}
            >
              {isOpen ? <IoClose /> : <CiMenuFries />}
            </div>
            <nav className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
              {<NavList isOpen={isOpen} setIsOpen={setIsOpen} />}
              <Link href="/contact-us" className={styles.quoteBtn}>
                Get a quote
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
