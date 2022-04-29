<template>
  <Products></Products>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Products from './Product-list.vue';

export default defineComponent({
  name: "App",
  components: {
    Products
  },
  props: {},
  setup() {},
});
</script>
