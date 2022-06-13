<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <el-config-provider>
    <router-link to="/"> Home </router-link>
    <router-link to="/about"> About </router-link>

    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
      </keep-alive>
    </router-view>
  </el-config-provider>
</template>

<style>
#app {
  margin-top: 60px;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
