import Vue from 'vue';
import VueRouter from 'vue-router';
import Notes from '../components/Notes';
import AddNote from '../components/AddNote';
import AddSource from '../components/AddSource';

Vue.use(VueRouter);

const routes = [
	{ 
		path: '/notes', 
		name: 'notes', 
		component: Notes,
		root: true,
		meta: { 
			title: 'Notes'
		}
	},
	{ 
		path: '/add-note', 
		name: 'addNote', 
		component: AddNote,
		meta: { 
			title: 'Add new note'
		}		
	},
	{ 
		path: '/add-source', 
		name: 'addSource', 
		component: AddSource,
		meta: { 
			title: 'Add new source'
		}		
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