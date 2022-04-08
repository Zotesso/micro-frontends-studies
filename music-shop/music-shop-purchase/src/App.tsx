import { createEffect, createResource, createSignal } from "solid-js";
import { render } from "solid-js/web";

import "./index.css";

const fetchProduct = async (id) => (await fetch(`http://localhost:5555/product/${id}`)).json();

const App = () => {
  const [productId, setProductId] = createSignal();
  const [product, { mutate, refetch }] = createResource(productId, fetchProduct);

  let productDetail;

  createEffect(() => {
    setProductId(1);
    console.log(product());
    fetchProduct(1).then((res) => productDetail = res);
    console.log(productDetail);
  })

  return (
    <div class="container">
      <span>{product.loading && "Loading..."}</span>
      <div class="product-wrapper">
      <img src={`http://localhost:5555/product/image/${product()?.id}`} alt="" />
      <section class="purchase-section">
        <div>Nome do produto: {product()?.name}</div>
        <div>Descrição: {product()?.description}</div>
        <label htmlFor="">Insira dados do cartão:</label>
        <input type="text" />
        <button>Comprar</button>
      </section>
      </div>
    </div>
  );
};
render(App, document.getElementById("app"));
