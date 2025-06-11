"use client";

import Link from "next/link";
import Breadcrumbs from "../component/Breadcrumbs";
import MainCard from "../component/Card"

export default function products() {
  return (
    <div className="wrapper">
      <h2 className={`fw-bold text-center`}>商品介紹</h2>
      
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
  );
}
