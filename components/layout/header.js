"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./head.module.scss";
import Logo from "@/assets/logo.svg";


const navLeft = [
  { num: "01", title: "會員中心" },
  { num: "02", title: "線上拜拜" },
  { num: "03", title: "供品商城" },
];

const navRight = [
  { num: "04", title: "線上遶境" },
  { num: "05", title: "求神問卜" },
  { num: "06", title: "民俗論壇" },
];

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    document.body.style.overflowY = isActive ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isActive]);

  return (
    <header className={styles.header}>
      <div className={`${styles.menu_wrap} ${isActive ? styles.active : ""}`}>
        <ul className={styles.nav_wrap}>
          {navLeft.map((item) => (
            <li key={item.num} className={styles.item}>
              <div className={styles.num}>{item.num}</div>
              <div className={styles.title}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {item.title}
                </a>
              </div>
            </li>
          ))}
        </ul>

  <Link href="/" className={styles.logo}>
  <Image src={Logo} alt="logo" />
</Link>

        <ul className={styles.nav_wrap}>
          {navRight.map((item) => (
            <li key={item.num} className={styles.item}>
              <div className={styles.num}>{item.num}</div>
              <div className={styles.title}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {item.title}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ul
        className={`${styles.ham_wrap} ${isActive ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <li className={styles.line}></li>
        <li className={styles.line}></li>
        <li className={styles.line}></li>
      </ul>
    </header>
  );
}
