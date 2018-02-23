<template>
	<v-container>		
		<v-form v-model="valid">
			<v-text-field textarea label="Content" v-model="note.content" name="content" required :rules="contentRules"></v-text-field>

			<v-btn @click="submit" :disabled="!valid" id="submit">submit</v-btn>
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
					content: ''					
				},
				contentRules: [
					v => !!v || 'Content is required',
				],				
			}
		},

		methods: {
			...mapActions('notes', [
				'addNote'
			]),

			/**
			 * Dispatch a request to the store to add a note.
			 * @return void
			 */			
			submit() {
				this.addNote(this.note);
			}
		}
	}
</script>
