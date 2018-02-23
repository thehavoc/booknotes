<template>
	<v-snackbar type="success" v-model="snackbar">
		{{ message }}

		<v-btn flat color="pink" @click.native="update('')">Close</v-btn>
	</v-snackbar>
</template>

<script>
/**
 * This is a component that shows an alert box with a message when an action completes.
 */			
import { mapGetters, mapActions } from 'vuex'	

export default {
	methods: {
		...mapActions('notification', [
			'update',
		])	
	},

	computed: {
		...mapGetters('notification', [
			'message'
		]),

		/**
		 * Show the notification bar
		 * return {Boolean}
		 */
		snackbar() {
			if(this.message) {
				return true;
			}

			return false;
		}
	}
}

</script>