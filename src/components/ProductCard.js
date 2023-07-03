import React from 'react';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, currency }) => {

  const navigate = useNavigate();
  const { sku, image, name, options } = product;

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            <span>{currency} {options[0].price.toFixed(2)}</span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={() => navigate("/products/" + sku)}>View</a></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;