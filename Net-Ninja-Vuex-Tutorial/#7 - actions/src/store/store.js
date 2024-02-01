import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  //strict = does not mutate store state outside mutation handlers
  strict: true,
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      let saleProducts = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations: {
    //limitation of mutation is handling asyncronous task
    // reducePrice: (state) => {
    //   setTimeout(() => {
    //     state.products.forEach((product) => {
    //       product.price -= 1;
    //     });
    //   }, 3000); // Set a timeout of 1000 milliseconds = 1 second
    // },
    reducePrice: (state, payload) => {
      state.products.forEach((product) => {
        //i.e. 4 
        product.price -= payload;
      });
    },
  },
  //i.e.payload = amount 
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit("reducePrice", payload);
      }, 2000);
    },
  },
});
