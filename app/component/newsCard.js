"use client";

import React from "react";
import Link from "next/link";
import styles from "./newsCard.module.css";

export default function NewsCard({ course }) {
  const featuredImage =
    course._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "./3.jpg";

  return (
    <div className="col-12 col-sm-6 col-lg-6 mb-4">
      <Link className={styles.courseCard} href={`/news/${course.id}`}>
        <img
          className={styles.img}
          src={featuredImage}
          alt={course.title.rendered}
        />
        <h2
          className={`mt-3 ${styles.name}`}
          dangerouslySetInnerHTML={{ __html: course.title.rendered }}
        />
        <p>
          {new Date(course.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        {/* 
        <div
          className={styles.intro}
          dangerouslySetInnerHTML={{ __html: course.content.rendered }}
        />
        <button className={`btn ${styles.readMore}`}>閱讀更多</button> 
        */}
      </Link>
    </div>
  );
}
