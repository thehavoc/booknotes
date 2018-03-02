<template>
	<v-form v-model="valid">
		<v-text-field label="Title" v-model="source.title" name="title" required :rules="titleRules"></v-text-field>

		<v-text-field label="URL" v-model="source.url" name="url" required :rules="urlRules"></v-text-field>

		<v-btn @click="submit" :disabled="!valid" id="submit">submit</v-btn>
  </v-form>	
</template>

<script>
	/**
	 * A component that allows adding a source.
	 */	 
	import { mapGetters, mapActions } from 'vuex';

	export default {
		data() {
			return {
				valid: true,
				source: {
					title: '',
					url: ''
				},
				titleRules: [
					v => !!v || 'Title is required',
				],
				urlRules: [
					v => !!v || 'URL is required',
				],				
			}
		},

		methods: {
			...mapActions({
				'addSource': 'sources/addSource'
			}),

			/**
			 * Dispatch a request to the store to add a source
			 * @return void
			 */			
			submit() {		
				if(this.valid) {
					this.addSource(this.source);
				}
			}
		}


	}
</script>