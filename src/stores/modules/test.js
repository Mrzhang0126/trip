import { defineStore } from 'pinia'

const useTestStore = defineStore('test', {
  state: () => ({
    num: 9
  }),
  actions: {
    changeNumAction(state, payload) {
      console.log(state, payload);
      setTimeout(() => {
        state.num = payload
      }, 2000)
    }
  }
})

export default useTestStore
