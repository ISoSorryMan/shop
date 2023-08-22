import React from 'react';
import '../css/blog.css';

const BlogPage = () => {
  // Масив з даними блогу (приклад)
  const blogPosts = [
    {
      id: 1,
      title: 'Заголовок поста 1',
      content: 'Тут текст поста 1...',
    },
    {
      id: 2,
      title: 'Заголовок поста 2',
      content: 'Тут текст поста 2...',
    },
    // Додайте більше постів, якщо потрібно
  ];

  return (
    <div className="blog-page">
      <h1>Блог</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
