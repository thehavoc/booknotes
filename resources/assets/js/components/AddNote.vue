<template>
	<v-container>		
		<v-form v-model="valid">
			<v-text-field label="Description" v-model="note.description" required></v-text-field>

			<v-btn @click="submit">submit</v-btn>
	  </v-form>
	</v-container>
</template>

<script>
	/**
	 * A component that allows adding a note.
	 */
	import { mapGetters, mapActions } from 'vuex'; 

	export default {
		data() {
			return {
				valid: true,
				note: {
					description: ''
				}
			}
		},

		methods: {
			/**
			 * Dispatch a request to the store to add a note.
			 * @return {Promise}
			 */			
			submit() {
			}
		},

		mounted() {
		}
	}
</script>
