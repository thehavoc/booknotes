/**
 * This is the main place for saving/fetching data that can be shared between all components.
 * Everything is added into modules. 
 * The store communicates with the application's database using a dedicated API class.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import notes from './modules/notes'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		notes
	}
});