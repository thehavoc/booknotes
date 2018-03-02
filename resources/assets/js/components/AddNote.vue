<template>
	<v-form v-model="valid">
		<v-select :items="sources" v-model="note.source_id" label="Select Source" autocomplete item-text="title" item-value="id"></v-select>	

		<v-text-field textarea label="Content" v-model="note.content" name="content" required :rules="contentRules"></v-text-field>

		<v-btn @click="submit" :disabled="!valid" id="submit">submit</v-btn>
  </v-form>
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
					content: '',
					source_id: ''			
				},
				contentRules: [
					v => !!v || 'Content is required',
				]
			}
		},

		computed: {
			...mapGetters({
				'sources': 'sources/sources'
			})
		},

		methods: {
			...mapActions({
				'addNote': 'notes/addNote',
				'fetchSources': 'sources/fetchSources'
			}),

			/**
			 * Dispatch a request to the store to add a note
			 * @return void
			 */			
			submit() {		
				if(this.valid) {
					this.addNote(this.note);
				}
			}
		},

		/**
		 * Dispatch a request to the store to get all the sources of the particular logged-in user.
		 */		
		mounted() {
			this.fetchSources();
		}		
	}
</script>
