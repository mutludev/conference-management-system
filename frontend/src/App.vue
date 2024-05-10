<script setup>
import theme from './utils/theme'
</script>

<template>
  <a-config-provider :theme="theme">
    <RouterView />
  </a-config-provider>
</template>

<style scoped></style>
