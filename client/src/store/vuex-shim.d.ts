import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    signedIn: boolean
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}