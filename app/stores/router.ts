import { defineStore } from 'pinia'
import type { ModuleType, Client } from '~/types/system'

export const useRouterStore = defineStore({
  id: 'router',
  state: () => ({
    clientId: ref(null),
    moduleId: ref<ModuleType>(),
    client: ref<Client>()
  }),

  getters: {
    clientName: state => state.client?.ds_empresa,
    apiUrl: state => state.client?.ds_portal_url,
    teleLaudo: state => ['telelaudo', 'local', 'sedi2', 'localhost'].includes(state.clientId)
  },

  actions: {
    async loadClient() {
      // App.Vue - onMounted
      const router = useRoute()

      // console.log('loadClient', router.params.client, this.client, this.clientId)
      // console.log('loadClient', router.params.client, this.client)

      if (!router.params.client)
        return
      if (router.params.client) {
        this.moduleId = router.params.system as ModuleType
        this.clientId = router.params.client as string
      }
      if (router.params.client === this.client?.ds_portal_id) {
        // console.log('loadClient', 'client already loaded')
        return
      }
      if (this.clientId === 'localhost') {
        this.client = {
          cd_empresa: 1,
          ds_empresa: 'Genesis',
          ds_portal_url: 'http://172.18.0.1:8082',
          ds_portal_id: this.clientId
        }
      } else if (this.clientId === 'bsd') {
        this.client = {
          cd_empresa: 1,
          ds_empresa: 'Genesis',
          ds_portal_url: 'http://192.168.56.1/cgi-bin/dwserver.cgi',
          ds_portal_id: this.clientId
        }
      } else if (this.clientId === 'sedi2') {
        this.client = {
          cd_empresa: 2,
          ds_empresa: 'FujiFilm',
          ds_portal_url: 'https://sedi2.zapto.org/dwcluster',
          ds_portal_id: this.clientId
        }
      } else if (this.clientId === 'genesis') {
        this.client = {
          cd_empresa: 3,
          ds_empresa: 'Genesis',
          ds_portal_url: 'https://lumen.clinux.com.br/chamados/cgi-bin/dwserver.cgi',
          ds_portal_id: this.clientId
        }
      } else {
        try {
          const url = 'https://lumen.clinux.com.br/chamados/cgi-bin/dwserver.cgi/se1/dotListaCgi?id=' + this.clientId
          // console.log('loadClient', url)
          const { data } = await useFetch(url, { method: 'get' })
          // console.log('loadClient', status.value, data.value, error.value, pending.value)
          this.client = data?.value ? data.value[0] : null
          // console.log('loadClient', this.client)
          // useMessage().showDebug(JSON.stringify(this.client))
        } catch (error) {
          this.client = null
          useMessage().showError(error)
        }
      }
    }
  },
  persist: true
})
