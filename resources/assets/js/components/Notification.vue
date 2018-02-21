<template>
	<v-alert type="success" :value="message ? true : false">
		{{ message }}
	</v-alert>	
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
		])
	}
}

</script>