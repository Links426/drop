import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import 'uno.css'
import '@/assets/css/reset.css'

import MyCard from '@/components/myCard.vue'
import BorderCard from '@/components/borderCard.vue'

import router from '@/router'
import 'normalize.css'
import App from './App.vue'

// 引入iconfont
import '@/assets/font/iconfont.css'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(ArcoVue)
    .use(ArcoVueIcon)
    .component('MyCard', MyCard)
    .component('BorderCard', BorderCard)
    .mount('#app')
