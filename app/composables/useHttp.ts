import { useAuthStore } from '~/stores/auth'

export const useHttp = async (
  url: string,
  {
    method = 'get',
    body = {},
    // headers = {},
    fileUpload = false,
    fileDownload = false
  }: {
    method?: 'get' | 'post' | 'put' | 'delete'
    body?: object
    // headers?: HeadersInit
    fileUpload?: boolean
    fileDownload?: boolean
  } = { method: 'get' }
) => {
  let params: FormData | string = JSON.stringify(body)
  const headers = fileUpload ? new Headers() : { 'content-type': fileDownload ? 'application/octet-stream' : 'application/json' }
  if (fileUpload) {
    const formData = new FormData()
    Object.keys(body).forEach(key => formData.append(key, body[key]))
    params = formData
  }

  useSystemStore()?.startLoading()
  try {
    const response = await useAPI(url, {
      baseURL: useRouterStore().apiUrl,
      method,
      body: method === 'get' ? undefined : params,
      headers,
      responseType: fileDownload ? 'blob' : 'json'
    })
    return {
      data: response,
      error: null,
      status: 'success'
    }
  } catch (e) {
    if (e.response.status === 401) {
      useMessage().showError('Sessão expirada, por favor faça login novamente')
      useAuthStore().signOut()
    } else if (fileDownload)
      useMessage().showError(JSON.parse(await e.response._data.text())?.error || 'Falha no download do arquivo')
    else
      useMessage().showError(e?.response?._data?.error || 'Falha de conexão com o servidor')
    return {
      data: null,
      error: e?.response?._data,
      status: 'error'
    }
  } finally {
    useSystemStore()?.finishLoading()
  }
}
