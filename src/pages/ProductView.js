import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductView = ({ imageSrc, productName, price }) => {

  const { id } = useParams();
  const navigate = useNavigate();

  return <div className="col mb-5">Product View - {id}</div>;
};

export default ProductView;
