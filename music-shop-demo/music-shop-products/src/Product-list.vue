<template>
  <div class="products-container">
    <ul v-if="data && data.length" class="products-wrapper">
      <li v-for="product of data" class="product-card">
        <img :src="'http://localhost:5555/product/image/' + product.id" alt="" />
        <p>
          <strong>{{ product.name }}</strong>
        </p>
        <p></p>
        <p class="description">{{ product.description }}</p>
        <a v-bind:href="'http://localhost:8080/purchase/'+ product.id" class="buy-button">Comprar</a>
      </li>
    </ul>
    <p v-if="error">erro</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Products",
  props: {},
  setup() {
    const data = ref(null);
    const error = ref(null);

    function fetchData() {
      return fetch("http://localhost:5555/products", {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            const error = new Error(res.statusText);
            throw error;
          }

          return res.json();
        })
        .then((json) => {
          data.value = json;
        })
        .catch((err) => {
          error.value = err;
          if (err.json) {
            return err.json.then((json) => {
              error.value.message = json.message;
            });
          }
        });
    }

    onMounted(() => {
      fetchData();
    });

    return {
      data,
      error,
    };
  },
});
</script>
