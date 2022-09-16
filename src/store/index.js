import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    favorite: [],
  },
  getters: {
    getProductFromCart(state) {
      return state.cart
    },
    getFavoriteFromCart(state) {
      return state.favorite
    },
  },
  mutations: {
    createToCart(state, data) {
      if (!state.cart.find(item => item.id === data.id)) {
        state.cart.push(data)
      }  
    },
    incQuantityCart(state, data) {
      state.cart = state.cart.map(item => {        
        if (item.id == data) {
          item.quantity++
        }
        return item
      })
    },
    decQuantityCart(state, data) {
      state.cart = state.cart.map(item => {        
        if (item.id == data) {
          item.quantity--
        }
        return item
      })
    },
    removeFromCart(state, data) {
      console.log(data);
      state.cart = state.cart.filter(item => item.id != data.id)
    },
    createToFavorite(state, fav) {
      if (!state.favorite.find(item => item === fav)) {
        state.favorite.push(fav)
      }
    },
  },
  actions: {

  },
  modules: {},
});
