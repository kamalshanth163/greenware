import React from "react";
import { useNavigate } from "react-router-dom";

const ProductView = ({ imageSrc, productName, price }) => {
  const navigate = useNavigate();

  return <div className="col mb-5">Product View</div>;
};

export default ProductView;
