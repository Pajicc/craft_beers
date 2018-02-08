import i18n from '../../locales'

 const state = {
	language: ''
}

 const actions = {
	switchI18n({ commit }, context) {
		commit('setLanguage', context)
	}
}

const mutations = {
	setLanguage(state, data) {
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
