<template>
	<v-flex>
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
				<v-btn icon small>
					<v-icon small color="blue">edit</v-icon>
				</v-btn>

				<v-btn icon small>
					<v-icon small color="black">favorite</v-icon>
				</v-btn>

				<v-spacer></v-spacer>
				
				<v-btn icon small>
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

		mounted() {
		}
	}
</script>