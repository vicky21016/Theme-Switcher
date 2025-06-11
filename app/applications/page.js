"use client";

import Link from "next/link";
import Breadcrumbs from "../component/Breadcrumbs";
import MainCard from "../component/Card"
import styles from "./applications.module.css";

export default function applications() {
  return (
     <section>
   <div className={`${styles.bag}`}>
    
      <h2 className={`fw-bold text-center ${styles.about}`}>應用範例</h2></div>
      <div className="wrapper">
      <Breadcrumbs
        links={[
          { label: "首頁", href: "/" },
          {
            label: " 應用範例",
            href: "/applications",
            active: true,
          },
        ]}
      />
      <h6 className={`fw-bold`}>最近消息</h6>
      <h6 className={`fw-bold`}>近期消息</h6>
        {/* <MainCard key={article.id} {...article} /> */}
    </div></section>
  );
}
