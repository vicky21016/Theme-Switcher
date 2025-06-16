"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumbs from "../component/Breadcrumbs";
import NewsCard from "../component/newsCard";
import Page from "../component/layout/Page";
import styles from "./news.module.css";

export default function News() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://192.168.8.50/wp-json/wp/v2/posts?_embed")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("API 錯誤:", err));
  }, []);

  // 分頁設定
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;
  const totalPages = Math.ceil(posts.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentNews = posts.slice(startIndex, startIndex + perPage);

  if (posts.length === 0) {
    return (
      <div className={styles.container2}>
        <div className={styles.loader27}></div>
      </div>
    );
  }

  return (
    <section>
      <div className={styles.bag}>
        <h2 className={`fw-bold text-center ${styles.about}`}>訊息中心</h2>
      </div>
      <div className="wrapper">
        <Breadcrumbs
          links={[
            { label: "首頁", href: "/" },
            { label: "訊息中心", href: "/news", active: true },
          ]}
        />
        <div className="row mt-1 mb-4 g-5">
          {currentNews.map((course) => (
            <NewsCard key={course.id} course={course} />
          ))}
        </div>

        {totalPages > 1 && (
          <Page
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
}
