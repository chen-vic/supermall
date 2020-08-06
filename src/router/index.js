import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home',
      meta: {
        title: '首页'
      }
    },
    {
      path:'/home',
      component:Home,
      meta: {
        title: '首页'
      }
    },
    {
      path:'/category',
      component: Category,
      meta: {
        title: '分类'
      }
    },
    {
      path:'/cart',
      component: Cart,
      meta: {
        title: '购物车'
      }
    },
    {
      path:'/profile',
      component: Profile,
      meta: {
        title: '我的'
      }
    },
    {
      path: '/detail/:id',
      component: Detail,
      meta: {
        title: '详情'
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
