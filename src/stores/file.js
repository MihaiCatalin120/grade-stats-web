import { defineStore } from 'pinia';

export const useFileStore = defineStore('file', {
  state: () => ({
    name: '',
    type: ''
  }),
  actions: {
    getSignedUrl() {
      return 1;
    },
    upload() {
      return 1;
    }
  }
})
