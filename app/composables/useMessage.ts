import { Messages } from '~/types/system'

const debugMessage = ref()
const isOpen = ref()
const config = ref({
  title: 'Aviso',
  description: 'Deseja confirmar ?',
  okButton: 'Sim',
  noButton: 'Não',
  okClick: null,
  noClick: () => { isOpen.value = false }
})
// const propsDialog = ref(config)

// export const useMessageStore = defineStore('message', () => {
export const useMessage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function openDialog(payload: any) {
    config.value = Object.assign(config.value, payload)
    isOpen.value = true
  }
  function closeDialog() {
    isOpen.value = false
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showDebug = (payload: any) => {
    debugMessage.value = payload
  }
  const showError = (message?: string, title?: string) => {
    useToast().add({
      title: title || 'Erro',
      color: 'red',
      description: message || 'Erro não identificado',
      icon: 'i-heroicons-exclamation-triangle'
    })
  }
  const showMessage = (message?: string, title?: string) => {
    useToast().add({
      title: title || 'Aviso',
      color: 'green',
      description: message || Messages.MSG_SYS_OK,
      icon: 'i-heroicons-check-circle'
    })
  }

  return {
    config,
    isOpen,
    debugMessage,
    showDebug,
    showError,
    showMessage,
    openDialog,
    closeDialog
  }
// },
// { persist: true }
// )
}
