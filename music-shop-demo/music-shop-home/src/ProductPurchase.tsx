import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import ProductPurchaseWrapper from "music_shop_purchase/ProductPurchaseWrapper";

import "./index.css";

const ProductPurchase = () => {
  const divRef = useRef(null);

  useEffect(() => {
    ProductPurchaseWrapper(divRef.current);
  }, []);
  
  return (
    <div className="container">
      <div ref={divRef}></div>
    </div>
  );
};

export default ProductPurchase