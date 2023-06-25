import React from 'react';

const ProductCard = ({ imageSrc, productName, price }) => {
    return (
      <div className="col mb-5">
        <div className="card h-100">
          <img className="card-img-top" src={imageSrc} alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{productName}</h5>
              <span>{price}</span>
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
          </div>
        </div>
      </div>
    );
  };

export default ProductCard;