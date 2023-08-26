import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    // Робимо GET-запит до API Django
    axios.get("http://127.0.0.1:8000/api/blog/")
      .then((response) => {
        // Отримали дані у форматі JSON, оновлюємо стан компоненту
        setBlog(response.data);
      })
      .catch((error) => {
        console.error('Помилка при отриманні даних:', error);
      });
  }, []); // Другий аргумент [] вказує, що цей ефект повинен виконатися лише після монтування компоненту

  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <div className="blog" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.desc}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
