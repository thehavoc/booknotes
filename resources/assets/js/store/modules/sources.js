/**
 * This ia module that stores, updates, deletes and adds sources.
 */

import Api from '../../api';
import ApiRoutes from '../../api/routes.js';

const api = new Api();
const apiRoutes = new ApiRoutes();

export default {
	namespaced: true,
	state: {
		sources: []
	},
	getters: {
		/**
		 * Get all sources
		 * @param {Object} state
		 * @return {Object}
		 */		
		sources(state) {
			return state.sources
		}
	},
	mutations: {
		/**
		 * Set sources to the state
		 * @param {Object} state
		 * @param {Object} sources
		 * @return void
		 */
		SET(state, sources) {
			state.sources = sources;
		}	
	},
	actions: {
		/**
		 * Get all current user's sources
		 * @param {Object} commit
		 * @return {Promise}
		 */
		fetchSources({ commit }) {
			return api.get(apiRoutes.getUrl('sources')).then((res) => {
				commit('SET', res);
			});
		},

		/**
		 * Add a source
		 *
		 * @param {Object} { commit, dispatch }
		 * @param {Object} source
		 * @return {Promise}
		 */	
		addSource({ commit, dispatch }, source) {
			return api.post(apiRoutes.getUrl('addSource'), source).then((res) => {
				dispatch('notification/update', 'A new source has been added.', { root: true });
			});
		},		
	}
}