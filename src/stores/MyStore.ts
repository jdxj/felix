import { defineStore } from 'pinia'

export const useMyStore = defineStore( {
  id: 'MyStore',
  persist: true,
  state: () => ({
    message: 'Hello World bb',
    token: '',
  }),
})
