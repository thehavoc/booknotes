/**
 * This is a module that stores a notification message that is shown to the user once an action is completed.
 */

export default {
	namespaced: true,
	state: {
		message: ''	  
	},
	getters: {
		/**
		 * Get the message.
		 * @param {Object} state
		 * @return {String}
		 */
		message(state) {
			return state.message;
		}
	},
	mutations: {
		/**
		 * Change the message and then remove it.
		 * @param {Object} state
		 * @param {String} newMessage
		 * @return void
		 */	
		CHANGE(state, message) {
			state.message = message;

			setTimeout(() => {
				state.message = '';
			}, 2500);
		}
	},
	actions: {
		/**
		 * Update the message through a mutator.
		 * @param {Object} commit
		 * @return void
		 */		
		update({commit}, message) {
			commit('CHANGE', message);
		}
	}

}