import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		listhotword:""
	},
	actions:{
		"UPDATA_NAME":function(store,payload){
			console.log(payload)
			/*
				数据的二次加工
				ajax 异步请求

			 */
			 store.commit("UPDATA_NAME_MUTATION",payload)
		}
	},
	mutations:{
		"UPDATA_NAME_MUTATION":function(state,payload){
			console.log('mutition----'+ payload)
			state.listhotword = payload
		}
	}
})

export default store;
