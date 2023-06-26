
import React from 'react';
import ProductCard from "./ProductCard";

const ProductList = () => {
    return (
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* Product Card 1 */}
            <ProductCard
              id="1"
              imageSrc="path/to/product1.jpg"
              productName="Product 1"
              price="$19.99"
            />
  
            {/* Product Card 2 */}
            <ProductCard
              id="2"
              imageSrc="path/to/product2.jpg"
              productName="Product 2"
              price="$24.99"
            />
  
            {/* Product Card 3 */}
            <ProductCard
              imageSrc="path/to/product3.jpg"
              productName="Product 3"
              price="$14.99"
            />
  
            {/* Product Card 4 */}
            <ProductCard
              imageSrc="path/to/product4.jpg"
              productName="Product 4"
              price="$29.99"
            />
  
            {/* Add more Product Cards as needed */}
          </div>
        </div>
      </section>
    );
  };


export default ProductList;