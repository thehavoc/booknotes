window._ = require('lodash');

window.Vue = require('vue');

import './app/axios';
import './app/vuex';
import './app/flash';
import './app/vuetify';
import router from './app/router';

const mainMenuItems = [
	{
		name: 'notes',
		title: 'Notes',
		icon: 'home'
	},
	{
		name: 'addBook',
		title: 'Add new book',
		icon: 'add'
	}	
];

const app = new Vue({
    el: '#app',
    router,
    data: {
    	drawer: true,
    	mainMenuItems
    }
});
