/**
 * Import Dependency
 */
import {
	SET_LANGUAGE
} from '../mutation_types'

import i18n from '../../locales'

 const state = {
	language: ''
}

 const actions = {
	switchI18n({ commit }, context) {
		commit(SET_LANGUAGE, context)
	}
}

const mutations = {
	[SET_LANGUAGE](state, data) {
		i18n.locale = data
		state.language = data
		// localStorage.setItem('language', data)
	}
}

export default {
	state,
	actions,
	mutations
}
