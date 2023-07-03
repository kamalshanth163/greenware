import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { currency, products } from "../data";

const ProductView = () => {

  const { sku } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const { image, name, description, models } = product;

  // console.log(product);

  useEffect(() => {
    var p = products.find(p => p.sku === sku);
    setProduct(p);
  })

  return (
    <div className="container px-4 px-lg-5 my-5">
      {product && Object.keys(product).length !== 0 ? (
        <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
          <img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="small mb-1">SKU: <b>{sku}</b></div>
          <h1 className="display-5 fw-bolder">{name}</h1>
          <div className="fs-5 mb-5">
            {/* <span className="text-decoration-line-through">$45.00</span> */}
            <span>{currency} {models[0].price}</span>
          </div>
          <p className="lead">{description}</p>
          <div className="d-flex">
            <input className="form-control text-center me-3" id="inputQuantity" type="number" defaultValue="1" style={{ maxWidth: '3rem' }} />
            <button className="btn btn-outline-dark flex-shrink-0" type="button">
              <i className="bi-cart-fill me-1"></i>
              Add to cart
            </button>
          </div>
        </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductView;
