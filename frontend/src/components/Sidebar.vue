<script setup>
import { computed, ref } from 'vue'
import { UserOutlined, LeftOutlined, RightOutlined, LogoutOutlined } from '@ant-design/icons-vue'
import { linkMapping } from '@/utils/navigationMapping'
import { useUserStore } from '@/stores/userStore'
import { usePageStore } from '@/stores/pageStore'
const pageStore = usePageStore()
const userStore = useUserStore()
const showSidebar = ref(true)
let links = computed(() => linkMapping[userStore.user?.role] || [])

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}

async function logout() {
  await userStore.logout()
}
</script>

<template>
  <aside :class="{ hidden: !showSidebar }">
    <div class="logo">
      <div v-if="showSidebar">CMS-PLUS</div>
      <button @click="toggleSidebar">
        <LeftOutlined v-if="showSidebar" />
        <RightOutlined v-else />
      </button>
    </div>
    <div class="role" v-if="showSidebar">{{ userStore.user?.role }}</div>
    <ul class="links" v-if="links.length > 0">
      <a v-for="link in links" :key="link.name" @click="pageStore.changePage(link.path)">
        <li>
          <span class="icon"><component :is="link.icon" /></span>
          <span v-if="showSidebar" class="link-name">{{ link.name }}</span>
        </li>
      </a>
      <div class="space"></div>
      <a>
        <li>
          <span class="icon"><UserOutlined /></span>
          <span v-if="showSidebar" class="link-name">{{ userStore.user?.name || 'John Doe' }}</span>
        </li>
      </a>
      <a @click="logout">
        <li>
          <span class="icon"><LogoutOutlined /></span>
          <span v-if="showSidebar" class="link-name">Logout</span>
        </li>
      </a>
    </ul>
  </aside>
</template>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  flex: 0;
  min-width: 200px;
  background-color: hsl(6, 100%, 96%);
  color: hsl(0, 0%, 20%);
}

aside.hidden {
  min-width: 70px;

  & .logo {
    padding: 10px;
    justify-content: center;
  }

  & button {
    height: 44px;
    width: 100%;
  }
  & .links li {
    justify-content: center;
  }

  & .links .icon {
    margin-right: 0;
  }
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-left: 20px;
  user-select: none;
}

.logo button {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
}

.logo button:hover {
  background-color: hsl(7, 100%, 93%);
}

.links {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0;
  padding: 0;
  padding-bottom: 10px;
  list-style: none;

  & a {
    cursor: pointer;
    margin-inline: 10px;
    text-decoration: none;
    color: black;
  }

  & li:hover {
    background-color: hsl(7, 100%, 93%);
  }

  & li {
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
  }

  & .icon {
    margin-right: 10px;
  }
}
.icon,
.link-name {
  color: hsl(0, 0%, 20%);
}

.space {
  flex-grow: 1;
}

.role {
  text-transform: capitalize;
  padding-inline: 20px;
  margin-bottom: 10px;
  font-size: 18px;
}

.role::after {
  content: '';
  display: block;
  border-bottom: 1px solid hsl(0, 0%, 60%);
}
</style>
