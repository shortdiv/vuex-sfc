import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

// fake API call //
let inventory = {
  chips: {
    stock: 40
  }
};

var pingInventory = function(item) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(inventory[item]);
    }, 3000);
  });
};
export default new Vuex.Store({
  state: {
    supply: 40,
    isRestocking: false,
    isDispensing: false
  },
  actions: {
    fetchFromInventory(context) {
      context.commit("isRestocking", true);
      pingInventory("chips")
        .then(inventory => {
          context.commit("stockItems", inventory.stock);
        })
        .finally(() => context.commit("isRestocking", false));
    },
    dispense(context) {
      context.commit("isDispensing", true);
      setTimeout(() => {
        context.commit("dispense");
        context.commit("isDispensing", false);
      }, 3000);
    }
  },
  getters: {},
  mutations: {
    isRestocking(state, payload) {
      state.isRestocking = payload;
    },
    isDispensing(state, payload) {
      state.isDispensing = payload;
    },
    dispense(state) {
      state.supply--;
    },
    stockItems(state) {
      state.supply = 40;
    }
  }
});
