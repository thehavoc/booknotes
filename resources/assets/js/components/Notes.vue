<template>
	<v-container grid-list-sm>
		<v-layout row wrap>
			<v-flex tag="h2" class="headline">Notes</v-flex>

			<v-flex d-flex xs12 order-xs5>
				<v-layout column v-if="notes[0]">
					<v-flex v-for="note in notes" :key="note.id">
						<v-card flat>
							<v-card-text class="pb-0">
								<div>
									<span class="caption grey--text">
										Book: <a class="grey--text" href="#">{{ note.book.name }}</a>
									</span>
									<span class="right caption grey--text" v-text="note.created_at"></span>
								</div>
								<div v-text="note.description"></div>
							</v-card-text>

							<v-card-actions>
								<v-btn icon small v-for="action in leftActions" :key="action.name">
									<v-icon small :color="action.class">{{ action.name }}</v-icon>
								</v-btn>

								<v-spacer></v-spacer>
								
								<v-btn icon small v-for="action in rightActions" :key="action.name">
									<v-icon small :color="action.class">{{ action.name }}</v-icon>
								</v-btn>								
							</v-card-actions>							
						</v-card>
					</v-flex>
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

	export default {
		/**
		 * Dispatch a request to the store to get all the notes of the particular logged-in user.
		 */		
		mounted() {
			this.fetchNotes();
		},

		data() {
			return {
				leftActions: [
					{
						name: 'edit',
						class: 'blue'
					},
					{
						name: 'favorite',
						class: 'black'
					},	
				],
				rightActions: [
					{
						name: 'delete',
						class: 'red'
					}						
				]
			}
		},

		methods: {
			...mapActions('notes', [
				'fetchNotes'
			])
		},

		computed: {
			...mapGetters('notes', [
				'notes'
			])
		}			
	}
</script>
