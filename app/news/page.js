"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumbs from "../component/Breadcrumbs";
import NewsCard from "../component/newsCard";
import styles from "./news.module.css";

export default function News() {
  const [filtered, setFiltered] = useState([]);

  // 分頁
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;
  const totalPages =
    filtered.length > 0 ? Math.ceil(filtered.length / perPage) : 1; // 無條件進位

  // 計算當前頁面的第一個教師的索引值
  const startIndex = (currentPage - 1) * perPage;
  // 取得當前頁面應該顯示的教師
  const currentNews = (filtered || []).slice(
    // .slice() 用來擷取陣列中的一部分元素，而不改變原陣列。
    startIndex,
    startIndex + perPage
  );
  return (
          <section>
   <div className={`${styles.bag}`}>
  
      <h2 className={`fw-bold text-center ${styles.about}`}>訊息中心</h2></div>
        <div className="wrapper">
      <Breadcrumbs
        links={[
          { label: "首頁", href: "/" },
          {
            label: " 訊息中心",
            href: "/news",
            active: true,
          },
        ]}
      />
      {currentNews?.map((course) => {
        return <NewsCard key={course.id} course={course} />;
      })}
    </div>
     </section>
  );
}
