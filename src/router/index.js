/**
 * Import Dependency
 */
import Vue from 'vue'
import Router from 'vue-router'

/**
 * Import Component (.vue)
 * For Async Component Syntax
 * const X = () => import('@/pages/xxx/xxx.vue')
 */
const Home = () => import('@/pages/home/home.vue')
const Register = () => import('@/pages/register/register.vue')
/**
 * Config
 */
Vue.use(Router)

/**
 * Declare Variable
 */

const router = new Router({
		mode: 'history',
		linkActiveClass: 'active',
		routes: [
			{
				path: '*',
				component: Home,
				name: 'home'
			},
			{
				path: '/register',
				component: Register,
				name: 'register'
			}
		]
	})

/**
 * Router Guards
 */

export default router
