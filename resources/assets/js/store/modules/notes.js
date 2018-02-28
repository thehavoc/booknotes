/**
 * This ia module that stores, updates, deletes and adds notes.
 */

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
		 * Get all notes
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
		},

		/**
		 * Remove a note from the state.
		 * @param {Object} state
		 * @param {Object} index
		 * @return void
		 */
		REMOVE(state, index) {
			state.notes.splice(index, 1);
		}		
	},
	actions: {
		/**
		 * Get all current user's notes
		 * @param {Object} commit
		 * @return {Promise}
		 */
		fetchNotes({ commit }) {
			return api.get(apiRoutes.getUrl('notes')).then((res) => {
				commit('SET', res);
			});
		},

		/**
		 * Add a note
		 *
		 * @param {Object} { commit, dispatch }
		 * @param {Object} note
		 * @return {Promise}
		 */	
		addNote({ commit, dispatch }, note) {
			return api.post(apiRoutes.getUrl('addNote'), note).then((res) => {
				dispatch('notification/update', 'A new note has been added.', { root: true });
			});
		},

		/**
		 * Delete a note
		 *
		 * @param {Object} { commit, dispatch, state }
		 * @param {Object} note
		 * @return {Promise}
		 */	
		deleteNote({ commit, dispatch, state }, note) {
			return api.delete(apiRoutes.getUrl('deleteNote') + note.id, note).then((res) => {
				let index = state.notes.indexOf(note);

				if(index > -1) {
					commit('REMOVE', index);
				}
			
				dispatch('notification/update', 'The note has been deleted.', { root: true });
			});
		},

		/**
		 * Update a note
		 *
		 * @param {Object} { commit, dispatch, state }
		 * @param {Object} note
		 * @return {Promise}
		 */
		updateNote({ commit, dispatch, state }, note) {
			return api.patch(apiRoutes.getUrl('updateNote') + note.id, note).then((res) => {
				dispatch('notification/update', 'The note has been updated.', { root: true });
			});
		}
	}
}