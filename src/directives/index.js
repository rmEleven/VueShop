// 懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        // 指令逻辑
        app.directive('img-lazy', {
            mounted (el, binding) {
                // el: 指令绑定的元素 img
                // binding: 指令绑定的表达式的值 src
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            // 进入视窗区域
                            el.src = binding.value
                            // 避免重复监听
                            stop()
                        }
                    }
                )
            }
        })
    }
}