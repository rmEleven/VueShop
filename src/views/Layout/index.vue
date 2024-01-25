<script setup>
import LayoutSticky from './components/LayoutSticky.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

// 挂载时获取数据
onMounted(() => categoryStore.getCategory())
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