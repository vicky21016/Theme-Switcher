import React, { useEffect, useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://192.168.8.50/wp-json/wp/v2/posts?_embed')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('API 錯誤:', err));
  }, []);

  return (
    <div>
      <h1>文章列表</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <img
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              style={{ width: '100%', height: 'auto' }}
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
      ))}
    </div>
  );
}

export default PostList;
