// stores/counter.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const apiUrl = 'http://geek.itheima.net/v1_0/channels'

export const useCounterStore = defineStore('counter', () => {
  // 定义数据 (state)
  const count = ref(0)
  // 定义 getter
  const doubleCount = computed(() => count.value * 2)
  // 定义方法 (action)
  const increment = () => {
    count.value++
  }
  // 异步 action
  const list = ref([])
  const loadList = async () => {
    const res = await axios.get(apiUrl)
    list.value = res.data.data.channels
  }
  // 以对象方式返回
  return { count, doubleCount, increment, list, loadList }
})