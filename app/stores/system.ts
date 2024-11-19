import { defineStore } from 'pinia'
import type { Setup, MainMenu } from '~/types/system'

// https://masteringpinia.com/blog/top-5-mistakes-to-avoid-when-using-pinia
// https://pinia.vuejs.org/ssr/nuxt.html

export const useSystemStore = defineStore('system', () => {
  // export const useSystem = () => {
  const setup = ref<Setup>()
  const menu = ref<MainMenu[]>([])
  const icon = ref(null)
  const logo = ref(null)
  const loading = ref(0)
  const editor = ref(false)
  const sEditor = ref(0)
  const sSelecao = ref('')

  // const changeTheme = (primary, gray) => {
  //   // const config = useAppConfig()
  //   console.log('changeTheme', primary, gray)
  //   // config.ui.primary = primary
  //   // config.ui.gray = gray
  // }

  const loadLogo = async () => {
    return await useAPI('/setup/logo')
    // console.log('loadLogo', response)
  }

  // const loadSetup = async () => {
  //   const response = await useAPI('/setup/data', { method: 'GET', default: () => null })
  //   setup.value = response ? response[0] : null
  //   // changeTheme(setup.value?.ds_dicomvix_tema, setup.value?.ds_dicomvix_tema)
  // }

  const loadMenu = async () => {
    return await useAPI('/menu/main', { method: 'GET', default: () => null })
  }
  const loadReport = async () => {
    return await useAPI('/menu/report', { method: 'GET', default: () => null })
  }

  function $reset() {
    setup.value = null
    menu.value = null
    icon.value = null
    logo.value = null
    loading.value = null
    editor.value = false
    sEditor.value = 0
  }

  function startLoading() {
    // console.log('startLoading', loading.value)
    loading.value = 1
  }
  function finishLoading() {
    // console.log('finishLoading', loading.value)
    loading.value = 0
  }
  function setEditor(value: boolean) {
    editor.value = value
  }

  return {
    sEditor,
    sSelecao,
    editor,
    setEditor,
    menu,
    setup,
    logo,
    icon,
    loading,
    startLoading,
    finishLoading,
    $reset,
    // loadSetup,
    loadMenu,
    loadReport,
    loadLogo
  }
},
{ persist: true }
)
