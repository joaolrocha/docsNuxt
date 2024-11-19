<script setup lang="ts">
// import { navigateTo } from '#app'; // Importar navigateTo para realizar a navegação programática
import type { NavItem } from '@nuxt/content';

const navigation = inject<NavItem[]>('navigation', [])
const { token } = storeToRefs(useAuthStore())
const { header } = useAppConfig()
const { signOut } = useAuthStore()

const logout = () => {
  signOut()
  useAuthStore().$reset()
  useSystemStore().$reset()
  // useRouterStore().$reset()
}

// Função para redirecionar para a página /getting-started ao clicar na logo
// const goToGettingStarted = () => {
//   navigateTo('/getting-started')
// }
</script>

<template>
  <UHeader>
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        Nuxt UI Pro <UBadge
          label="Docs"
          variant="subtle"
          class="mb-0.5"
        />
      </template>
    </template>

    <template
      v-if="header?.search"
      #center
    >
      <UContentSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        :label="null"
        class="lg:hidden"
      />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-if="token"
          icon="i-heroicons-arrow-right-20-solid"
          trailing
          color="black"
          class="flex bg-center"
          @click="logout()"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
