import { createApp } from 'vue'
import router from '@/router'
import appCp from '@/App.vue'

import { createPinia } from 'pinia'
import persistedState from 'pinia-plugin-persistedstate'
import elementPlus from 'element-plus'
import * as elementPlusIcons from '@element-plus/icons-vue'



import 'virtual:uno.css'
import '@/styles/var.less'
import '@/styles/mixin.less'
import '@/styles/global.less'

const app = createApp(appCp)
app.use(createPinia().use(persistedState))
  .use(router)
  .use(elementPlus)
  .mount('#app')

for (const [key, component] of Object.entries(elementPlusIcons)) {
  app.component(key, component)
}
