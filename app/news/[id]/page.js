"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Breadcrumbs from "../../component/Breadcrumbs";
import styles from "../news.module.css";

export default function News() {
const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch(
          `http://192.168.8.50/wp-json/wp/v2/posts/${id}?_embed`
        );
        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.error("文章載入失敗", error);
      } finally {
        setLoading(false);
      }
    }

   if (id) {
      fetchCourse();
    }
  }, [id]);

  if (loading) {
    return (
      <div className={styles.container2}>
        <div className={styles.loader27}></div>
      </div>
    );
  }

  const featuredImage =
    course._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/3.jpg";

  return (
    <div className="wrapper">
      {/* <h2 className={`fw-bold text-center`}>訊息中心</h2> */}
      <Breadcrumbs
        links={[
          { label: "首頁", href: "/" },
          // {
          //   label: " 訊息中心",
          //   href: "/news",
          // },
          {
            label: `${course.title.rendered}`,
            href: `/news/${id}`,
            active: true,
          },
        ]}
      />
      <div className="col-12 mb-4 w-100">
        <div>
          <p className={`mt-5 ${styles.date}`}>
            {new Date(course.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h2
            className={`mt-4 ${styles.name}`}
            dangerouslySetInnerHTML={{ __html: course.title.rendered }}
          />

          {/* <img
               className={`mt-5 ${styles.img}`}
               src={featuredImage}
               alt={course.title.rendered}
             /> */}
          <p
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: course.content.rendered }}
          />
        </div>
      </div>
    </div>
  );
}
