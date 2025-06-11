"use client";
import React, { useEffect, useState } from "react";
import NewsCard from "./newsCard";
import styles from "./newsCard.module.css"

export default function NewsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://192.168.8.50/wp-json/wp/v2/posts?_embed")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("API 錯誤:", err));
  }, []);

   if (posts.length === 0) {
    return (
        <div className={styles.container2}>
          <div className={styles.loader27}></div>
        </div>
    );
  }

  return (
    <>
    <div className="row mb-4">
      {posts.slice(0, 4).map((course) => (
        <NewsCard key={course.id} course={course}/>
      ))}
    </div>
    <div className="px-3">
    <button className={`btn w-100 ${styles.readMore}`}>查看更多</button>
    </div>
    </>
  );
}
