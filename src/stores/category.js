import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';

export const useCategoryStore = defineStore('category', () => {
  // 存放 category 数据
  const categoryList = ref([])

  // 调用 api 获取 category 数据
  const getCategory = async () => {
      const res = await getCategoryAPI()
      categoryList.value = res.result
  }
  // 以对象方式返回
  return { categoryList, getCategory }
})