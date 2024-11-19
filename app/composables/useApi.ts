// SSR-friendly composable.
// const { data, pending, error, refresh } = await useFetch('https://api.example.com/data')

// The recommended way of using useFetch is in a component setup function, plugin, and route middleware.
// It is a straightforward way to handle data fetching without re - fetching or duplicate network calls,
// and it is a shortcut of useAsyncData + $fetch.
import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack'
// import { useRouterStore } from '~~/stores/router'

export const useAPI = async <
  DefaultT = unknown,
  DefaultR extends NitroFetchRequest = NitroFetchRequest,
  T = DefaultT,
  R extends NitroFetchRequest = DefaultR,
  O extends NitroFetchOptions<R> = NitroFetchOptions<R>
>(
  url: R,
  options?: O
) => {
  return $fetch<T>(url, {
    // baseURL: useRouterStore().apiUrl, //
    ...options,
    headers: {
      Authorization: `${useCookie('token').value}`,
      ...options?.headers
    }
  })
}

// export function useAPI<T>(
//   url?: string | (() => string),
//   options?: Omit<UseFetchOptions<T>, 'default'> & { default: () => T | Ref<T> }
// ) {
//   return useFetch(url, {
//     ...options,
//     $fetch: useApiData
//   })
// }
