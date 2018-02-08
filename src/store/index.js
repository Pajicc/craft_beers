/**
 * Import Dependency
 */
import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-localstorage'
/**
 * Root Scope of VUEX
 */
/**
 * Module Scope of VUEX
 */
import lang from './modules/lang'
import user from './modules/user'

/**
 * Config
 */
Vue.use(Vuex)

/**
 * Export
 */
export default new Vuex.Store({
	modules: {
		lang,
		user
	},
	plugins: [persist({
		namespace: 'craft_beers',
		initialState: {},
		expires: 7 * 24 * 60 * 60 * 1e3 // 1 week
	})],
	strict: false
})
