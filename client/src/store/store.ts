import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      signedIn: false
    }
  },
  mutations:{
    changeSigned : (state: any,payload)=>{
      state.signedIn = payload
    }
  }
})