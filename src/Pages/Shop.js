import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate'; // Додали імпорт пагінації
import '../css/products.css';
import imglist from '../img/list.svg';
import imgcol from '../img/column.svg';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(10); // Кількість продуктів на сторінці

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/product/?format=json')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'grid' ? 'list' : 'grid'));
  };

  const gridImage = <img src={imgcol} alt="Grid View" />;
  const listImage = <img src={imglist} alt="List View" />;

  const pageCount = Math.ceil(products.length / perPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const productsToDisplay = products.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <div className="products-page">
      <h1>Товари</h1>
      <div className="view-mode-toggle">
        <button onClick={toggleViewMode}>
          {viewMode === 'grid' ? gridImage : listImage}
        </button>
      </div>
      <div className={`product-list ${viewMode}`}>
        {productsToDisplay.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt="" />
            <h2>{product.title}</h2>
            <p>Ціна: {product.price}</p>
            <p>{product.desc.length > 50 ? product.desc.substring(0, 50) + '...' : product.desc}</p>

          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        forcePage={currentPage}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default ProductsPage;
