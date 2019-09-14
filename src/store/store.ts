import Vue from "vue";
import Vuex, { GetterTree, MutationTree, ActionTree } from "vuex";
import jwt_decode from "jwt-decode";
import { asyncRounterMap } from "@/router";

Vue.use(Vuex);

const state: any = {
	user: null,
	routers: asyncRounterMap
};

const getters: GetterTree<any, any> =  {
	user(state: any): any {
		return state.user;
	},
	routers(state: any): any {
		return state.routers;
	}
};

const mutations: MutationTree<any> = {
	SET_USER(state: any, user: any): void {
		state.user = user;
	}
};

const actions: ActionTree<any, any> = {
	async setUser({state, commit}, user: any) {
		const decoded = jwt_decode(user);
		commit('SET_USER', decoded);
	}
};

export default new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
});
