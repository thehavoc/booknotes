<template>
	<v-flex>
		<v-card flat>
			<v-card-text class="pb-0">
				<div>
					<span class="caption grey--text" v-if="note.source">
						Source: <a class="grey--text" href="#">{{ note.source.title }}</a>
					</span>
					<span class="right caption grey--text" v-text="note.created_at"></span>
				</div>

				<div v-text="note.content" v-if="!editedNote"></div>

				<v-text-field name="content" v-if="editedNote" multi-line v-model="note.content"></v-text-field>
			</v-card-text>

			<v-card-actions>
				<v-btn id="edit-note" icon small @click="edit">
					<v-icon small :color="editButtonColor">edit</v-icon>
				</v-btn>

				<v-btn icon small>
					<v-icon small color="black">favorite</v-icon>
				</v-btn>

				<v-spacer></v-spacer>
				
				<v-btn id="remove-note" @click="remove" icon small>
					<v-icon small color="red">delete</v-icon>
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-flex>
</template>

<script>
	/**
	 * This is a child component that shows the details of a note.
	 */	
	import { mapGetters, mapActions } from 'vuex';

	export default {
		props: {
			note: Object			
		},

		data() {
			return {
				editedNote: false
			}
		},

		computed: {
			editButtonColor() {
				if(this.editedNote) {
					return 'green';
				}

				return 'blue';
			}
		},

		methods: {
			...mapActions('notes', [
				'deleteNote',
				'updateNote'
			]),

			/**
			 * Dispatch a request to the store to delete the note.
			 * return void
			 */
			remove() {
				if(window.confirm('Are you sure you want to delete this item?')) {
					return this.deleteNote(this.note);
				}
			},

			/**
             * Enable the edit mode
			 * Dispatch a request to the store to edit the note.
			 * return {mixed}
			 */
			 edit() {
			 	if(!this.editedNote) {
			 		return this.editedNote = true;
			 	}

			 	this.updateNote(this.note).then(() => {
			 		this.editedNote = false;
			 	});
			 }
		},

		mounted() {
		}
	}
</script>