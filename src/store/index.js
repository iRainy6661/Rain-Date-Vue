import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userName: ''
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true
			state.userName = provider
		},
		logout(state) {
			state.hasLogin = false
			state.userName = ''
		}
	},
	getters: {
		getHasLogin(state) {
			return state.hasLogin
		}
	}
})

export default store