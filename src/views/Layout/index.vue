<script setup>
import LayoutSticky from './components/LayoutSticky.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  <div>
    <LayoutSticky />
    <LayoutNav />
    <LayoutHeader />
    <!-- 二级路由出口 -->
    <RouterView />
    <LayoutFooter />
  </div>
</template>