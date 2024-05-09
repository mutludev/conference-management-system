<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="wrapper">
    <Sidebar />
    <main>
      <content-area><RouterView /></content-area>
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
  display: flex;
  overflow: hidden;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
}

content-area {
  display: block;
  flex: 1;
  overflow: scroll;
  background-color: hsl(6, 100%, 96%);
}
</style>
