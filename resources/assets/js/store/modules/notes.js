import Api from '../../api';
import ApiRoutes from '../../api/routes.js';

const api = new Api();
const apiRoutes = new ApiRoutes();

export default {
	namespaced: true,
	state: {
		notes: []
	},
	getters: {
		/**
		 * Get all notes.
		 * @param {Object} state
		 * @return {Object}
		 */		
		notes(state) {
			return state.notes
		}
	},
	mutations: {
		/**
		 * Set notes to the state
		 * @param {Object} state
		 * @param {Object} notes
		 * @return void
		 */
		SET(state, notes) {
			state.notes = notes;
		}
	},
	actions: {
		/**
		 * Get all current user's notes
		 * @param {Object} commit
		 * @param {Object} date
		 * @return {Promise}
		 */
		fetchNotes({ commit }, date) {
			return api.get(apiRoutes.getUrl('notes')).then((res) => {
				commit('SET', res);
			});
		},

		/**
		 * Add a note to the database
		 *
		 * @param {Object} {commit, dispatch}
		 * @param {Object} note
		 * @return {Promise}
		 */	
		 addNote({ commit, dispatch }, note) {
		 	return api.post(apiRoutes.getUrl('addNote'), note);
		 }
	}
}