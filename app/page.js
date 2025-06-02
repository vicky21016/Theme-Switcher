"use client";

import React, { useState, useEffect } from "react";
import ProductsCard from "./component/ProductsCard";
import NewsCard from "./component/nwesCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h5 className={`fw-bold`}>最新商品</h5>
         {/* {course.slice(0, 4).map((course) => (
        <ProductsCard key={course.id} course={course} />
      ))} */}
      <div className={`mb-4 ${styles.sbar}`}></div>
      {/* {course.slice(0, 4).map((course) => (
        <NewsCard key={course.id} course={course} />
      ))} */}

      <h5 className={`fw-bold`}>最新文章</h5>
      <div className={`mb-4 ${styles.sbar}`}></div>
    </>
  );
}
