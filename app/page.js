"use client";

import React, { useState, useEffect } from "react";
import ProductsCard from "./component/ProductsCard";
import Products from "./component/Products";
import NewsList from "./component/NewsList";
import Slider from "./component/Slider";
import PostList from "./component/PostList";
import Card from "./component/AllCard";
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
      <Products/>

      {/* {course.slice(0, 4).map((course) => (
        <NewsCard key={course.id} course={course} />
      ))} */}
       <section className={`pt-1 pb-5 ${styles.news}`}>
      <div className="wrapper">
        {/* <h5 className={`fw-bold`}>最新文章</h5>
        <div className={`mb-4 ${styles.sbar}`}></div> */}
        <NewsList />
        </div>
      </section>
      <img src="./plc.jpg" className={styles.img}></img>
      <div className="wrapper container mb-5">
        <div className="row">
          <Card
            icon="bi bi-hand-thumbs-up"
            col="col-12 col-sm-6 col-lg-3"
            name="電機經驗豐富"
            text="25年的經驗累積，提供您優質服務"
            link="/support/plc"
          />
          <Card
            icon="bi bi-box"
            col="col-12 col-sm-6 col-lg-3"
            name="優秀的系統整合"
            text="針對不同機型，我們具備優良的整合方式"
            link="/support/servo"
          />
          <Card
            icon="bi bi-people"
            col="col-12 col-sm-6 col-lg-3"
            name="保證的售後服務"
            text="多年經驗為您完善的服務是我們的榮幸"
            link="/support/hmi"
          />
          <Card
            icon="bi bi-telephone"
            col="col-12 col-sm-6 col-lg-3"
            name={
              <>
                立刻來電
                <br />
                <span style={{ color: "red", fontWeight: "bold" }}>
                  (03)579-7586
                </span>
              </>
            }
            text="如有需求，立即來電，將有專人為您服務！"
            link="/support/hmi"
          />
        </div>
      </div>
     
      {/* <PostList /> */}
      
    </div>
  );
}
