"use client";

import Link from "next/link";
import Breadcrumbs from "../component/Breadcrumbs";
import MainCard from "../component/Card"

export default function applications() {
  return (
    <>
      <h2 className={`fw-bold text-center`}>應用範例</h2>
      
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
    </>
  );
}
