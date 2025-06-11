"use client";

import Link from "next/link";
import Breadcrumbs from "../component/Breadcrumbs";


export default function request() {
  return (
    <div className="wrapper">
      <h2 className={`fw-bold text-center`}>詢價單</h2>
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
  );
}
