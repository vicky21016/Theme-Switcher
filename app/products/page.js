"use client";

import Link from "next/link";
import Breadcrumbs from "../component/Breadcrumbs";
import MainCard from "../component/Card";
import Products from "../component/Products";
import styles from "./product.module.css";

export default function products() {
  return (
    <section className={styles.prosection}>
      <div className={`${styles.bag}`}>
        <h2 className={`fw-bold text-center ${styles.about}`}>商品介紹</h2>
      </div>
      <div>
        <div className={` my-5 ${styles.wrapper}`}>
          <Breadcrumbs
            links={[
              { label: "首頁", href: "/" },
              {
                label: " 商品介紹",
                href: "/products",
                active: true,
              },
            ]}
          />
        </div>
        <Products />
        <img src="./12.jpg" className={styles.img}></img>
      </div>
    </section>
  );
}
