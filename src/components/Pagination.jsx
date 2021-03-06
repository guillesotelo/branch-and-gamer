import React from 'react';

const Pagination = ({ productosPorPagina, productosTotales, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(productosTotales / productosPorPagina); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={(e) => paginate(number,e)} href='/' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;