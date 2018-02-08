import * as firebase from 'firebase'

const state = {
  user: null
}

const getters = {
    user(state) {
        return state.user
    }
}

const mutations = {
    setUser(state, user) {
        state.user = user
    }
}

const actions = {
    userSignUp({commit}, payload) {
        return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
            user => {
                var newUser = {
                    email: user.email,
                    name: user.displayName,
                    emailVerified: user.emailVerified,
                    phone: user.phoneNumber
                }
                commit('setUser', newUser)
            }
        )
    },
    userSignIn({commit}, payload) {
        return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
            user => {
                var newUser = {
                    email: user.email,
                    name: user.displayName,
                    emailVerified: user.emailVerified
                }
                commit('setUser', newUser)
            }
        )
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}
