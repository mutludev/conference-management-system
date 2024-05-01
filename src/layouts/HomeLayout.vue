<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="wrapper">
    <Sidebar />
    <main>
      <Navbar />
      <!-- This line may cause problems be AWARE -->
      <content><RouterView /></content>
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
  display: flex;
  flex-direction: column;
}

content {
  display: block;
  flex: 1;
  overflow: scroll;
}
</style>
