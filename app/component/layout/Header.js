"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 控制選單展開

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // 滾動超過 50px 時，添加 scrolled
      } else {
        setIsScrolled(false); // 滾動回頂部時，移除 scrolled
      }
    };
    // 設定滾動事件監聽器
    window.addEventListener("scroll", handleScroll);

    // 清理事件監聽器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuRef = useRef(null);
  useEffect(() => {
    const clickOutside = (event) => {
      if (menuOpen && !event.target.closest(`.${styles.mobileMenu}`)) {
        menuRef.current.click();
        setPDOpen(false);
        setTeacherOpen(false);
        setUserOpen(false);
      }
    };
    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside);
  }, [menuRef.current, menuOpen]);

  return (
    <header
      className={`${styles["header"]} ${isScrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles["nav"]}>
        <ul className={styles["ul"]}>
          <li>
            <Link className={styles.LumiSB} href="/about">
              關於我們
            </Link>
          </li>

          <li>
            <Link
              href="/news"
              className={`${styles["dropbtn"]} ${styles.LumiSB}`}
            >
              訊息中心
            </Link>
          </li>

          <div className={styles["dropdown"]}>
            <li>
              <Link
                href="https://easyhmi.com.tw/products/"
                className={`${styles["dropbtn"]} ${styles.LumiSB}`}
              >
                商品介紹
              </Link>
            </li>
            <div className={styles["dropdown-content"]}>
              <Link
                href="https://easyhmi.com.tw/product-category/%e5%a8%81%e7%b6%b8-weintek-easyview/"
                className={`${styles["dropdown-link"]} ${styles["dropdown-link-top"]}`}
              >
                威綸 WEINTEK人機介面
              </Link>
              <Link
                href="https://easyhmi.com.tw/product-category/%e5%8f%af%e7%a8%8b%e5%bc%8f%e6%8e%a7%e5%88%b6%e5%99%a8plc/"
                className={`${styles["dropdown-link"]}`}
              >
                可程式控制器PLC
              </Link>
              <Link
                href="https://easyhmi.com.tw/product-category/%e4%bc%ba%e6%9c%8d%e9%a6%ac%e9%81%94%e5%8f%8a%e9%a9%85%e5%8b%95%e5%99%a8/"
                className={`${styles["dropdown-link"]} `}
              >
                伺服馬達及驅動器
              </Link>
              <Link
                href="https://easyhmi.com.tw/product-category/%e8%ae%8a%e9%a0%bb%e5%99%a8inverter/"
                className={`${styles["dropdown-link"]} `}
              >
                變頻器INVERTER
              </Link>
              <Link
                href="https://easyhmi.com.tw/product-category/%e4%b8%96%e5%8d%94%e6%b8%9b%e9%80%9f%e6%a9%9f/"
                className={`${styles["dropdown-link"]}`}
              >
                世協減速機
              </Link>
              <Link
                href="https://easyhmi.com.tw/product-category/supplier/"
                className={`${styles["dropdown-link"]} `}
              >
                電源供應器
              </Link>
              <Link
                href="https://easyhmi.com.tw/product-category/%e6%ba%ab%e6%8e%a7%e5%99%a8%e5%92%8c%e9%8c%b6%e9%a0%ad/"
                className={`${styles["dropdown-link"]} ${styles["dropdown-link-bottom"]}`}
              >
                溫控器和錶頭
              </Link>
            </div>
          </div>
          <li>
            <Link className={styles.LumiSB} href="/request">
              詢價單
            </Link>
          </li>
          <li>
            <Link className={styles.LumiSB} href="/applications">
              應用範例
            </Link>
          </li>
          <li>
            <Link className={styles.LumiSB} href="/contact">
              聯絡我們
            </Link>
          </li>
        </ul>
      </nav>

      {/* 手機板 */}
      <div className={styles.mobileMenuOut}>
        <div className={`${styles.mobileMenu}`}>
          <i
            ref={menuRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${styles.menu} ${
              menuOpen ? "bi bi-x-lg" : "bi bi-list"
            }`}
          ></i>
          <nav className={styles["mobileMenubar"]}>
            <ul
              className={`${styles.mobileDrop} ${menuOpen ? styles.show : ""}`}
            >
              <li>
                <Link className={styles.LumiSB} href="/about">
                  關於我們
                </Link>
              </li>

              <li>
                <Link
                  href="/news"
                  className={`${styles["dropbtn"]} ${styles.LumiSB}`}
                >
                  訊息中心
                </Link>
              </li>

              <div className={styles["dropdown"]}>
                <li>
                  <Link
                    href="https://easyhmi.com.tw/products/"
                    className={`${styles["dropbtn"]} ${styles.LumiSB}`}
                  >
                    商品介紹
                  </Link>
                </li>
                <div className={styles["dropdown-content"]}>
                  <Link
                    href="https://easyhmi.com.tw/product-category/%e5%a8%81%e7%b6%b8-weintek-easyview/"
                    className={`${styles["dropdown-link"]} ${styles["dropdown-link-top"]}`}
                  >
                    威綸 WEINTEK人機介面
                  </Link>
                  <Link
                    href="https://easyhmi.com.tw/product-category/%e5%8f%af%e7%a8%8b%e5%bc%8f%e6%8e%a7%e5%88%b6%e5%99%a8plc/"
                    className={`${styles["dropdown-link"]}`}
                  >
                    可程式控制器PLC
                  </Link>
                  <Link
                    href="https://easyhmi.com.tw/product-category/%e4%bc%ba%e6%9c%8d%e9%a6%ac%e9%81%94%e5%8f%8a%e9%a9%85%e5%8b%95%e5%99%a8/"
                    className={`${styles["dropdown-link"]} `}
                  >
                    伺服馬達及驅動器
                  </Link>
                  <Link
                    href="https://easyhmi.com.tw/product-category/%e8%ae%8a%e9%a0%bb%e5%99%a8inverter/"
                    className={`${styles["dropdown-link"]} `}
                  >
                    變頻器INVERTER
                  </Link>
                  <Link
                    href="https://easyhmi.com.tw/product-category/%e4%b8%96%e5%8d%94%e6%b8%9b%e9%80%9f%e6%a9%9f/"
                    className={`${styles["dropdown-link"]}`}
                  >
                    世協減速機
                  </Link>
                  <Link
                    href="https://easyhmi.com.tw/product-category/supplier/"
                    className={`${styles["dropdown-link"]} `}
                  >
                    電源供應器
                  </Link>
                  <Link
                    href="https://easyhmi.com.tw/product-category/%e6%ba%ab%e6%8e%a7%e5%99%a8%e5%92%8c%e9%8c%b6%e9%a0%ad/"
                    className={`${styles["dropdown-link"]} ${styles["dropdown-link-bottom"]}`}
                  >
                    溫控器和錶頭
                  </Link>
                </div>
              </div>
              <li>
                <Link className={styles.LumiSB} href="/request">
                  詢價單
                </Link>
              </li>
              <li>
                <Link className={styles.LumiSB} href="/applications">
                  應用範例
                </Link>
              </li>
              <li>
                <Link className={styles.LumiSB} href="/contact">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
