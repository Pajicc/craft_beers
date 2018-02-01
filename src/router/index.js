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
const SignUp = () => import('@/pages/signUp/signUp.vue')
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
				path: '/signUp',
				component: SignUp,
				name: 'signUp'
			}
		]
	})

/**
 * Router Guards
 */

export default router
