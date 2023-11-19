import { defineStore } from 'pinia'
import { type Share } from '@/types/shares'

export const useMyStore = defineStore( {
  id: 'MyStore',
  persist: true,
  state: () => ({
    message: 'Hello World bb',
    token: '',
    shares: new Array<Share>(),
  }),
})
