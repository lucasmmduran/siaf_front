import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    token: null,
  }),
  actions: {
    login(token) {
      this.isAuthenticated = true;
      this.token = token;
      localStorage.setItem('auth_token', token);
    },
    logout() {
      this.isAuthenticated = false;
      this.token = null;
      localStorage.removeItem('auth_token');
    },
    checkAuth() {
      const token = localStorage.getItem('auth_token');
      if (token) {
        this.isAuthenticated = true;
        this.token = token;
      }
    },
  },
});
