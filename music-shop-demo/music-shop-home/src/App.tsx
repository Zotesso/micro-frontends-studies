import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Products from "music_shop_products/ProductList";
import MainRouter from "./MainRouter";

ReactDOM.render(<MainRouter />, document.getElementById("app"));
ReactDOM.render(Products, document.getElementById("vue-app"));