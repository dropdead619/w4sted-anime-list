import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => (
    {
      userId: null as string | null,
      token: null as string | null,
      email: '',
    }
  ),
  actions: {
    async signup(payload: any) {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlrp40ye71InEZjdyhgi1O0UmDc85OOjM', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(responseData.error.message || 'Failed to authenticate');
        throw error;
      }
      this.userId = responseData.localId;
      this.token = responseData.idToken;
      this.email = responseData.email;
    },
    async signin(payload: any) {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlrp40ye71InEZjdyhgi1O0UmDc85OOjM', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(responseData.error.message || 'Failed to authenticate');
        throw error;
      }
      this.userId = responseData.localId;
    },
    signout() {
      this.userId = null;
      this.token = null;
    },
  },
  persist: true,
},
);
