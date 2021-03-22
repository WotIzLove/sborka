import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buyItems: [],
    showCart: null,
    tax: 100,
    shipping: 150,
    promoCodes: [
      {
        id: 1,
        value: "SBORKA",
        discount: 15,
      },
    ],
  },
  getters: {
    cartProducts: (state, getters, rootState) => {
      return state.buyItems.map(({ id, quantity }) => {
        const product = rootState.buyItems.find((product) => product.id === id);
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity,
        };
      });
    },
    buyItemsLength(state) {
      return state.buyItems.length;
    },
  },
  actions: {
    decrementItemQuantity({ state, commit }, id) {
      const cartItem = state.buyItems.find((item) => item.id === id);
      if (cartItem.quantity <= 1) {
        commit("deleteBuyItem", id);
      } else {
        commit("decrementItemQuantity", id);
      }
    },
    addBuyItem({ state, commit }, data) {
      const isAvailabilityBuyItem = state.buyItems.find(
        (item) => item.id === data.id
      );
      if (!isAvailabilityBuyItem) {
        state.buyItems.push({
          id: data.id,
          title: data.title,
          price: data.price,
          quantity: 1,
        });
      } else {
        commit("incrementItemQuantity", data.id);
      }
    },
  },
  mutations: {
    incrementItemQuantity(state, id) {
      const cartItem = state.buyItems.find((item) => item.id === id);
      cartItem.quantity++;
    },
    decrementItemQuantity(state, id) {
      const cartItem = state.buyItems.find((item) => item.id === id);
      cartItem.quantity--;
    },
    deleteBuyItem(state, id) {
      state.buyItems = state.buyItems.filter((item) => item.id !== id);
    },
    updateModalState(state, update) {
      state.showCart = update;
    },
  },
});
