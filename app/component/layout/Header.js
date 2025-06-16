"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef(null);
  const searchInputRef = useRef(null);
    const [language, setLanguage] = useState("zh"); // 預設中文

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


const toggleLanguage = () => {
  setLanguage((prev) => (prev === "zh" ? "en" : "zh"));
};


  // 點擊外部收起手機選單與搜尋欄
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest(`.${styles.mobileMenu}`) &&
        !event.target.closest(`.${styles.mobileDrop}`)
      ) {
        setMenuOpen(false);
      }
      if (isSearchOpen && !event.target.closest(`.${styles.searchArea}`)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen, isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      {/* 桌機版選單 */}
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link className={styles.LumiSB} href="/about">
              關於我們
            </Link>
          </li>
          <li>
            <Link className={`${styles.dropbtn} ${styles.LumiSB}`} href="/news">
              訊息中心
            </Link>
          </li>

          <div className={styles.dropdown}>
            <li>
              <Link
                className={`${styles.dropbtn} ${styles.LumiSB}`}
                href="/products"
              >
                商品介紹
              </Link>
            </li>
            <div className={styles["dropdown-content"]}>
              <Link
                className={`${styles["dropdown-link"]} ${styles["dropdown-link-top"]}`}
                href="https://easyhmi.com.tw/product-category/%e5%a8%81%e7%b6%b8-weintek-easyview/"
              >
                威綸 WEINTEK人機介面
              </Link>
              <Link
                className={styles["dropdown-link"]}
                href="https://easyhmi.com.tw/product-category/%e5%8f%af%e7%a8%8b%e5%bc%8f%e6%8e%a7%e5%88%b6%e5%99%a8plc/"
              >
                可程式控制器PLC
              </Link>
              <Link
                className={styles["dropdown-link"]}
                href="https://easyhmi.com.tw/product-category/%e4%bc%ba%e6%9c%8d%e9%a6%ac%e9%81%94%e5%8f%8a%e9%a9%85%e5%8b%95%e5%99%a8/"
              >
                伺服馬達及驅動器
              </Link>
              <Link
                className={styles["dropdown-link"]}
                href="https://easyhmi.com.tw/product-category/%e8%ae%8a%e9%a0%bb%e5%99%a8inverter/"
              >
                變頻器INVERTER
              </Link>
              <Link
                className={styles["dropdown-link"]}
                href="https://easyhmi.com.tw/product-category/%e4%b8%96%e5%8d%94%e6%b8%9b%e9%80%9f%e6%a9%9f/"
              >
                世協減速機
              </Link>
              <Link
                className={styles["dropdown-link"]}
                href="https://easyhmi.com.tw/product-category/supplier/"
              >
                電源供應器
              </Link>
              <Link
                className={`${styles["dropdown-link"]} ${styles["dropdown-link-bottom"]}`}
                href="https://easyhmi.com.tw/product-category/%e6%ba%ab%e6%8e%a7%e5%99%a8%e5%92%8c%e9%8c%b6%e9%a0%ad/"
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
<div className={styles.languageToggle}>
  <button onClick={toggleLanguage} className={styles.languageBtn}>
    {language === "zh" ? "EN" : "中"}
  </button>
</div>

        {/* 桌機版搜尋 */}
        <div className={styles.searchArea}>
          <i
            className={`bi ${isSearchOpen ? "bi-x-lg" : "bi-search"} ${
              styles.searchIcon
            }`}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          ></i>
          {isSearchOpen && (
            <input
              type="text"
              ref={searchInputRef}
              className={styles.searchInput}
              placeholder="搜尋產品或關鍵字"
            />
          )}
        </div>
      </nav>

      {/* 手機版選單 */}
      <div className={styles.mobileMenuOut}>
       {/* 手機版搜尋 */}
              <div className={`${styles.searchArea}`}>
                <i
                 
                  className={`bi ${isSearchOpen ? "bi-x-lg" : "bi-search"} ${
                    styles.searchIcon
                  }`}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                ></i>
                {isSearchOpen && (
                  <input
                    type="text"
                    ref={searchInputRef}
                    className={styles.searchInput}
                    placeholder="搜尋產品或關鍵字"
                  />
                )}
              </div>
        <div className={styles.mobileMenu}>
        
          <i
            ref={menuRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${styles.menu} ${
              menuOpen ? "bi bi-x-lg" : "bi bi-list"
            }`}
          ></i>
          <nav className={styles.mobileMenubar}>
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
                  className={`${styles.dropbtn} ${styles.LumiSB}`}
                  href="/news"
                >
                  訊息中心
                </Link>
              </li>

              <div className={styles.dropdown}>
                <li>
                  <Link
                    className={`${styles.dropbtn} ${styles.LumiSB}`}
                    href=""
                  >
                    商品介紹
                  </Link>
                </li>
                <div className={styles["dropdown-content"]}>
                  <Link
                    className={`${styles["dropdown-link"]} ${styles["dropdown-link-top"]}`}
                    href="https://easyhmi.com.tw/product-category/%e5%a8%81%e7%b6%b8-weintek-easyview/"
                  >
                    威綸 WEINTEK人機介面
                  </Link>
                  <Link
                    className={styles["dropdown-link"]}
                    href="https://easyhmi.com.tw/product-category/%e5%8f%af%e7%a8%8b%e5%bc%8f%e6%8e%a7%e5%88%b6%e5%99%a8plc/"
                  >
                    可程式控制器PLC
                  </Link>
                  <Link
                    className={styles["dropdown-link"]}
                    href="https://easyhmi.com.tw/product-category/%e4%bc%ba%e6%9c%8d%e9%a6%ac%e9%81%94%e5%8f%8a%e9%a9%85%e5%8b%95%e5%99%a8/"
                  >
                    伺服馬達及驅動器
                  </Link>
                  <Link
                    className={styles["dropdown-link"]}
                    href="https://easyhmi.com.tw/product-category/%e8%ae%8a%e9%a0%bb%e5%99%a8inverter/"
                  >
                    變頻器INVERTER
                  </Link>
                  <Link
                    className={styles["dropdown-link"]}
                    href="https://easyhmi.com.tw/product-category/%e4%b8%96%e5%8d%94%e6%b8%9b%e9%80%9f%e6%a9%9f/"
                  >
                    世協減速機
                  </Link>
                  <Link
                    className={styles["dropdown-link"]}
                    href="https://easyhmi.com.tw/product-category/supplier/"
                  >
                    電源供應器
                  </Link>
                  <Link
                    className={`${styles["dropdown-link"]} ${styles["dropdown-link-bottom"]}`}
                    href="https://easyhmi.com.tw/product-category/%e6%ba%ab%e6%8e%a7%e5%99%a8%e5%92%8c%e9%8c%b6%e9%a0%ad/"
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
             <li>
  <button onClick={toggleLanguage} className={styles.languageBtn} style={{ color :"#fff"}}>
    {language === "zh" ? "English" : "中文"}
  </button>
</li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
