/**
 * Import Global Style (.css/.scss)
 */
import './assets/scss/index.scss' // Customize UI
import VueSVGIcon from 'vue-svgicon'

/**
 * Import Dependency
 */
import Vue from 'vue'
import store from './store'
import VueMoment from 'vue-moment'
import head from 'vue-head'
import 'es6-promise/auto'
import { sync } from 'vuex-router-sync'
import i18n from './locales'
import router from './router'
import VueFire from 'vuefire'
import firebase from './firebase/firebase'
Vue.prototype.$firebase = firebase
Vue.prototype.$db = firebase.database()
/**
 * Import Component (.vue)
 */
import App from './App.vue'

/**
 * Global Config
 */
Vue.config.productionTip = false

Vue.use(head)
sync(store, router)
Vue.use(VueSVGIcon)
Vue.use(VueMoment)
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	i18n,
	router,
	template: '<App/>',
	components: { App }
})
