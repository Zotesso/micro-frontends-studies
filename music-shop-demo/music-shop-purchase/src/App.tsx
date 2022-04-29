import { render } from "solid-js/web";

import "./index.css";
import ProductPurchase from './ProductPurchase';

const App = () => {
  return (
    <ProductPurchase></ProductPurchase>
  );
};

render(App, document.getElementById("solid-app"));
