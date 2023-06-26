import React from 'react';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';

const Products = () => {
    return (
      <div className="products-page">
        <Banner />
        <ProductList />
      </div>
    );
  };

export default Products;