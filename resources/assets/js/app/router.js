import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>', mounted() { this.flash('Validation failed', 'info'); } }
const Bar = { template: '<div>bar</div>' }

const routes = [
	{ 
		path: '/notes', 
		name: 'notes', 
		component: Foo,
		root: true
	},
	{ 
		path: '/add', 
		name: 'addBook', 
		component: Bar
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