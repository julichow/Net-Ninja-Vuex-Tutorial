<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="price">£{{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    // //map will take the original product array to a new array
    // //scenario of not using store.js
    // saleProducts() {
    //   let saleProducts = this.$store.state.products.map((product) => {
    //     return {
    //       name: "**" + product.name + "**",
    //       price: product.price / 2,
    //     };
    //   });
    //   return saleProducts;
    // },
    saleProducts() {
      return this.$store.getters.saleProducts;
    },
  },
  methods: {
    // //scenario of not using store.js
    // reducePrice() {
    //   return this.$store.state.products.forEach(product => product.price -= 1);
    // },
    reducePrice(amount) {
      //using mutations
      // return this.$store.commit('reducePrice');
      //using actions
      return this.$store.dispatch("reducePrice", amount);
    },
  },
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>
