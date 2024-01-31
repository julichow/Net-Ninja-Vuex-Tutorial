<template>
  <div id="app">
    <product-list-one :products="products"/>
    <product-list-two :products="products"/>
  </div>
</template>

<script>
//import
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  name: "App",
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  data() {
    return {
    
    };
  },
};
</script>

<style></style>
