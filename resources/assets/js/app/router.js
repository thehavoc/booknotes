import Vue from 'vue';
import VueRouter from 'vue-router';
import Notes from '../components/Notes';
import AddNote from '../components/AddNote';

Vue.use(VueRouter);

const routes = [
	{ 
		path: '/notes', 
		name: 'notes', 
		component: Notes,
		root: true
	},
	{ 
		path: '/add-note', 
		name: 'addNote', 
		component: AddNote
	},	
	{ 
		path: '/', 
		redirect: {
			name: 'notes'
		}
	},		
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router;