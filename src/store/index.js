/**
 * Import Dependency
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Root Scope of VUEX
 */
/**
 * Module Scope of VUEX
 */
import lang from './modules/lang'

/**
 * Config
 */
Vue.use(Vuex)

/**
 * Export
 */
export default new Vuex.Store({
	modules: {
		lang
	},
	strict: false
})
