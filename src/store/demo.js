import { defineStore } from 'pinia'

export const useStoreDemo = defineStore('storeDemo', {
  state: () => {
    return {
      counter: 0
    }
  }
})