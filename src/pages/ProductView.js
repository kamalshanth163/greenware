import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { currency, products } from "../data";

const ProductView = () => {
  const { sku } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const { image, name, description, options } = product;

  useEffect(() => {
    const p = products.find((p) => p.sku === sku);
    setProduct(p);
    setSelectedOption(p.options[selectedOptionIndex]);
  }, [sku, selectedOptionIndex]);
  
  const handleOptionChange = (event, index) => {
    setSelectedOptionIndex(index);
  };

  return (
    <div className="container px-4 px-lg-5 my-5">
      {product && Object.keys(product).length !== 0 ? (
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={"https://dummyimage.com/600x700/dee2e6/6c757d.jpg"}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">
              SKU: <b>{sku}</b>
            </div>
            <h1 className="display-5 fw-bolder">{name}</h1>

            <p className="lead">{description}</p>

            <div className="product-options">
              {options.map((option, i) => {
                const { weight, price } = option;
                return (
                  <div className="fs-5 mb-2" key={i}>
                    <input
                      type="radio"
                      id={weight}
                      name="options"
                      value={price.toFixed(2)}
                      onChange={(event) => handleOptionChange(event, i)}
                      checked={i === selectedOptionIndex}
                    />
                    <label htmlFor={weight}>
                      <span className="current-price">
                        {currency} {price.toFixed(2)}
                      </span>
                      <span className="old-price">
                        {currency} {(price + 1000).toFixed(2)}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="number"
                defaultValue="1"
                style={{ maxWidth: "3rem" }}
              />
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
              >
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
