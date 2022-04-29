import { createEffect, createResource, createSignal } from "solid-js";

import "./index.css";

const fetchProduct = async (id) => (await fetch(`http://localhost:5555/product/${id}`)).json();

const ProductPurchase = () => {
  const [productId, setProductId] = createSignal();
  const [product, { mutate, refetch }] = createResource(productId, fetchProduct);

  let productDetail;

  createEffect(() => {
    const productId = window.location.href.split("/")[4];
    setProductId(productId);
    fetchProduct(productId).then((res) => productDetail = res);
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

export default ProductPurchase