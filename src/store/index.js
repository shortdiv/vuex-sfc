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
    fetchFromInventory({ commit }) {
      commit("isRestocking", true);
      pingInventory("chips")
        .then(inventory => {
          commit("stockItems", inventory.stock);
        })
        .finally(() => commit("isRestocking", false));
    },
    dispense({ commit }) {
      commit("isDispensing", true);
      setTimeout(() => {
        commit("dispense");
        commit("isDispensing", false);
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
