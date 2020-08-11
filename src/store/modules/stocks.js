import dataStocks from "../../data/dataStocks";

const state = {
  stocks: []
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS'(state) {

  }
};

const actions = {
  buyStock: ({commit}, order) => {
    commit('BUY_STOCK', order);
  },
  initStocks: ({commit}) => {
    commit('SET_STOCKS', dataStocks);
  },
  randomizeStocks: ({commit}) => {
    commit('RND_STOCKS');
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
