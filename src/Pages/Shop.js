import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/products.css';
import imglist from '../img/list.svg';
import imgcol from '../img/column.svg';

// Решта імпортів залишаємо без змін

const ProductsPage = () => {
  // Створюємо решту станів, залишаючи старий стан viewMode
  const [products, setProducts] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  // Функція для зміни стану viewMode при кліку на кнопку
  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'grid' ? 'list' : 'grid'));
  };

  // Змінні для зображень в залежності від режиму перегляду
  const gridImage = <img src={imgcol} alt="Grid View" />;
  const listImage = <img src={imglist} alt="List View" />;

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/product/?format=json')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="products-page">
      <h1>Товари</h1>
      <div className="view-mode-toggle">
        <button onClick={toggleViewMode}>
          {viewMode === 'grid' ? gridImage : listImage}
        </button>
      </div>
      <div className={`product-list ${viewMode}`}>
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt="" />
            <h2>{product.title}</h2>
            <p>Ціна: {product.price}</p>
            <div className="product-description">
              {product.short_desc && !product.show_full_desc ? (
                <>
                  <p>{product.short_desc}</p>
                  <button
                    onClick={() => {
                      product.show_full_desc = true;
                      setProducts([...products]);
                    }}
                  >
                    Детальніше
                  </button>
                </>
              ) : product.show_full_desc ? (
                <>
                  <p>{product.desc}</p>
                  <button
                    onClick={() => {
                      product.show_full_desc = false;
                      setProducts([...products]);
                    }}
                  >
                    Згорнути
                  </button>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
