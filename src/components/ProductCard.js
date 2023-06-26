import React from 'react';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, imageSrc, productName, price }) => {

    const navigate = useNavigate();

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
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={() => navigate("/products/" + id)}>View</a></div>
          </div>
        </div>
      </div>
    );
  };

export default ProductCard;