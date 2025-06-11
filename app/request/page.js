"use client";

import Link from "next/link";
import Breadcrumbs from "../component/Breadcrumbs";
import styles from "./request.module.css";


export default function request() {
  return (
     <section>
   <div className={`${styles.bag}`}>
    
      <h2 className={`fw-bold text-center ${styles.about}`}>詢價單</h2></div>
      <div className="wrapper">
      <Breadcrumbs
        links={[
          { label: "首頁", href: "/" },
          {
            label: " 詢價單",
            href: "/request",
            active: true,
          },
        ]}
      />
    </div>
    </section>
  );
}
