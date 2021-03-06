import VueRouter from 'vue-router'
// 导入 login和register 组件
import login from './components/login.vue'
import register from './components/register.vue'
import permission from './views/permission.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/login', component: login },
    { path: '/register', component: register },
    { path: '/permission', component: permission ,
   children:[
    { path: 'user', component: () => import('./views/permission/user.vue')},
    { path: 'role', component: () => import('./views/permission/role.vue')}
  ]}
  ]
})

export default router