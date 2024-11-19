<script setup lang="ts">
import { storeToRefs } from 'pinia'


useHead({
  bodyAttrs: {
    class: 'dark:bg-gray-950'
  }
})
const { clientId } = storeToRefs(useRouterStore())
const { debugMessage } = useMessage()
</script>

<template>
  <div class="h-screen flex items-center justify-center overlay">
    <div class="gradient" />
    <UColorModeButton
      size="sm"
      class="absolute top-16"
    />
    <UBadge
      :label="clientId || 'No client ID found'"
      variant="subtle"
      class="absolute top-8"
    />
    <slot />
    <pre
      v-if="debugMessage"
      class="absolute bottom-24"
    >Debug Message: {{ debugMessage }}</pre>
  </div>
</template>

<style scoped>
.gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(50% 50% at 50% 50%, rgb(var(--color-primary-500) / 0.25) 0, #FFF 100%);
}

.dark {
  .gradient {
    background: radial-gradient(50% 50% at 50% 50%, rgb(var(--color-primary-400) / 0.1) 0, rgb(var(--color-gray-950)) 100%);
  }
}

.overlay {
  background-size: 100px 100px;
  background-image:
    linear-gradient(to right, rgb(var(--color-gray-200)) 0.5px, transparent 0.5px),
    linear-gradient(to bottom, rgb(var(--color-gray-200)) 0.5px, transparent 0.5px);
}
.dark {
  .overlay {
    background-image:
      linear-gradient(to right, rgb(var(--color-gray-900)) 0.5px, transparent 0.5px),
      linear-gradient(to bottom, rgb(var(--color-gray-900)) 0.5px, transparent 0.5px);
  }
}
</style>
