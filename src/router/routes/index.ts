import type { RouteRecordRaw } from 'vue-router'
import { useMyStore } from '@/stores'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: () => {
      const store = useMyStore()
      if (store.token != '') {
        return {
          name: 'myHome'
        }
      } else {
        return {
          name: 'login'
        }
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: 'login'
    }
  },
  {
    path: '/myHome',
    name: 'myHome',
    component: () => import('@/views/myHome.vue'),
    meta: {
      title: 'myHome'
    }
  },
  {
    path: '/shares/:id',
    name: 'shares',
    component: () => import('@/components/Share.vue'),
    meta: {
      title: 'share'
    }
  }
  /**
   * 子路由示例
   */
  // {
  //   path: '/foo',
  //   name: 'foo',
  //   component: () => import('@/components/TransferStation.vue'),
  //   meta: {
  //     title: 'Foo',
  //   },
  //   redirect: {
  //     name: 'bar',
  //   },
  //   children: [
  //     {
  //       path: 'bar',
  //       name: 'bar',
  //       component: () => import('@/views/foo/bar.vue'),
  //       meta: {
  //         title: 'Bar',
  //       },
  //     },
  //   ],
  // },
]

export default routes
