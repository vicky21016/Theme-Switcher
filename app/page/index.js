import { useEffect, useState } from "react";

export default async function PostList() {
    
  const res = await fetch("http://192.168.8.50//wp-json/wp/v2/posts", {
    next: { revalidate: 60 }, // ISR（每 60 秒重新抓資料）
  });
  const posts = await res.json();

  return (
    <main>
      <h1>文章列表</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </main>
  );
}
