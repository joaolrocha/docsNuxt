import { defineStore } from 'pinia'
// import type { User } from '~/types/system'

interface UserPayloadInterface {
  username: string
  password: string
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: ref(),
    authenticated: false
  }),
  getters: {
    token() {
      return useCookie('token').value
    }
  },
  actions: {
    async signIn({ username, password }: UserPayloadInterface) {
      const { data } = await useHttp('auth/login', {
        method: 'post',
        body: {
          username,
          password
        }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any
      if (data?.token?.bearer) {
        const token = useCookie('token')
        token.value = 'Bearer ' + data.token.bearer // set token to cookie `Bearer ${token}`
        // renew.value = data.token.refreshtoken // set refresh token to cookie
        this.authenticated = true // set authenticated  state value to true
        await navigateTo('/getting-started')
      } else {
        useMessage().showError('Token não encontrado!')
      }
    },
    async refreshToken() {
      const { data } = await useHttp('auth/token')
      if (data?.token?.bearer) {
        const token = useCookie('token')
        token.value = 'Bearer ' + data.token.bearer // set token to cookie `Bearer ${token}`
      } else {
        this.signOut()
      }
    },
    async signOut() {
      const token = useCookie('token')
      token.value = null // clear the token cookie
      this.user = null // clear the user state
      this.authenticated = false // set authenticated  state value to false
      await navigateTo('/signout')
    },
    async getSession() {
      const { data, error } = await useHttp('auth/session', { method: 'post' })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.user = (!error) ? data : null as any
    },
    async getPermission(aForm: string) {
      const { data, error } = await useHttp('form/' + aForm)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.user = (!error) ? data : null as any
    }
  },
  persist: true
})
