<script setup>
import {
  HomeOutlined,
  SettingOutlined,
  LeftOutlined,
  ProjectOutlined,
  UserOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue'
const links = [
  { name: 'Home', path: '/', icon: HomeOutlined },
  { name: 'Events', path: '/events', icon: ProjectOutlined },
  { name: 'Attendees', path: '/attendees', icon: UserOutlined },
  { name: 'Organizers', path: '/organizers', icon: AppstoreOutlined }
]
</script>

<template>
  <aside>
    <div class="logo">
      <div>CMS-PLUS</div>
      <button><LeftOutlined /></button>
    </div>
    <ul class="links">
      <RouterLink v-for="link in links" :to="link.path" :key="link.name">
        <li>
          <span class="icon"><component :is="link.icon" /></span>
          <span class="link-name">{{ link.name }}</span>
        </li>
      </RouterLink>
      <div class="space"></div>
      <RouterLink to="/settings">
        <li>
          <span class="icon"><SettingOutlined /></span>
          <span class="link-name">Settings</span>
        </li>
      </RouterLink>
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
  color: black;
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-left: 20px;
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
}

.links a {
  margin-inline: 10px;
  text-decoration: none;
  color: black;
}

.links li:hover {
  background-color: hsl(7, 100%, 93%);
}

.links li {
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
}

.links .icon {
  margin-right: 10px;
}

.space {
  flex-grow: 1;
}
</style>
