<template>
	<v-container grid-list-sm>		
		<v-layout row wrap>
			<v-flex d-flex xs12 order-xs5>
				<v-layout column v-if="notes[0]">
					<NotesItem v-for="note in notes" :key="note.id" :note="note"/>
				</v-layout>

				<v-layout column v-else>
					<v-flex>
						<v-card flat>
							<v-card-text>				
								<div>There are no added notes. Please add a note from <router-link to="add-note">this link.</router-link></div>
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	/**
	 * The main component that pulls the logged-in user's notes.
	 */	
	import { mapGetters, mapActions } from 'vuex';
	import NotesItem from './NotesItem.vue';

	export default {
		components: {
			NotesItem
		},

		data() {
			return {
			}
		},

		computed: {
			...mapGetters('notes', [
				'notes'
			])
		},

		methods: {
			...mapActions('notes', [
				'fetchNotes'
			])
		},

		/**
		 * Dispatch a request to the store to get all the notes of the particular logged-in user.
		 */		
		mounted() {
			this.fetchNotes();
		}
	}
</script>
