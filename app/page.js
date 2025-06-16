"use client";

import React, { useState, useEffect } from "react";
import ProductsCard from "./component/ProductsCard";
import Products from "./component/Products";
import NewsList from "./component/NewsList";
import Slider from "./component/Slider";
import PostList from "./component/PostList";
import Hightlight from "./component/Hightlight";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="">
      <Slider />
      {/* <h5 className={`fw-bold`}>最新商品</h5> */}
      {/* <div className={`mb-4 ${styles.sbar}`}></div> */}
      {/* {course.slice(0, 4).map((course) => (
        <ProductsCard key={course.id} course={course} />
      ))} */}
      <Products />

      {/* {course.slice(0, 4).map((course) => (
        <NewsCard key={course.id} course={course} />
      ))} */}

      {/* <h5 className={`fw-bold`}>最新文章</h5>
        <div className={`mb-4 ${styles.sbar}`}></div> */}
      <NewsList />

      <Hightlight />

      {/* <PostList /> */}
    </div>
  );
}
